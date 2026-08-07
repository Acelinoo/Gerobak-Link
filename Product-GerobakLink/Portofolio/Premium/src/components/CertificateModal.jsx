import { useEffect } from 'react';
import { X, Award, ShieldCheck } from 'lucide-react';
import './CertificateModal.css';

const CertificateModal = ({ cert, onClose }) => {
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

  if (!cert) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container cert-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Certificate Preview">
          <X size={20} />
        </button>

        <div className="cert-header">
          <div className="cert-badge">
            <Award size={28} />
          </div>
          <div>
            <div className="badge badge-emerald">
              <ShieldCheck size={13} /> Official Certified Credential
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.institution} • {cert.year}</p>
          </div>
        </div>

        <div className="cert-preview-card">
          <div className="cert-watermark">VERIFIED CREDENTIAL</div>
          <div className="cert-content-inner">
            <p className="cert-recipient">Awarded to:</p>
            <h2 className="cert-name">ACELINO</h2>
            <p className="cert-desc">{cert.description || 'Has successfully completed advanced software architecture and professional web engineering competency standards.'}</p>
            <div className="cert-meta">
              <span>Credential ID: <strong className="mono">AC-{cert.id || '98421'}</strong></span>
              <span>Status: <strong className="mono text-emerald">ACTIVE & VERIFIED</strong></span>
            </div>
          </div>
        </div>

        <div className="cert-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
