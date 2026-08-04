import { motion } from 'motion/react';
import acelinoImg from '../assets/acelino.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] dark:bg-blue-600/10"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] dark:bg-purple-600/10"></div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-start"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
            Building digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              experiences.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
            I'm Marchelino Kurniawan, a Web Developer & System Builder focused on creating clean, structural, and production-ready web systems.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-medium hover:scale-105 transition-transform">
              View Work
            </button>
            <button className="px-8 py-4 bg-slate-100 dark:bg-slate-800 rounded-full font-medium hover:scale-105 transition-transform">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative max-w-md w-full"
        >
          <div className="aspect-[3/4] relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50">
            <img 
              src={acelinoImg} 
              alt="Marchelino Kurniawan" 
              className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
