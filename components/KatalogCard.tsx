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
        {item.id === 'kat-01' ? (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#0a0a0a',
          }}>
            <img 
              src="/company-profile.png" 
              style={{ 
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
              alt={item.title}
            />
          </div>
        ) : item.id === 'kat-02' ? (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#0a0a0a',
          }}>
            <img 
              src="/Toko.png" 
              style={{ 
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
              alt={item.title}
            />
          </div>
        ) : item.id === 'kat-03' ? (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#0a0a0a',
          }}>
            <img 
              src="/undangan-digital.png" 
              style={{ 
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
              alt={item.title}
            />
          </div>
        ) : item.id === 'kat-04' ? (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#FAFAFA',
          }}>
            <img 
              src="/portofolio.png" 
              style={{ 
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
              alt={item.title}
            />
          </div>
        ) : item.id === 'kat-05' ? (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 0,
            overflow: 'hidden',
            backgroundColor: '#FAFAFA',
          }}>
            <img 
              src="/web-pendidikan.jpg" 
              style={{ 
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'top',
                pointerEvents: 'none'
              }}
              alt={item.title}
            />
          </div>
        ) : (
          <div className="blocks" style={{ zIndex: 0 }}>
            <div className="b1" />
            <div className="b2" />
            <div className="rowgrid">
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
        
        <div className="grid-overlay" style={{ zIndex: 1 }} />
        <div className="tag-corner" style={{ zIndex: 2 }}>{item.pkgTag}</div>
      </div>
    </div>
  );
}
