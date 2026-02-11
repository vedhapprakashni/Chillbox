import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';
import { Check } from 'lucide-react';

const checklistItems = [
    "I have taken deep breaths.",
    "I have my resume/notes ready.",
    "I have water nearby.",
    "I am confident in my skills.",
    "I am ready to listen and engage."
];

const Ready = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState({});

    const toggleCheck = (index) => {
        setChecked(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const allChecked = checklistItems.every((_, i) => checked[i]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-chill-yellow/20">
            <h2 className="text-4xl font-display mb-8 drop-shadow-[2px_2px_0_#000]">Final Check ✅</h2>

            <div className="flex flex-col gap-4 mb-8 w-full max-w-md">
                {checklistItems.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-4 rounded-xl border-2 border-black shadow-[4px_4px_0_#000] flex items-center gap-4 cursor-pointer transition-colors ${checked[i] ? 'bg-chill-green' : 'bg-white'
                            }`}
                        onClick={() => toggleCheck(i)}
                    >
                        <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center ${checked[i] ? 'bg-white' : 'bg-gray-100'
                            }`}>
                            {checked[i] && <Check size={20} />}
                        </div>
                        <span className={`text-lg font-bold ${checked[i] ? 'line-through opacity-70' : ''}`}>
                            {item}
                        </span>
                    </motion.div>
                ))}
            </div>

            {allChecked && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold mb-4">You are ready. Go crush it! 🚀</h3>
                    <NeoButton onClick={() => navigate('/')} variant="secondary">
                        Back to Home
                    </NeoButton>
                </motion.div>
            )}
        </div>
    );
};

export default Ready;
