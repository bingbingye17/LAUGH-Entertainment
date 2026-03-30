import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl mb-4 tracking-widest uppercase"
      >
        We make you laugh, we make you shine
      </motion.h2>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display font-black text-6xl md:text-8xl lg:text-9xl neon-text mb-8 leading-[1.1]"
      >
        LAUGH<br />ENTERTAINMENT
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4"
      >
        <a 
          href="#audition" 
          className="neon-btn px-10 py-4 rounded-full font-bold uppercase tracking-widest inline-block"
        >
          Audition Now
        </a>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
