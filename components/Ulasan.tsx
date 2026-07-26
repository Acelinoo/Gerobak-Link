'use client';

import { TESTIMONIALS } from '@/data/testimonials';

export default function Ulasan() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="ulasan">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Ulasan</div>
            <h2 className="section-title">Kata mereka yang sudah pakai.</h2>
          </div>
        </div>
      </div>

      <div className="marquee-wrap reveal">
        <div className="marquee" id="marquee">
          {marqueeItems.map((item, idx) => (
            <div className="quote-card" key={`${item.id}-${idx}`}>
              <p>{item.quote}</p>
              <div className="src">{item.source}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="ulasan-caption">
          * Ulasan nyata dari klien yang telah mempercayakan pembuatan situsnya bersama GerobakLink.
        </div>
      </div>
    </section>
  );
}
