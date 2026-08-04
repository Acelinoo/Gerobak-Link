import ScrollReveal from '../components/ScrollReveal';
import './Projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'Judul Proyek Dummy Pertama',
    tags: ['Teknologi A', 'Teknologi B', 'Teknologi C'],
    link: '#'
  },
  {
    id: '02',
    title: 'Sistem Informasi Dummy',
    tags: ['Teknologi D', 'Teknologi E'],
    link: '#'
  },
  {
    id: '03',
    title: 'Aplikasi Web Dummy Ketiga',
    tags: ['Teknologi F', 'Teknologi G', 'Teknologi H'],
    link: '#'
  },
  {
    id: '04',
    title: 'Dashboard Analitik Dummy',
    tags: ['Teknologi I', 'Teknologi J'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="section projects" id="proyek">
      <div className="section__header">
        <span className="section__number">03</span>
        <h2 className="section__title">Proyek Pilihan</h2>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project, index) => (
          <ScrollReveal 
            key={project.id} 
            delay={index * 0.1}
            className={`projects__item-wrapper projects__item-wrapper--${index + 1}`}
          >
            <a href={project.link} className="card projects__card">
              <div className="projects__number mono">{project.id}</div>
              
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                
                <div className="projects__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__tag mono-label">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="projects__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
