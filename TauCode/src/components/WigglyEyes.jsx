import React from 'react';
import { motion } from 'framer-motion';

const WigglyEmoji = () => {
  return (
    <div className="flex items-center justify-center text-6xl relative">
      🥸
      <motion.div
        className="absolute left-[43%] top-[35%] w-[10px] h-[10px] bg-black rounded-full"
        animate={{ x: [0, 2, -2, 0], y: [0, -1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[52%] top-[35%] w-[10px] h-[10px] bg-black rounded-full"
        animate={{ x: [0, -2, 2, 0], y: [0, 1, -1, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
};

export default WigglyEmoji;
