import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

const tips = [
    "Take a deep breath. You are prepared.",
    "Visualize your success.",
    "It's okay to take a moment for yourself.",
    "You've got this. Trust your preparation.",
    "Smile. It actually helps reduce stress!"
];

const Cooldown = () => {
    const navigate = useNavigate();
    const [tip, setTip] = useState("");

    useEffect(() => {
        setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-chill-green/20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-2xl"
            >
                <h2 className="text-5xl font-display mb-8 text-primary drop-shadow-[2px_2px_0_#000]">
                    Great Job. 💙
                </h2>

                <div className="bg-white p-8 rounded-xl border-2 border-black shadow-[6px_6px_0_#000] mb-12">
                    <p className="text-2xl font-bold mb-2">Remember:</p>
                    <p className="text-xl italic">"{tip}"</p>
                </div>

                <div className="flex flex-col gap-4 md:flex-row justify-center">
                    <NeoButton onClick={() => navigate('/games')} variant="secondary">
                        Play Another Game
                    </NeoButton>
                    <NeoButton onClick={() => navigate('/ready')} variant="primary" className="bg-white">
                        I'm Ready for My Interview
                    </NeoButton>
                </div>
            </motion.div>
        </div>
    );
};

export default Cooldown;
