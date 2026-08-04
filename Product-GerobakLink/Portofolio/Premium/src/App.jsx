import { motion } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="app-container"
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>
    </motion.div>
  );
}

export default App;
