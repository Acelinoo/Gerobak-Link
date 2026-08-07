import { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import { Send, Menu, X } from 'lucide-react';
import './Navigation.css';

const NAV_ITEMS = [
  { id: 'beranda', label: 'Home' },
  { id: 'keahlian', label: 'Skills' },
  { id: 'tentang', label: 'About' },
  { id: 'proyek', label: 'Projects' },
  { id: 'pendidikan', label: 'Education' },
  { id: 'kontak', label: 'Contact' },
];

const Navigation = ({ onOpenCv }) => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);

    const sections = NAV_ITEMS.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    })).filter(s => s.element);

    const scrollPos = window.scrollY + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].element.offsetTop <= scrollPos) {
        setActiveSection(sections[i].id);
        return;
      }
    }
    setActiveSection('beranda');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-nav ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-nav__container">
        <a href="#beranda" className="header-nav__logo" onClick={() => scrollTo('beranda')}>
          <span className="logo-accent">A</span>CELINO<span className="logo-dot">.</span>
        </a>

        <nav className={`header-nav__menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          <ul className="header-nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`header-nav__link ${activeSection === item.id ? 'is-active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-nav__actions">
          <ThemeToggle />
          <button className="btn btn-primary btn-sm nav-cta" onClick={() => scrollTo('kontak')}>
            <Send size={14} /> Get in Touch
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
