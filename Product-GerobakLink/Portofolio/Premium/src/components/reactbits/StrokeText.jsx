import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './StrokeText.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const DEFAULT_TEXT = 'Draw Attention';

const StrokeText = ({
  text = DEFAULT_TEXT,
  strokeColor = '#A78BFA',
  fillColor = '#F8FAFC',
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = 'power2.out',
  trigger = 'mount',
  fillMode = 'wipe',
  fontSize = 128,
  fontWeight = 800,
  letterSpacing = -4,
  reverse = false,
  className = '',
  style = {}
}) => {
  const rootRef = useRef(null);
  const strokeTextRef = useRef(null);
  const wipeRectRef = useRef(null);

  const [box, setBox] = useState(null);

  const rawId = useId();
  const wipeId = `stroke-text-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const characters = useMemo(() => Array.from(String(text ?? '')), [text]);

  const dash = Math.max(fontSize * 7, 200);

  const fontStyle = useMemo(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`
    }),
    [fontSize, fontWeight, letterSpacing]
  );

  useLayoutEffect(() => {
    const node = strokeTextRef.current;
    if (!node) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled || !strokeTextRef.current) return;
      let bbox;
      try {
        bbox = strokeTextRef.current.getBBox();
      } catch {
        return;
      }
      if (!bbox || !bbox.width) return;

      const pad = Math.max(Number(strokeWidth) || 1, fontSize * 0.1);
      const next = {
        x: bbox.x - pad,
        y: bbox.y - pad,
        width: bbox.width + pad * 2,
        height: bbox.height + pad * 2
      };

      setBox(prev =>
        prev &&
        Math.abs(prev.x - next.x) < 0.5 &&
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.y - next.y) < 0.5
          ? prev
          : next
      );
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [characters, fontSize, fontWeight, letterSpacing, strokeWidth]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !box) return;

    const chars = root.querySelectorAll('.stroke-text__char');
    if (!chars.length) return;

    gsap.set(chars, {
      strokeDasharray: dash,
      strokeDashoffset: reverse ? -dash : dash,
      fillOpacity: 0
    });

    const run = () => {
      const tl = gsap.timeline();

      tl.to(chars, {
        strokeDashoffset: 0,
        duration: drawDuration,
        ease,
        stagger: reverse ? -stagger : stagger
      });

      if (fillMode === 'wipe') {
        const wipe = wipeRectRef.current;
        if (wipe) {
          gsap.set(wipe, { attr: { x: box.x - box.width * 0.05 } });
          tl.to(
            wipe,
            {
              attr: { x: box.x + box.width + box.width * 0.05 },
              duration: drawDuration * 0.8,
              ease: 'power2.inOut'
            },
            `>-${fillDelay}`
          );
        }
      } else {
        tl.to(
          chars,
          {
            fillOpacity: 1,
            duration: drawDuration * 0.5,
            ease: 'power1.in',
            stagger: reverse ? -stagger : stagger
          },
          `>-${fillDelay}`
        );
      }
    };

    if (trigger === 'scroll') {
      ScrollTrigger.create({
        trigger: root,
        start: 'top 80%',
        once: true,
        onEnter: run
      });
    } else if (trigger === 'hover') {
      root.addEventListener('mouseenter', run, { once: true });
      return () => root.removeEventListener('mouseenter', run);
    } else {
      run();
    }
  }, [box, dash, drawDuration, ease, fillDelay, fillMode, reverse, stagger, trigger]);

  return (
    <span
      ref={rootRef}
      className={`stroke-text ${trigger === 'hover' ? 'stroke-text--hover' : ''} ${className}`}
      style={style}
    >
      <svg
        className="stroke-text__svg"
        viewBox={box ? `${box.x} ${box.y} ${box.width} ${box.height}` : '0 0 100 100'}
        xmlns="http://www.w3.org/2000/svg"
        aria-label={text}
        role="img"
      >
        {box && fillMode === 'wipe' && (
          <defs>
            <clipPath id={wipeId}>
              <rect
                ref={wipeRectRef}
                x={box.x - box.width * 0.05}
                y={box.y}
                width={box.width * 1.1}
                height={box.height}
              />
            </clipPath>
          </defs>
        )}

        <text
          ref={strokeTextRef}
          x="0"
          y="0"
          dominantBaseline="auto"
          textAnchor="start"
          style={fontStyle}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        >
          {characters.map((char, i) => (
            <tspan className="stroke-text__char" key={i}>
              {char}
            </tspan>
          ))}
        </text>

        {box && fillMode === 'wipe' && (
          <text
            x="0"
            y="0"
            dominantBaseline="auto"
            textAnchor="start"
            style={fontStyle}
            fill={fillColor}
            clipPath={`url(#${wipeId})`}
          >
            {characters.map((char, i) => (
              <tspan key={i}>{char}</tspan>
            ))}
          </text>
        )}
      </svg>
    </span>
  );
};

export default StrokeText;
