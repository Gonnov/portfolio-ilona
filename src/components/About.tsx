import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background-light">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8">
            Hello, I'm <span className="text-primary-gold">Ilona Sauvat</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-dark leading-relaxed mb-6 font-light">
            A passionate communication and audiovisual production professional with over 7 years of experience transforming creative visions into impactful realities.
          </p>
          
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            I graduated with a Master's degree in Communication and Audiovisual Production from EFAP Lyon, where I developed expertise in project management, production techniques, and communication strategy. My journey has been driven by a commitment to excellence in coordinating complex productions while fostering collaborative environments where creativity flourishes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;