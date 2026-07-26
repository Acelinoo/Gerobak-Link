'use client';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="mono">INDEKS © 2026 — STUDIO WEB</div>
        <div className="foot-links">
          <a
            href="https://instagram.com/indeks.studio"
            data-cursor="IG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6281234567890"
            data-cursor="WA"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:hello@indeks.studio" data-cursor="EMAIL">
            hello@indeks.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
