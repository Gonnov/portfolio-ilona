import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Raymond Weil Flyback",
    category: "BRAND CONTENT",
    description: "The renowned Swiss watchmaking house Raymond Weil presents its new Flyback watch, a tribute to the brand's founder and his passion for aviation. An original format that led to a shoot resembling a journey through time among vintage aircraft.",
    image: "/images/raymond-weil-flyback.png"
  },
  {
    id: 2,
    title: "Freelancer Ladies Collection",
    category: "BRAND CONTENT",
    description: "Swiss watchmaker Raymond Weil unveils the Freelancer Ladies collection — six luxury timepieces for a refined female audience. With refined direction and a play of light, the watch is subtly revealed through lifestyle shots only.",
    image: "/images/raymond-weil-freelancer.png"
  },
  {
    id: 3,
    title: "Raymond Weil X BASQUIAT",
    category: "BRAND CONTENT",
    description: "Watchmaker Raymond Weil wanted to make a statement for the launch of its new timepiece inspired by the world of Jean-Michel Basquiat, through a visually bold campaign. The campaign was adapted into various formats for social media and dynamic displays worldwide.",
    image: "/images/raymond-weil-basquiat.png"
  },
  {
    id: 4,
    title: "PORTRAITS 5 VIES",
    category: "BRAND CONTENT",
    description: "To accompany its new identity based on the slogan 'Act Here, Change Tomorrow', Lyon's regional marketing campaign relies on ambassadors with inspiring backgrounds. Their names are Tony, Diane, Lisa, Ruba & Mhiar and Ambre. Their encounter with the city changed their lives, and today their journeys inspire people beyond borders.",
    image: "/images/portraits-5-vies-1.png"
  },
  {
    id: 5,
    title: "WARNING",
    category: "FICTION",
    description: "A gripping fictional narrative that explores contemporary themes through compelling cinematography and atmospheric storytelling.",
    image: "/images/warning-1.png"
  },
  {
    id: 6,
    title: "LA COULEUR DU CIEL",
    category: "FICTION",
    description: "An evocative fictional piece that captures the essence of human emotions through visual poetry and nuanced performances.",
    image: "/images/la-couleur-du-ciel-1.png"
  },
  {
    id: 7,
    title: "Origen Ballet Flamenco",
    category: "MUSICS",
    description: "Ballet Flamenco de Andalucía performance production and management, coordinating artistic direction and technical execution.",
    image: "/images/origen-ballet-flamenco.png"
  },
  {
    id: 8,
    title: "Opéra Live 2025 - Faust",
    category: "MUSICS",
    description: "Faust opera performance live streaming production, managing technical coordination and broadcast logistics for this prestigious event.",
    image: "/images/opera-live-2025-faust.png"
  },
  {
    id: 9,
    title: "Platée - Jean-Philippe Rameau",
    category: "MUSICS",
    description: "Production management for this classical opera performance, ensuring seamless coordination between artistic and technical teams.",
    image: "/images/platee.png"
  },
  {
    id: 10,
    title: "Koh-Lanta La Légende",
    category: "TV SHOWS",
    description: "French reality TV show production management, coordinating logistics and team management for this popular adventure series.",
    image: "/images/koh-lanta-legende.png"
  },
  {
    id: 11,
    title: "L'Île de la Tentation",
    category: "TV SHOWS",
    description: "Reality TV show production coordination, managing day-to-day operations and team logistics for this relationship-based reality series.",
    image: "/images/ile-de-la-tentation.avif"
  },
  {
    id: 12,
    title: "Les Marseillais Asian Tour",
    category: "TV SHOWS",
    description: "Travel reality show production management, coordinating international filming logistics and crew management.",
    image: "/images/les-marseillais-asian-tour.avif"
  },
  {
    id: 13,
    title: "Moundir & Les Apprentis Aventuriers",
    category: "TV SHOWS",
    description: "Adventure reality show production, managing competitive challenges and participant coordination for this action-packed series.",
    image: "/images/moundir-apprentis.jpg"
  }
];

const categories = ["ALL", "BRAND CONTENT", "FICTION", "MUSICS", "TV SHOWS"];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredItems = activeCategory === "ALL" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const handleCategoryChange = async (category: string) => {
    if (category === activeCategory) return;
    
    setIsFiltering(true);
    
    // Small delay to allow exit animations to complete
    setTimeout(() => {
      setActiveCategory(category);
      setIsFiltering(false);
    }, 150);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-primary-gold uppercase tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PORTFOLIO ILONA
        </motion.h2>
        
        <motion.div
          className="flex justify-center gap-5 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`relative px-6 py-3 border-2 border-primary-gold font-semibold text-sm uppercase tracking-wide overflow-hidden ${
                activeCategory === category 
                  ? 'text-white' 
                  : 'text-primary-gold'
              }`}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ 
                scale: 0.98
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <motion.div
                className="absolute inset-0 bg-primary-gold"
                initial={false}
                animate={{
                  x: activeCategory === category ? "0%" : "-100%"
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                layout
                layoutId={`portfolio-item-${item.id}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8,
                  y: 50
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8,
                  y: -50
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.8,
                  delay: index * 0.05
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }
                }}
              >
                <motion.div className="relative h-64 overflow-hidden group">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary-gold/90 flex flex-col justify-center items-center text-center p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ 
                      opacity: 1, 
                      y: 0 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <motion.h3 
                      className="text-white text-xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white text-sm font-medium uppercase tracking-wide"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {item.category}
                    </motion.p>
                  </motion.div>
                </motion.div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-text-dark mb-4">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;