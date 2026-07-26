'use client';

import React, { useState } from 'react';
import { MenuItem } from '@/types/store';
import { Plus, Check, Ban } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  isStoreOpen: boolean;
  onAddToCart: (item: MenuItem, selectedVariant: string) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  isStoreOpen,
  onAddToCart,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    item.varian && item.varian.length > 0 ? item.varian[0] : ''
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isAvailable = item.tersedia && isStoreOpen;

  const handleAdd = () => {
    if (!isAvailable) return;
    onAddToCart(item, selectedVariant);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 900);
  };

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
        !item.tersedia ? 'opacity-80 bg-gray-50/90' : ''
      }`}
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full bg-orange-50 overflow-hidden group">
          <img
            src={item.foto_url}
            alt={item.nama}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              !item.tersedia ? 'grayscale brightness-90' : ''
            }`}
            loading="lazy"
          />

          {/* Badge */}
          {item.badge && item.tersedia && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
              {item.badge}
            </span>
          )}

          {/* Out of Stock Overlay */}
          {!item.tersedia && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white gap-1">
              <span className="bg-red-600/90 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-lg flex items-center gap-1">
                <Ban className="w-3.5 h-3.5" /> Stok Habis
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-extrabold text-base md:text-lg text-gray-900 leading-snug">
              {item.nama}
            </h3>
          </div>

          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-3">
            {item.deskripsi}
          </p>

          {/* Price */}
          <div className="text-lg md:text-xl font-black text-red-600 mb-3">
            {formatRupiah(item.harga)}
          </div>

          {/* Variants radio selection */}
          {item.varian && item.varian.length > 0 && (
            <div className="mb-4 bg-orange-50/60 p-2.5 rounded-xl border border-orange-100">
              <span className="text-[11px] font-bold text-amber-900/70 uppercase tracking-wider block mb-2">
                Pilih Varian:
              </span>
              <div className="space-y-1.5">
                {item.varian.map((variantOption) => (
                  <label
                    key={variantOption}
                    className={`flex items-center gap-2 text-xs font-semibold p-1.5 rounded-lg cursor-pointer transition-colors ${
                      selectedVariant === variantOption
                        ? 'bg-white text-red-700 shadow-sm border border-red-200'
                        : 'text-gray-700 hover:bg-white/60'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`variant-${item.id}`}
                      value={variantOption}
                      checked={selectedVariant === variantOption}
                      onChange={() => setSelectedVariant(variantOption)}
                      disabled={!isAvailable}
                      className="accent-red-600 w-3.5 h-3.5"
                    />
                    <span>{variantOption}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAdd}
          disabled={!isAvailable}
          className={`w-full text-white cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none shadow-[0_4px_12px_rgba(216,58,58,0.25)] hover:shadow-[0_6px_16px_rgba(216,58,58,0.35)] text-xs md:text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold ${
            addedAnimation ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30' : 'bg-primary-red hover:bg-primary-red-hover'
          }`}
        >
          {addedAnimation ? (
            <>
              <Check className="w-4 h-4" /> Masuk Keranjang!
            </>
          ) : !item.tersedia ? (
            <>
              <Ban className="w-4 h-4" /> Stok Habis
            </>
          ) : !isStoreOpen ? (
            <>
              <Ban className="w-4 h-4" /> Toko Tutup
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Tambah ke Keranjang
            </>
          )}
        </button>
      </div>
    </div>
  );
};
