import { useEffect } from 'react';
import { X, ExternalLink, Code2, CheckCircle, Cpu, Layers, TrendingUp, ShieldCheck } from 'lucide-react';
import './CaseStudyModal.css';

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study Details">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="badge badge-accent">{project.category}</span>
            <span className="badge badge-emerald">
              <ShieldCheck size={13} /> Verified Production Case Study
            </span>
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.description}</p>
        </div>

        <div className="modal-hero-img-wrapper">
          <img src={project.image} alt={project.title} className="modal-hero-img" />
        </div>

        <div className="modal-grid">
          <div className="modal-section">
            <h3><Layers size={18} /> Key Challenge & Background</h3>
            <p>{project.challenge || 'The previous system experienced high latency and performance bottlenecks when handling peak user traffic spikes.'}</p>
          </div>

          <div className="modal-section">
            <h3><Cpu size={18} /> Engineering & Architectural Solution</h3>
            <p>{project.solution || 'Decoupled monolithic services into high-performance micro-frontends, implemented multi-tier caching strategies, and automated CI/CD pipelines.'}</p>
          </div>
        </div>

        {project.metrics && (
          <div className="modal-metrics-box">
            <h4><TrendingUp size={16} /> Key Metrics & Performance Results</h4>
            <div className="modal-metrics-grid">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="metric-item">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-tech-stack">
          <h4>Technologies & Infrastructure Applied</h4>
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="badge">
                <CheckCircle size={12} className="tag-check" /> {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={16} /> Live Demo Preview
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Code2 size={16} /> Source Code Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
