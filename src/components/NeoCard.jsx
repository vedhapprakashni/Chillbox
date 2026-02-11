import { motion } from 'framer-motion';

const NeoCard = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
            className={`bg-white border-2 border-black shadow-[6px_6px_0_#000] rounded-xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default NeoCard;
