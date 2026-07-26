'use client';

import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const tagRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canHover || reduceMotion) return;

    document.body.classList.add('cursor-ready');

    const cursor = document.getElementById('cursor') as HTMLDivElement | null;
    const tag = document.getElementById('cursorTag') as HTMLDivElement | null;

    if (!cursor || !tag) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      tag.style.transform = `translate(${mx + 16}px, ${my - 4}px)`;

      if (!tag.dataset.locked) {
        tag.textContent = `X${String(mx).padStart(3, '0')} Y${String(my).padStart(3, '0')}`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const raf = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(raf);
    };

    animId = requestAnimationFrame(raf);

    // Event listeners for interactive elements
    const handleMouseEnter = (e: Event) => {
      cursor.classList.add('is-hover');
      const target = e.currentTarget as HTMLElement;
      const label = target.getAttribute('data-cursor');
      if (label) {
        tag.textContent = label;
        tag.dataset.locked = '1';
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('is-hover');
      delete tag.dataset.locked;
    };

    const elements = document.querySelectorAll('[data-cursor], a, button');
    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      document.body.classList.remove('cursor-ready');
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return { cursorRef, tagRef };
}
