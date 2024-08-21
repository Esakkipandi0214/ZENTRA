import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Card1 from '../../../public/shield-hover.svg';
import Card2 from '../../../public/ai-engine-hover.svg';
import Card3 from '../../../public/founded-by-hover.svg';
import Card4 from '../../../public/unbase-imp-hover.svg';
import Card5 from '../../../public/hit-target-hover.svg';
import Card6 from '../../../public/crores-green.svg';

const cardsData = [
  { title: 'We are SEBI', description: 'Registered Experts', image: Card1 },
  { title: 'AI-Engine', description: 'Powered by the most powerful A.I trading tools', image: Card2 },
  { title: '10,000+', description: 'Active Pro Traders & Investors', image: Card3 },
  { title: 'Expert & Focus', description: 'High Profit Ratio by proper guidance', image: Card4 },
  { title: 'Profit Results', description: 'Weekly & Monthly statement', image: Card5 },
  { title: '24/7 Trading', description: 'Without interventions of Humans', image: Card6 },
];

const Testimonial: React.FC = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-black pt-11">
      <div className="container flex flex-col items-center mb-10 mx-auto space-y-6 md:p-2">
        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 text-2xl font-semibold flex text-center sm:font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
        >
          Why
          <motion.span
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-lime-500 to-blue-500 bg-clip-text text-transparent px-2 sm:px-4"
          >
            Zentra Wealth?
          </motion.span>
        </motion.h4>
        
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-6 py-2 text-xl text-center sm:text-2xl md:text-3xl lg:max-w-2xl xl:max-w-4xl text-white/60"
        >
          {/* You can add an optional description here */}
        </motion.p>
      </div>

      {/* AI-Engine Cards Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16 md:gap-x-10 md:gap-y-20">
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-slate-600/35 hover:border-[#56e842] w-full max-w-[350px] h-[350px] mx-auto border-white/5 border p-8 sm:p-10 rounded-[40px] shadow-lg flex flex-col text-center transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <Image
                  src={card.image}
                  alt={`AI Engine Card ${index + 1}`}
                  className={`w-20 h-20 object-cover mx-auto transition-all duration-500 ${
                    hoveredCardIndex === index && '[transform-style:preserve-3d] [transform:rotateY(180deg)]'
                  }`}
                />
                <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-4 text-[#56e842]">{card.title}</h5>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold pt-3">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
