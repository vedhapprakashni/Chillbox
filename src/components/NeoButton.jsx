import { motion } from 'framer-motion';

const NeoButton = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_#000] transition-all rounded-lg text-lg";

    const variants = {
        primary: "bg-secondary text-text",
        secondary: "bg-primary text-text",
        accent: "bg-accent text-white",
        chill: "bg-chill-green text-text"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default NeoButton;
