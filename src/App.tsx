import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;