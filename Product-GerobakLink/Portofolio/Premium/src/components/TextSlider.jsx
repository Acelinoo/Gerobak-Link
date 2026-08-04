import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TextSlider = ({ texts, interval = 3000, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: '1.2em' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSlider;
