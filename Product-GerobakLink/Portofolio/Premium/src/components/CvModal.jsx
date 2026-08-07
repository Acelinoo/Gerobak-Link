import { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CvModal.css';

const CvModal = ({ onClose, onToast }) => {
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

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onToast) onToast("Starting Curriculum Vitae (PDF) download...");
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container cv-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV Preview">
          <X size={20} />
        </button>

        <div className="cv-header">
          <div className="cv-avatar-badge">
            <FileText size={24} className="cv-icon" />
          </div>
          <div>
            <h2 className="cv-title">ACELINO</h2>
            <p className="cv-subtitle">Senior Web Developer & Full-Stack System Builder</p>
          </div>
        </div>

        <div className="cv-body">
          <div className="cv-section">
            <h4><Briefcase size={16} /> Professional Experience Summary</h4>
            <div className="cv-item">
              <div className="cv-item-title">Senior Full-Stack Engineer & System Architect</div>
              <div className="cv-item-sub">Tech Enterprise Studio • 2023 - Present</div>
              <p>Leading design and implementation of enterprise-scale web applications, optimizing database pipelines, and directing frontend engineering teams.</p>
            </div>
            <div className="cv-item">
              <div className="cv-item-title">Web Application Developer</div>
              <div className="cv-item-sub">Digital Solutions Co. • 2021 - 2023</div>
              <p>Built e-commerce interfaces and real-time analytics dashboards using React, Node.js, and Tailwind CSS.</p>
            </div>
          </div>

          <div className="cv-section">
            <h4><GraduationCap size={16} /> Education Background</h4>
            <div className="cv-item">
              <div className="cv-item-title">Bachelor of Computer Science / Informatics Engineering</div>
              <div className="cv-item-sub">Universitas Komputer Indonesia (UNIKOM) • Graduated with Honors</div>
            </div>
          </div>

          <div className="cv-section">
            <h4><Award size={16} /> Core Competencies</h4>
            <div className="cv-skills-grid">
              <span className="badge badge-accent"><CheckCircle2 size={12} /> React & Next.js</span>
              <span className="badge badge-accent"><CheckCircle2 size={12} /> TypeScript & Node.js</span>
              <span className="badge badge-accent"><CheckCircle2 size={12} /> PostgreSQL & Redis</span>
              <span className="badge badge-accent"><CheckCircle2 size={12} /> Docker & Cloud CI/CD</span>
              <span className="badge badge-accent"><CheckCircle2 size={12} /> RESTful API & GraphQL</span>
              <span className="badge badge-accent"><CheckCircle2 size={12} /> UI/UX Engineering</span>
            </div>
          </div>
        </div>

        <div className="cv-footer">
          <button className="btn btn-primary" onClick={handleDownload}>
            <Download size={16} /> Download Resume / CV (PDF)
          </button>
          <button className="btn btn-outline" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
