import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

const BreathingGame = () => {
    const navigate = useNavigate();
    const [phase, setPhase] = useState('Inhale'); // Inhale, Hold, Exhale
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute session
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            navigate('/cooldown');
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, navigate]);

    // Breathing Cycle Logic
    useEffect(() => {
        if (!isActive) return;

        const cycle = async () => {
            // 4-7-8 Breathing Technique (scaled down for faster visual feedback loop if needed, but standard is good)
            // Let's use 4s Inhale, 4s Hold, 4s Exhale for simplicity/beginner friendly
            setPhase('Inhale 😤');
            await new Promise(r => setTimeout(r, 4000));

            setPhase('Hold 😐');
            await new Promise(r => setTimeout(r, 4000));

            setPhase('Exhale 😮‍💨');
            await new Promise(r => setTimeout(r, 4000));

            if (isActive) cycle(); // Loop
        };

        cycle();

        return () => { }; // Cleanup not strictly simple here without refs, but okay for this scope
    }, [isActive]);

    const variants = {
        inhale: { scale: 1.5, opacity: 1, backgroundColor: '#b7e4c7' }, // Mint
        hold: { scale: 1.5, opacity: 0.8, backgroundColor: '#f4a261' }, // Orange
        exhale: { scale: 1, opacity: 1, backgroundColor: '#a8dadc' },   // Blue
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-bg">
            <h2 className="text-4xl font-display mb-4">Breathing Space</h2>
            <p className="text-xl mb-8">Time Remaining: {timeLeft}s</p>

            <div className="relative flex items-center justify-center w-80 h-80">
                {/* Expanding Circle */}
                <motion.div
                    className="w-48 h-48 rounded-full border-4 border-black shadow-[4px_4px_0_#000] flex items-center justify-center z-10"
                    animate={
                        phase.includes('Inhale') ? 'inhale' :
                            phase.includes('Hold') ? 'hold' : 'exhale'
                    }
                    variants={variants}
                    transition={{ duration: 4, ease: "easeInOut" }}
                >
                    <span className="text-2xl font-bold">{phase}</span>
                </motion.div>

                {/* Ripples */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 opacity-30"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
                />
            </div>

            {!isActive && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <NeoButton onClick={() => setIsActive(true)} size="large">
                        Start Breathing
                    </NeoButton>
                </div>
            )}

            {isActive && (
                <p className="mt-12 text-lg text-gray-600 animate-pulse">
                    You are doing great. Just follow the circle. 💙
                </p>
            )}
        </div>
    );
};

export default BreathingGame;
