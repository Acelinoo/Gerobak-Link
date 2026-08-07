import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowUpRight, Eye } from 'lucide-react';
import projectSaas from '../assets/projects/project_saas.png';
import projectEcommerce from '../assets/projects/project_ecommerce.png';
import projectAi from '../assets/projects/project_ai.png';
import projectCloud from '../assets/projects/project_cloud.png';
import './Projects.css';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Enterprise SaaS', label: 'Enterprise SaaS' },
  { id: 'E-Commerce Luxury', label: 'E-Commerce' },
  { id: 'AI & Analytics', label: 'AI & Analytics' },
  { id: 'Cloud Infrastructure', label: 'Cloud Systems' },
];

const PROJECTS = [
  {
    id: '01',
    title: 'Enterprise Financial SaaS Portal',
    subtitle: 'Large-Scale Real-Time Financial Analytics Platform',
    description: 'Enterprise financial transaction management web app featuring interactive analytics dashboard and real-time processing of thousands of transactions per second.',
    category: 'Enterprise SaaS',
    image: projectSaas,
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Loading Speed', value: '+350%' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Transactions / Sec', value: '5,000+' }
    ],
    challenge: 'Processing high-volume financial transaction data in real time without sacrificing UI rendering performance.',
    solution: 'Implementation of Virtualized Table rendering, multi-tier Redis caching, and Server-Sent Events (SSE) for instant push notifications.',
    liveUrl: 'https://example.com/saas-demo',
    githubUrl: 'https://github.com/acelino/saas-demo'
  },
  {
    id: '02',
    title: 'High-End Luxury E-Commerce Engine',
    subtitle: 'Exclusive High-Conversion Luxury Brand Storefront',
    description: 'E-commerce platform with ultra-smooth page transition animations, interactive product 3D preview, and international payment system integration.',
    category: 'E-Commerce Luxury',
    image: projectEcommerce,
    tags: ['React', 'Next.js', 'Stripe API', 'Framer Motion', 'GraphQL'],
    metrics: [
      { label: 'Page Load Time', value: '0.2s' },
      { label: 'Conversion Rate', value: '+180%' },
      { label: 'Buyer Satisfaction', value: '4.9/5' }
    ],
    challenge: 'Ensuring ultra-high-resolution product images load instantly without slowing down mobile navigation.',
    solution: 'Next Image Pipeline optimization, WebP dynamic compression, and Edge CDN Caching.',
    liveUrl: 'https://example.com/luxe-demo',
    githubUrl: 'https://github.com/acelino/luxe-demo'
  },
  {
    id: '03',
    title: 'AI Neural Network Intelligence Platform',
    subtitle: 'AI Data Graph Visualization Analytics Dashboard',
    description: 'Artificial intelligence analytics dashboard for visual graph modeling of distributed data relationships and predictive forecasting.',
    category: 'AI & Analytics',
    image: projectAi,
    tags: ['React', 'TypeScript', 'FastAPI', 'WebGL', 'D3.js'],
    metrics: [
      { label: 'Rendered Graph Nodes', value: '10M+' },
      { label: 'Latency Reduction', value: '-45%' },
      { label: 'Model Accuracy', value: '98.4%' }
    ],
    challenge: 'Rendering tens of thousands of interactive graph nodes simultaneously in browser without FPS drops.',
    solution: 'Leveraging WebGL Hardware Acceleration and offloading heavy calculations to Web Workers.',
    liveUrl: 'https://example.com/ai-demo',
    githubUrl: 'https://github.com/acelino/ai-demo'
  },
  {
    id: '04',
    title: 'Automated Cloud Infrastructure Monitor',
    subtitle: 'Distributed Server Monitoring & Real-Time Log Console',
    description: 'Distributed cloud server health monitoring tool with real-time console log streaming and automated emergency alert system.',
    category: 'Cloud Infrastructure',
    image: projectCloud,
    tags: ['React', 'Node.js', 'Docker', 'WebSockets', 'Redis'],
    metrics: [
      { label: 'Alert Response', value: '<10ms' },
      { label: 'Error Log Rate', value: '0.01%' },
      { label: 'Connected Servers', value: '500+' }
    ],
    challenge: 'Streaming live console logs from hundreds of simultaneous servers without client-side memory leaks.',
    solution: 'Client-side Circular Ring Buffer data structure and WebSocket backpressure flow control.',
    liveUrl: 'https://example.com/cloud-demo',
    githubUrl: 'https://github.com/acelino/cloud-demo'
  }
];

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="section projects" id="proyek">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of software engineering systems and web applications built to high-quality standards.
        </p>
      </div>

      <div className="projects__filter-bar">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`projects__filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <div className="glass-card project-card">
              <div className="project-card__image-box" onClick={() => onSelectProject(project)}>
                <img src={project.image} alt={project.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <span className="btn btn-primary btn-sm">
                    <Eye size={16} /> View Case Study
                  </span>
                </div>
                <div className="project-card__category-badge badge badge-accent">
                  {project.category}
                </div>
              </div>

              <div className="project-card__content">
                <div className="project-card__subtitle">{project.subtitle}</div>
                <h3 className="project-card__title" onClick={() => onSelectProject(project)}>
                  {project.title}
                </h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__metrics-row">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="metric-pill">
                      <span className="metric-pill-val">{m.value}</span>
                      <span className="metric-pill-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <button 
                    className="btn btn-secondary btn-sm" 
                    onClick={() => onSelectProject(project)}
                  >
                    View Case Study
                  </button>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-card__link"
                    title="Live Demo Preview"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
