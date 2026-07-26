'use client';

import { PACKAGES } from '@/data/packages';
import KatalogCard from './KatalogCard';

export default function Katalog() {
  return (
    <section id="katalog">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Katalog — 04 Tipe Situs</div>
            <h2 className="section-title">Pilih titik awal yang tepat.</h2>
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
