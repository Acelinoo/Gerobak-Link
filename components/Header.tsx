'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="siteHeader" className={isScrolled ? 'is-scrolled' : ''}>
      <div className="wrap">
        <a href="#top" className="logo" data-cursor="HOME">
          GerobakLink
        </a>
        <nav>
          <ul>
            <li>
              <a href="#katalog" data-cursor="GO">
                Katalog
              </a>
            </li>
            <li>
              <a href="#proses" data-cursor="GO">
                Proses
              </a>
            </li>
            <li>
              <a href="#ulasan" data-cursor="GO">
                Ulasan
              </a>
            </li>
          </ul>
        </nav>
        <a href="#cta" className="btn btn-primary" data-cursor="PILIH">
          Mulai Project <span className="mg">→</span>
        </a>
      </div>
    </header>
  );
}
