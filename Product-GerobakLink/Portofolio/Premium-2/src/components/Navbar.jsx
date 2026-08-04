import { Moon, Sun, Code2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion } from 'motion/react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
        <Code2 size={24} />
        <span>MARCHELINO.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#stack" className="hover:opacity-70 transition-opacity">Tech Stack</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
      </nav>

      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </motion.header>
  );
};

export default Navbar;
