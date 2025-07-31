import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-8">
            <motion.p
              className="text-xl md:text-2xl font-semibold text-text-dark leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Organized, proactive, and solution-oriented, I am committed to ensuring that each communication project runs smoothly by fostering harmonious collaboration among all team members.
            </motion.p>
            
            <motion.p
              className="text-lg text-text-dark leading-loose"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              As an experienced professional in communication strategy, I have a strong sense of organization and the expertise to manage every stage of a project, from concept to distribution. I efficiently coordinate technical and creative teams, handle day-to-day logistics, and ensure careful budget tracking. I place great importance on the relational aspect of my work.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;