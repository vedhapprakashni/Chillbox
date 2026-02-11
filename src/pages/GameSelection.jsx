import React from 'react';
import { useNavigate } from 'react-router-dom';
import NeoCard from '../components/NeoCard';
import { motion } from 'framer-motion';
import { Wind, MousePointer2, Brain, Zap } from 'lucide-react';

const games = [
    {
        id: 'breathing',
        title: 'Breathing',
        icon: <Wind size={48} />,
        description: 'Sync your breath. Calm your mind.',
        color: 'bg-chill-green',
        span: 'col-span-1 md:col-span-2', // Bento: Wide item
    },
    {
        id: 'focus',
        title: 'Focus Tap',
        icon: <MousePointer2 size={48} />,
        description: 'Quick reaction training.',
        color: 'bg-secondary',
        span: 'col-span-1',
    },
    {
        id: 'memory',
        title: 'Memory Tiles',
        icon: <Brain size={48} />,
        description: 'Recall the pattern.',
        color: 'bg-chill-purple',
        span: 'col-span-1',
    },
    {
        id: 'stress-pop',
        title: 'Stress Pop',
        icon: <Zap size={48} />,
        description: 'Infinite satisfying pops.',
        color: 'bg-primary',
        span: 'col-span-1 md:col-span-2', // Bento: Wide item
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const GameSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen p-8 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-display mb-12 text-center drop-shadow-[3px_3px_0_#000]"
            >
                Choose Your Calm
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
            >
                {games.map((game) => (
                    <motion.div key={game.id} variants={item} className={game.span}>
                        <NeoCard
                            className={`${game.color} h-full min-h-[200px] flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer`}
                            onClick={() => navigate(`/game/${game.id}`)} // TODO: Implement route
                        >
                            <div className="flex justify-between items-start">
                                <span className="p-3 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0_#000]">
                                    {game.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-2">{game.title}</h3>
                                <p className="font-medium opacity-90">{game.description}</p>
                            </div>
                        </NeoCard>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default GameSelection;
