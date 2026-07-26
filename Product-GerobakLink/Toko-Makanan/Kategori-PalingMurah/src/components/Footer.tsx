'use client';

import React from 'react';
import { StoreConfig } from '@/types/store';
import { Clock, MapPin, Phone, Heart } from 'lucide-react';

interface FooterProps {
  config: StoreConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="bg-amber-950 text-orange-100 py-10 mt-16 border-t border-amber-900">
      <div className="max-w-[1000px] mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black shrink-0 border border-amber-800">
                <img src="/images/logo.png" alt="Logo Sambal Bakar" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-black text-white">{config.nama_toko}</h3>
            </div>
            <p className="text-xs text-orange-200/80 leading-relaxed">
              {config.tagline}
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-3">
              Operational & Kontak
            </h4>
            <div className="flex items-start gap-2 text-orange-200">
              <Clock className="w-4 h-4 text-orange-300 shrink-0 mt-0.5" />
              <span>
                <strong>Jam Buka:</strong> Setiap Hari ({config.jam_buka} – {config.jam_tutup} WIB)
              </span>
            </div>
            <div className="flex items-start gap-2 text-orange-200">
              <MapPin className="w-4 h-4 text-orange-300 shrink-0 mt-0.5" />
              <span>{config.alamat}</span>
            </div>
            <div className="flex items-start gap-2 text-orange-200">
              <Phone className="w-4 h-4 text-orange-300 shrink-0 mt-0.5" />
              <a
                href={`https://wa.me/${config.no_wa_pemilik}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-orange-300 font-bold"
              >
                +{config.no_wa_pemilik} (WhatsApp Chat)
              </a>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3 bg-amber-900/40 p-4 rounded-xl border border-amber-800/60 text-xs">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Informasi Pemesanan
            </h4>
            <p className="text-orange-200/80 leading-relaxed">
              Pesanan diproses secara real-time via WhatsApp. Pastikan nomor HP aktif untuk mempermudah pengiriman.
            </p>
            <div className="pt-2 text-[11px] text-orange-300 font-medium">
              Powered by GerobakLink
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-amber-900/60 text-center text-xs text-orange-300/60 flex items-center justify-center gap-1">
          <span>© 2026 {config.nama_toko}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
