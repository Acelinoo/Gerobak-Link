import StrokeText from '../components/reactbits/StrokeText';
import TextSlider from '../components/TextSlider';
import CountUp from '../components/CountUp';
import { motion } from 'motion/react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="beranda">
      <div className="hero__grid">
        <motion.div 
          className="hero__main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero__title">
            <StrokeText 
              text="MARCHELINO" 
              fontSize={140} 
              strokeWidth={3} 
              strokeColor="var(--navy-ink)" 
              fillColor="var(--navy-ink)" 
            />
            <StrokeText 
              text="KURNIAWAN" 
              fontSize={140} 
              strokeWidth={3} 
              strokeColor="var(--navy-ink)" 
              fillColor="var(--navy-ink)" 
            />
          </h1>
          <div className="hero__role-group">
            <h2 className="hero__role">Web Developer & System Builder</h2>
            <div className="hero__focus">
              <TextSlider 
                texts={[
                  "Full-stack Web Development",
                  "Sistem Informasi Bisnis",
                  "Implementasi UI/UX Modern"
                ]}
                interval={2500}
                className="hero__text-slider"
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero__sidebar"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <div className="hero__stats">
            <div className="hero__stat-number mono">
              <CountUp end={new Date().getFullYear() - 2021} suffix="+" />
            </div>
            <div className="hero__stat-label mono-label">Tahun Pengalaman</div>
          </div>
          
          <p className="hero__subline">
            Membangun sistem web yang bersih, terstruktur, dan siap produksi.
          </p>
        </motion.div>
      </div>
      <hr className="divider divider--heavy hero__bottom-line" />
    </section>
  );
};

export default Hero;
