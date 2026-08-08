'use client';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="mono">GerobakLink © 2026</div>
        <div className="foot-links">
          <a
            href="https://instagram.com/gerobaklink"
            data-cursor="IG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6289655223792"
            data-cursor="WA"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:hello@gerobaklink.com" data-cursor="EMAIL">
            hello@gerobaklink.com
          </a>
        </div>
      </div>
    </footer>
  );
}
