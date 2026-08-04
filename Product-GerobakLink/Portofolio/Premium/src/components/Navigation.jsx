import { useState, useEffect, useCallback } from 'react';
import './Navigation.css';

const NAV_ITEMS = [
  { id: 'tentang', label: 'Tentang', number: '01' },
  { id: 'proyek', label: 'Proyek', number: '02' },
  { id: 'kontak', label: 'Kontak', number: '03' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100);

    const sections = NAV_ITEMS.map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    })).filter(s => s.element);

    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].element.offsetTop <= scrollPos) {
        setActiveSection(sections[i].id);
        return;
      }
    }
    setActiveSection('');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav--visible' : ''}`} aria-label="Navigasi utama">
      <ul className="nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="nav__item">
            <button
              className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              <span className="nav__number">{item.number}</span>
              <span className="nav__label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
