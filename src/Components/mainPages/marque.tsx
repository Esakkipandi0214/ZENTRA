// components/Marquee.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-3">
      <motion.div
        className="flex absolute left-0 top-0"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust speed by changing the duration
          ease: 'linear',
        }}
      >
        {/* Container for looping effect */}
        <div className="flex whitespace-nowrap">
          <span className="mr-10 text-lg font-semibold">
            BTCUSDT 54,000$ -6% | NIFTY 22,000 +2% | BANKNIFTY 54,000 +3.5% | Apple 219 +3% | Microsoft 408 +5%
          </span>
          <span className="mr-10 text-lg font-semibold">
            BTCUSDT 54,000$ -6% | NIFTY 22,000 +2% | BANKNIFTY 54,000 +3.5% | Apple 219 +3% | Microsoft 408 +5%
          </span>
          <span className="mr-10 text-lg font-semibold">
            BTCUSDT 54,000$ -6% | NIFTY 22,000 +2% | BANKNIFTY 54,000 +3.5% | Apple 219 +3% | Microsoft 408 +5%
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
