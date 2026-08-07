import { motion } from 'motion/react';
import { ArrowUpRight, FileText, Code2, Server, Globe, GitBranch } from 'lucide-react';
import RotatingText from '../components/RotatingText';
import CountUp from '../components/CountUp';
import './Hero.css';

const Hero = ({ onOpenCv }) => {
  return (
    <section className="hero section" id="beranda">
      <div className="hero__content">
        <motion.h1 
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ACELINO
        </motion.h1>

        <motion.div 
          className="hero__subtitle-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="hero__role-static">Senior Web Developer &</p>
          <RotatingText 
            texts={[
              "Software Engineering Graduate",
              "Full-Stack System Architect",
              "UI/UX Engineering Specialist"
            ]}
            mainClassName="hero__role-rotating"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </motion.div>

        <motion.p 
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Personal portfolio showcasing software engineering track record, high-performance web systems, and mastery of modern software development technologies.
        </motion.p>

        <motion.div 
          className="hero__cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#proyek" className="btn btn-primary btn-lg">
            Explore Projects Showcase <ArrowUpRight size={18} />
          </a>
          <button className="btn btn-secondary btn-lg" onClick={onOpenCv}>
            <FileText size={18} /> Preview Curriculum Vitae
          </button>
        </motion.div>

        <motion.div 
          className="hero__stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="hero__stat-card glass-card">
            <div className="stat-icon-wrapper"><Code2 size={20} /></div>
            <div className="stat-number">
              <CountUp end={new Date().getFullYear() - 2021} suffix="+" />
            </div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="hero__stat-card glass-card">
            <div className="stat-icon-wrapper"><Globe size={20} /></div>
            <div className="stat-number">
              <CountUp end={35} suffix="+" />
            </div>
            <div className="stat-label">Completed Projects</div>
          </div>

          <div className="hero__stat-card glass-card">
            <div className="stat-icon-wrapper"><GitBranch size={20} /></div>
            <div className="stat-number">
              <CountUp end={50} suffix="+" />
            </div>
            <div className="stat-label">Repositories & Commits</div>
          </div>

          <div className="hero__stat-card glass-card">
            <div className="stat-icon-wrapper"><Server size={20} /></div>
            <div className="stat-number">
              <CountUp end={100} suffix="M+" />
            </div>
            <div className="stat-label">API Requests Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
