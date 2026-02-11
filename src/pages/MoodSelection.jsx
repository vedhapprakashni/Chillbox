import React from 'react';
import NeoCard from '../components/NeoCard';

const MoodSelection = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <h2 className="text-4xl font-display mb-8">How are you feeling?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NeoCard className="bg-primary hover:bg-opacity-80 cursor-pointer transition-colors">
                    <h3 className="text-2xl font-bold mb-2">Stressed 😫</h3>
                    <p>I need to calm down quickly.</p>
                </NeoCard>
                <NeoCard className="bg-secondary hover:bg-opacity-80 cursor-pointer transition-colors">
                    <h3 className="text-2xl font-bold mb-2">Nervous 🦋</h3>
                    <p>I have butterflies in my stomach.</p>
                </NeoCard>
                <NeoCard className="bg-chill-purple hover:bg-opacity-80 cursor-pointer transition-colors">
                    <h3 className="text-2xl font-bold mb-2">Low Focus ☁️</h3>
                    <p>I can't concentrate.</p>
                </NeoCard>
            </div>
        </div>
    );
};

export default MoodSelection;
