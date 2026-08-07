import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pref-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pref-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Ganti Tema Tampilan"
      title={theme === 'dark' ? 'Ganti ke Soft Light Mode' : 'Ganti ke Clean Dark Mode'}
    >
      <div className={`theme-toggle__icon ${theme === 'dark' ? 'is-active' : ''}`}>
        <Moon size={16} />
      </div>
      <div className={`theme-toggle__icon ${theme === 'light' ? 'is-active' : ''}`}>
        <Sun size={16} />
      </div>
    </button>
  );
};

export default ThemeToggle;
