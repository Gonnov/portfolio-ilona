import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  items: string[];
}

const servicesData: Service[] = [
  {
    title: "Communication Strategy",
    description: "Development of personalized strategies to strengthen your brand and achieve your goals",
    items: [
      "Target audience analysis, key messaging, and appropriate channel selection",
      "Advice on positioning and storytelling"
    ]
  },
  {
    title: "Communication Project Management",
    description: "Coordination of technical and creative teams",
    items: [
      "Planning and monitoring of all project phases, from concept to distribution",
      "Logistical management and operational organization"
    ]
  },
  {
    title: "Audiovisual Production",
    description: "Supervision of pre-production, production, and post-production stages",
    items: [
      "Coordination of shoots (scheduling, teams, equipment)",
      "Monitoring the technical and artistic quality of content",
      "Management of deliverables and distribution"
    ]
  },
  {
    title: "Budget Tracking and Optimization",
    description: "Rigorous budget monitoring to ensure project profitability",
    items: [
      "Identification of cost optimization opportunities"
    ]
  },
  {
    title: "Collaboration and Team Relations",
    description: "Facilitating communication among stakeholders",
    items: [
      "Harmonious team management to foster a positive working environment"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-primary-gold uppercase tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h2>
        
        <motion.p
          className="text-center max-w-4xl mx-auto mb-16 text-lg leading-relaxed text-text-dark"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I offer comprehensive support in communication strategy, project management, and audiovisual production, 
          tailored to your needs to ensure the success of your initiatives. Here is an overview of the services I provide:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-gold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold text-primary-gold mb-5 uppercase tracking-wide">{service.title}</h3>
              <p className="text-text-dark font-semibold mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-text-light leading-relaxed pl-6 relative">
                    <span className="absolute left-0 top-0 text-primary-gold text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;