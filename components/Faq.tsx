'use client';

import { useState } from 'react';
import { FAQS } from '@/data/faqs';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">FAQ — Pertanyaan Umum</div>
            <h2 className="section-title">Semua yang perlu kamu ketahui.</h2>
          </div>
          <p className="section-note">
            Jawaban lengkap seputar pengerjaan, domain &amp; hosting, akses CMS, sistem pembayaran, hingga garansi layanan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list reveal">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            const numStr = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleItem(faq.id)}
                  data-cursor="TOGGLE"
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-left">
                    <span className="faq-num">{numStr}</span>
                    <div className="faq-q-title-wrap">
                      <span className="faq-cat-badge">{faq.category}</span>
                      <h3 className="faq-q-text">{faq.question}</h3>
                    </div>
                  </div>

                  <div className="faq-icon-wrap">
                    <span className="faq-icon-symbol">{isOpen ? '−' : '+'}</span>
                  </div>
                </button>

                <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="faq-support-card reveal">
          <div className="support-info">
            <span className="support-tag">BUTUH BANTUAN LAIN?</span>
            <h3>Masih punya pertanyaan yang belum terjawab?</h3>
            <p>Konsultasikan langsung ide atau kebutuhan websitemu bersama tim kami secara gratis tanpa komitmen.</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20GerobakLink,%20saya%20mau%20tanya%20seputar%20jasa%20pembuatan%20website"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
          >
            Tanya via WhatsApp <span className="mg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
