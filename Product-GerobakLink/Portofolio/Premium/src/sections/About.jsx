import ScrollReveal from '../components/ScrollReveal';
import Lanyard from '../components/Lanyard';
import { ShieldCheck, Cpu, Zap, Layout } from 'lucide-react';
import './About.css';

const PRINCIPLES = [
  {
    icon: <Cpu size={22} />,
    title: 'Clean & Modular Architecture',
    desc: 'Well-structured, maintainable code adhering to industry-standard software engineering patterns.'
  },
  {
    icon: <Zap size={22} />,
    title: 'High Performance & Speed',
    desc: 'Page load optimization under 1 second, bundle efficiency, and high-performance algorithm execution.'
  },
  {
    icon: <Layout size={22} />,
    title: 'Minimalist & Intuitive UX',
    desc: 'Clean user interface development focused on seamless navigation and accessibility.'
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Robust Code & Security',
    desc: 'Strict data validation implementation, OWASP security architecture, and continuous testing.'
  }
];

const About = () => {
  return (
    <section className="section about" id="tentang">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Combining software engineering precision with modern minimalist design principles to build robust web applications.
        </p>
      </div>

      <div className="about__grid">
        <ScrollReveal delay={0.1}>
          <Lanyard />
        </ScrollReveal>

        <div className="about__narrative">
          <ScrollReveal delay={0.2}>
            <h3 className="about__heading">
              Engineering Precision × Technical Excellence
            </h3>
            <p className="about__text">
              I am a Software Developer with an academic background in Computer Science. I am deeply passionate about designing and building efficient, scalable web application architectures.
            </p>
            <p className="about__text">
              My software engineering approach is driven by <strong>"Engineering Precision"</strong>. I believe high-quality web applications are defined not only by visual aesthetics, but also by clean code structures, high performance under heavy loads, and intuitive user experiences.
            </p>
          </ScrollReveal>

          <div className="about__principles-grid">
            {PRINCIPLES.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.3 + index * 0.1}>
                <div className="principle-card">
                  <div className="principle-icon">{item.icon}</div>
                  <div>
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-desc">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
