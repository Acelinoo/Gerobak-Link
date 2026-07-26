'use client';

import React, { useEffect, useState } from 'react';
import { StoreConfig } from '@/types/store';
import { ShoppingBag, Clock, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  config: StoreConfig;
  isOpen: boolean;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  isOpen,
  cartCount,
  onOpenCart,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white/92 backdrop-blur-[12px] border-b border-border-color sticky top-0 z-40 w-full transition-all">
      <div className="max-w-[1000px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Store Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md border border-orange-300/40 shrink-0 overflow-hidden bg-black">
            <img src="/images/logo.png" alt="Logo Sambal Bakar" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
                {config.nama_toko}
              </h1>
              {mounted && (
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.8rem] font-bold tracking-[0.02em] ${isOpen ? 'bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]' : 'bg-[#FEF2F2] text-[#B91C1C] border border-[#FECACA]'}`}
                  title={`Jam operasional: ${config.jam_buka} - ${config.jam_tutup} WIB`}
                >
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-status-open shadow-[0_0_0_3px_rgba(16,185,129,0.25)] animate-pulse-glow' : 'bg-status-closed'}`} />
                  <span>{isOpen ? 'BUKA' : 'TUTUP'}</span>
                </div>
              )}
            </div>
            <p className="text-xs md:text-sm text-amber-900/70 font-medium line-clamp-1 mt-1 flex items-center gap-1">
              <span>{config.tagline}</span>
            </p>
          </div>
        </div>

        {/* Floating Header Cart Trigger */}
        <button
          onClick={onOpenCart}
          className="relative bg-primary-red text-white font-bold rounded-xl cursor-pointer inline-flex items-center justify-center transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_12px_rgba(216,58,58,0.25)] hover:bg-primary-red-hover hover:-translate-y-[1px] hover:shadow-[0_6px_16px_rgba(216,58,58,0.35)] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none text-sm py-2 px-3 md:px-4 flex gap-2"
          aria-label="Buka Keranjang"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="hidden sm:inline font-bold">Keranjang</span>
          {cartCount > 0 && (
            <span className="bg-white text-red-600 text-xs font-black px-2 py-0.5 rounded-full shadow-sm">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
