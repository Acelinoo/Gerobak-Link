'use client';

import { PackageItem } from '@/data/packages';

interface KatalogCardProps {
  item: PackageItem;
  isReverse?: boolean;
}

export default function KatalogCard({ item, isReverse = false }: KatalogCardProps) {
  return (
    <div
      className={`katalog-row reveal ${isReverse ? 'reverse' : ''}`}
      id={item.id}
    >
      <div>
        <div className="kat-code">{item.code}</div>
        <h3 className="kat-title">{item.title}</h3>
        <p className="kat-desc">{item.description}</p>
        
        {/* PRICE RANGE (Prompt Override 2) */}
        <span className="kat-price">{item.priceRange}</span>

        <div className="kat-tags">
          {item.tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>

        <a
          href={item.demoUrl}
          className="kat-link"
          data-cursor="LIHAT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat contoh situs <span>→</span>
        </a>
      </div>

      <div
        className="kat-visual"
        style={{ '--surface': item.surfaceColor } as React.CSSProperties}
      >
        <div className="grid-overlay" />
        <div className="tag-corner">{item.pkgTag}</div>
        <div className="blocks">
          <div className="b1" />
          <div className="b2" />
          <div className="rowgrid">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
