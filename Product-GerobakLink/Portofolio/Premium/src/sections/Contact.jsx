import './Contact.css';

const Contact = () => {
  return (
    <footer className="section contact" id="kontak">
      <div className="section__header">
        <span className="section__number">06</span>
        <h2 className="section__title">Kontak & Jaringan</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__links">
          <div className="contact__item">
            <span className="contact__num mono">01</span>
            <a href="mailto:placeholder@email.com" className="contact__link link-underline">Email</a>
          </div>
          
          <div className="contact__item">
            <span className="contact__num mono">02</span>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="contact__link link-underline">LinkedIn</a>
          </div>
          
          <div className="contact__item">
            <span className="contact__num mono">03</span>
            <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" className="contact__link link-underline">GitHub</a>
          </div>
        </div>
        
        <div className="contact__footer">
          <p className="mono-label">© {new Date().getFullYear()} MARCHELINO KURNIAWAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
