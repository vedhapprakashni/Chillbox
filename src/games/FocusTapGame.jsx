import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

const FocusTapGame = () => {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [targets, setTargets] = useState([]);

    // Timer
    useEffect(() => {
        let interval;
        if (isPlaying && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsPlaying(false);
            // Ideally show score summary here, then navigate
            setTimeout(() => navigate('/cooldown'), 2000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeLeft, navigate]);

    // Game Loop: Add targets randomly
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            const id = Math.random();
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 70 + 15; // 15% to 85%

            setTargets((prev) => [...prev, { id, x, y }]);

            // Remove target after 2 seconds if not clicked (missed)
            setTimeout(() => {
                setTargets((prev) => prev.filter((t) => t.id !== id));
            }, 2000);

        }, 800); // New target every 0.8s

        return () => clearInterval(interval);
    }, [isPlaying]);

    const handleTap = (id) => {
        setScore(s => s + 1);
        setTargets(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-bg cursor-crosshair select-none">
            <div className="absolute top-4 left-0 right-0 flex justify-between px-8 text-2xl font-bold">
                <span>Score: {score}</span>
                <span>Time: {timeLeft}s</span>
            </div>

            <AnimatePresence>
                {targets.map((target) => (
                    <motion.div
                        key={target.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        className="absolute w-16 h-16 rounded-full bg-secondary border-2 border-black shadow-[4px_4px_0_#000] cursor-pointer"
                        style={{ top: `${target.y}%`, left: `${target.x}%` }}
                        onMouseDown={() => handleTap(target.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </AnimatePresence>

            {!isPlaying && timeLeft === 60 && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="text-center">
                        <h2 className="text-4xl font-display mb-4">Focus Tap</h2>
                        <p className="mb-8 text-xl">Tap the dots before they disappear!</p>
                        <NeoButton onClick={() => setIsPlaying(true)} variant="primary">Start Game</NeoButton>
                    </div>
                </div>
            )}

            {timeLeft === 0 && (
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-50">
                    <h2 className="text-4xl font-display">Well done! Score: {score} 🎯</h2>
                </div>
            )}
        </div>
    );
};

export default FocusTapGame;
