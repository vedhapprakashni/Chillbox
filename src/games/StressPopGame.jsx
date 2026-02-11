import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

const StressPopGame = () => {
    const navigate = useNavigate();
    // 6x6 Grid of bubbles
    const [bubbles, setBubbles] = useState(Array(36).fill(false)); // false = unpopped, true = popped

    const popBubble = (index) => {
        if (bubbles[index]) return;

        // Vibrate device if supported
        if (navigator.vibrate) navigator.vibrate(50);

        // Optimistic UI update
        const newBubbles = [...bubbles];
        newBubbles[index] = true;
        setBubbles(newBubbles);

        // Auto-reset if all popped? Or just stay popped for satisfaction?
        // Let's auto-regenerate individual bubbles after a delay for "Infinite" popping
        setTimeout(() => {
            setBubbles((prev) => {
                const reset = [...prev];
                reset[index] = false;
                return reset;
            });
        }, 2000);
    };

    const handleFinish = () => {
        navigate('/cooldown');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-bg select-none">
            <h2 className="text-4xl font-display mb-2">Stress Pop</h2>
            <p className="text-xl mb-8">Pop as many as you need. They come back.</p>

            <div className="grid grid-cols-6 gap-3 mb-8 p-4 bg-gray-200 rounded-xl border-2 border-black shadow-[4px_4px_0_#000]">
                {bubbles.map((isPopped, i) => (
                    <motion.div
                        key={i}
                        className={`w-12 h-12 rounded-full border-2 border-black cursor-pointer transition-colors ${isPopped ? 'bg-primary scale-90 shadow-inner' : 'bg-chill-yellow shadow-[2px_2px_0_#000]'
                            }`}
                        onClick={() => popBubble(i)}
                        whileTap={{ scale: 0.8 }}
                        animate={{
                            scale: isPopped ? 0.9 : 1,
                            backgroundColor: isPopped ? '#a8dadc' : '#ffe66d'
                        }}
                    />
                ))}
            </div>

            <NeoButton onClick={handleFinish} variant="primary">
                I'm Feeling Better
            </NeoButton>
        </div>
    );
};

export default StressPopGame;
