'use client';

import React from 'react';
import { AlertCircle, Clock } from 'lucide-react';

interface ClosedBannerProps {
  jamBuka: string;
  jamTutup: string;
}

export const ClosedBanner: React.FC<ClosedBannerProps> = ({ jamBuka, jamTutup }) => {
  return (
    <div className="bg-red-500 text-white py-3 px-4 shadow-md transition-all">
      <div className="container flex items-center justify-center gap-2 text-center text-sm md:text-base font-semibold">
        <AlertCircle className="w-5 h-5 shrink-0 animate-bounce" />
        <span>
          Maaf, kami sedang tutup. Jam operasional:{' '}
          <strong className="underline underline-offset-2">{jamBuka}–{jamTutup} WIB</strong>.
          Pemesanan dibuka saat jam operasional.
        </span>
      </div>
    </div>
  );
};
