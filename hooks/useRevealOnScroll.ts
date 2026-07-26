'use client';

import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal, .proses-step');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    reveals.forEach((el) => io.observe(el));

    // Proses line fill observer
    const prosesFill = document.getElementById('prosesFill');
    const prosesList = document.querySelector('.proses-list');
    let io2: IntersectionObserver | null = null;

    if (prosesList && prosesFill) {
      io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              prosesFill.style.height = '100%';
            }
          });
        },
        { threshold: 0.3 }
      );
      io2.observe(prosesList);
    }

    return () => {
      reveals.forEach((el) => io.unobserve(el));
      if (io2 && prosesList) io2.unobserve(prosesList);
    };
  }, []);
}
