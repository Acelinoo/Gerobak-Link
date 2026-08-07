import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, ArrowUp } from 'lucide-react';
import './Contact.css';

const GithubLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

const InstagramLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GmailLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const QUICK_NAV = [
  { label: 'Home', href: '#beranda' },
  { label: 'Technologies & Tools', href: '#keahlian' },
  { label: 'About Me', href: '#tentang' },
  { label: 'Featured Projects', href: '#proyek' },
  { label: 'Education', href: '#pendidikan' },
];

const Contact = ({ onToast }) => {
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    if (onToast) onToast(`${label} copied to clipboard!`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-luxury" id="kontak">
      <div className="footer-luxury__container">
        {/* — Top Callout Banner — */}
        <ScrollReveal delay={0.1}>
          <div className="footer-luxury__hero-box glass-card">
            <div className="footer-luxury__hero-left">
              <h2 className="footer-luxury__title">Let's Connect & Collaborate</h2>
              <p className="footer-luxury__desc">
                Open for career opportunities, software engineering discussions, or modern web project collaborations.
              </p>
            </div>
            <div className="footer-luxury__hero-right">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => copyToClipboard('acelino@example.com', 'Email Address')}
              >
                <Mail size={18} /> Copy Email Address
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* — Middle Info Row — */}
        <div className="footer-luxury__middle-row">
          <div className="footer-brand-col">
            <a href="#beranda" className="footer-logo">
              ACELINO<span className="logo-dot">.</span>DEV
            </a>
            <p className="footer-tagline">
              Senior Web Developer & Full-Stack System Architect. Focused on clean code, performance, and minimalist UX.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Smart Navigation</h4>
            <ul className="footer-nav-links">
              {QUICK_NAV.map((nav) => (
                <li key={nav.label}>
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-icons-col">
            <h4 className="footer-col-title">Social Media</h4>
            <div className="footer-icons-row">
              <a
                href="https://github.com/acelino"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn glass-card"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubLogo size={22} />
              </a>
              <a
                href="https://linkedin.com/in/acelino"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn glass-card"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinLogo size={22} />
              </a>
              <a
                href="https://instagram.com/acelino"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn glass-card"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramLogo size={22} />
              </a>
              <a
                href="mailto:acelino@example.com"
                className="footer-icon-btn glass-card"
                aria-label="Gmail"
                title="Gmail"
              >
                <GmailLogo size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* — Bottom Copyright Bar — */}
        <div className="footer-luxury__bottom-bar">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} ACELINO. All rights reserved.</span>
            <span className="badge badge-accent">v2.4 Luxury Edition</span>
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
