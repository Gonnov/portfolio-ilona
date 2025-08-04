import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-background-light pt-32 pb-20 px-5">
      <div className="max-w-6xl w-full text-center">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-sm font-medium text-text-light tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            PRODUCTION MANAGER // EVENT PROJECT MANAGER // COMMUNICATION STRATEGY
          </motion.p>
          
          <motion.div
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              src="/memoji.png" 
              alt="Ilona Sauvat"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-primary-gold to-secondary-gold bg-clip-text tracking-wider md:tracking-widest uppercase my-5 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ILONA SAUVAT
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-gold mb-2">7+</div>
              <div className="text-sm text-text-light uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold mb-2">Master's</div>
              <div className="text-sm text-text-light uppercase tracking-wider">EFAP Lyon</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold mb-2">50+</div>
              <div className="text-sm text-text-light uppercase tracking-wider">Projects Delivered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;