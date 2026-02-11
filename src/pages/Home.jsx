import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeoButton from '../components/NeoButton';
import { motion } from 'framer-motion';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Decorative Blobs */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-32 h-32 bg-chill-yellow rounded-full border-2 border-black shadow-[4px_4px_0_#000] -z-10 opacity-60"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-48 h-48 bg-chill-purple rounded-full border-2 border-black shadow-[4px_4px_0_#000] -z-10 opacity-60"
            />

            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-7xl md:text-9xl font-display mb-4 text-primary drop-shadow-[5px_5px_0_#000]"
            >
                CHILLBOX
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl mb-12 font-bold text-center max-w-lg"
            >
                Beat the nerves. Ace the interview. <br />
                <span className="text-secondary">Just breathe & play.</span>
            </motion.p>

            <NeoButton onClick={() => navigate('/mood')} variant="primary" className="text-2xl px-12 py-6">
                Start Relaxing 🧘‍♂️
            </NeoButton>
        </div>
    );
};

export default Home;
