import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

const MemoryGame = () => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [level, setLevel] = useState(1);
    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [isShowingSequence, setIsShowingSequence] = useState(false);
    const [message, setMessage] = useState("Watch the pattern");

    const gridSize = 9; // 3x3

    // Start Game
    const startGame = () => {
        setIsPlaying(true);
        setLevel(1);
        setSequence([]);
        setUserSequence([]);
        setMessage("Watch closely...");
        nextLevel(1);
    };

    const nextLevel = (currentLevel) => {
        setUserSequence([]);
        setIsShowingSequence(true);
        setMessage(`Level ${currentLevel}`);

        // Add one new step to sequence
        const nextStep = Math.floor(Math.random() * gridSize);
        setSequence(prev => [...prev, nextStep]);
    };

    // Show Sequence Effect
    useEffect(() => {
        if (isShowingSequence && sequence.length > 0) {
            let i = 0;
            const interval = setInterval(() => {
                if (i >= sequence.length) {
                    clearInterval(interval);
                    setIsShowingSequence(false);
                    setMessage("Your turn!");
                    return;
                }

                // Flash the tile (handled by active state in render)
                const tileIndex = sequence[i];
                const tile = document.getElementById(`tile-${tileIndex}`);
                if (tile) {
                    tile.classList.add('bg-chill-purple', 'scale-95');
                    setTimeout(() => {
                        tile.classList.remove('bg-chill-purple', 'scale-95');
                    }, 500);
                }

                i++;
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isShowingSequence, sequence]);

    const handleTileClick = (index) => {
        if (!isPlaying || isShowingSequence) return;

        // Flash visual feedback
        const tile = document.getElementById(`tile-${index}`);
        tile.classList.add('bg-secondary');
        setTimeout(() => tile.classList.remove('bg-secondary'), 300);

        const newSequence = [...userSequence, index];
        setUserSequence(newSequence);

        // Check correctness
        if (sequence[newSequence.length - 1] !== index) {
            setMessage("Game Over! Try again.");
            setIsPlaying(false);
            return;
        }

        // Check if level complete
        if (newSequence.length === sequence.length) {
            setMessage("Great job! Next level...");
            setTimeout(() => {
                setLevel(l => l + 1);
                nextLevel(level + 1);
            }, 1000);
        }

        // Win condition (e.g., Level 5) to finish game
        if (level === 5 && newSequence.length === sequence.length) {
            setIsPlaying(false);
            setMessage("You have excellent memory! 🎉");
            setTimeout(() => navigate('/cooldown'), 2000);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-bg">
            <h2 className="text-4xl font-display mb-2">Memory Tiles</h2>
            <p className="text-xl mb-8 min-h-[2rem]">{message}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
                {[...Array(gridSize)].map((_, i) => (
                    <motion.div
                        key={i}
                        id={`tile-${i}`}
                        className="w-24 h-24 bg-white border-2 border-black shadow-[4px_4px_0_#000] rounded-lg cursor-pointer transition-all"
                        onClick={() => handleTileClick(i)}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            {!isPlaying && (
                <NeoButton onClick={startGame}>
                    {sequence.length > 0 ? "Try Again" : "Start Game"}
                </NeoButton>
            )}
        </div>
    );
};

export default MemoryGame;
