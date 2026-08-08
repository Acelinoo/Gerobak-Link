'use client';

import { PACKAGES } from '@/data/packages';
import KatalogCard from './KatalogCard';
import { LayoutTextFlip } from './ui/layout-text-flip';

export default function Katalog() {
  const words = [
    'Company Profile',
    'Toko',
    'Web Undangan',
    'Portofolio',
    'Website Pendidikan',
    'Tugas Sekolah/Kuliah'
  ];

  return (
    <section id="katalog">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Katalog — 06 Tipe Situs</div>
            <h2 className="section-title">
              Build your{' '}
              <span className="inline-block whitespace-nowrap">
                <LayoutTextFlip
                  words={words}
                  className="text-[var(--blue)] font-bold inline-block px-1"
                />{' '}
                here.
              </span>
            </h2>
          </div>
          <p className="section-note">
            Empat kategori ini menutup hampir semua kebutuhan situs bisnis maupun personal. Tiap kategori bisa kamu preview sebagai contoh sebelum memutuskan.
          </p>
        </div>

        {PACKAGES.map((pkg, index) => (
          <KatalogCard key={pkg.id} item={pkg} isReverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

