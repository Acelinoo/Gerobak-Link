import ScrollReveal from '../components/ScrollReveal';
import './Education.css';

const EDUCATION_HISTORY = [
  {
    period: '2021 - 2024',
    title: 'SMK Yadika Soreang',
    description: 'Vocational High School Degree in Computer & Network Engineering. Focused on computer science fundamentals, networking, and initial web development.'
  },
  {
    period: '2024 - Present',
    title: 'Universitas Komputer Indonesia (UNIKOM)',
    description: 'Bachelor of Computer Science in Informatics Engineering. Specializing in Software Engineering, Web System Architecture, and Distributed Systems.'
  }
];

const Education = () => {
  return (
    <section className="section education" id="pendidikan">
      <div className="section-header">
        <h2 className="section-title">Education & Qualifications</h2>
        <p className="section-subtitle">
          Academic background and formal education journey in computer science and software engineering.
        </p>
      </div>

      <div className="edu__clean-timeline">
        <div className="edu__timeline-track" />
        
        {EDUCATION_HISTORY.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.15}>
            <div className="edu__clean-item">
              <div className="edu__clean-dot" />
              <div className="glass-card edu__clean-card">
                <span className="edu__clean-period">{item.period}</span>
                <h3 className="edu__clean-title">{item.title}</h3>
                <p className="edu__clean-desc">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
