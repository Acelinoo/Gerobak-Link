'use client';

import React, { useState } from 'react';
import { CartItem, StoreConfig } from '@/types/store';
import { CheckCircle2, Copy, Check, X, ShoppingBag } from 'lucide-react';

interface OrderStrukModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderCode: string;
  paymentMethod: 'qris' | 'transfer' | 'cod';
  cartItems: CartItem[];
  customerName: string;
  customerPhone: string;
  config: StoreConfig;
}

export const OrderStrukModal: React.FC<OrderStrukModalProps> = ({
  isOpen,
  onClose,
  orderCode,
  paymentMethod,
  cartItems,
  customerName,
  customerPhone,
  config,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.menuItem.harga * item.quantity,
    0
  );

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(orderCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-[#1e120c]/55 backdrop-blur-[4px] z-[999] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-[20px] w-full max-h-[90vh] overflow-y-auto shadow-[0_12px_32px_rgba(42,26,20,0.14)] relative max-w-md p-0 overflow-hidden animate-fade-in">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-red-600 to-amber-600 p-6 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-14 h-14 bg-white text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h2 className="text-xl font-extrabold">Pesanan Terkirim!</h2>
          <p className="text-xs text-orange-100 mt-1">
            Silahkan selesaikan obrolan di WhatsApp
          </p>
        </div>

        {/* Receipt Container (Screenshot Friendly) */}
        <div className="p-6 bg-white space-y-4">
          {/* Order Code Box */}
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-center space-y-1">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">
              KODE STRUK PESANAN
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-black text-red-600 font-mono tracking-wider">
                {orderCode}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1.5 rounded-lg bg-white border border-orange-200 text-gray-700 hover:bg-orange-100 transition-colors"
                title="Salin Kode"
              >
                {copiedCode ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-[11px] text-gray-500">Tunjukkan kode ini saat pengambilan/konfirmasi</p>
          </div>

          {/* Struk Details */}
          <div className="border border-dashed border-gray-300 rounded-xl p-4 text-xs space-y-3 bg-gray-50/50">
            <div className="flex justify-between pb-2 border-b border-gray-200">
              <span className="text-gray-500">Toko:</span>
              <span className="font-bold text-gray-900">{config.nama_toko}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Pemesan:</span>
              <span className="font-bold text-gray-900">{customerName || 'Pembeli'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">No. WA:</span>
              <span className="font-bold text-gray-900">{customerPhone}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-200">
              <span className="text-gray-500">Metode Bayar:</span>
              <span className="font-bold uppercase text-red-600">{paymentMethod}</span>
            </div>

            {/* Item list */}
            <div className="space-y-1.5 pt-1">
              <span className="font-bold text-gray-700 block">Detail Item:</span>
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="flex justify-between text-[11px]">
                  <span className="text-gray-800">
                    {item.quantity}x {item.menuItem.nama}{' '}
                    {item.selectedVariant ? `(${item.selectedVariant})` : ''}
                  </span>
                  <span className="font-semibold text-gray-900">
                    {formatRupiah(item.menuItem.harga * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-2 border-t border-gray-200 font-extrabold text-sm text-gray-900">
              <span>Total Pesanan:</span>
              <span className="text-red-600">{formatRupiah(totalAmount)}</span>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="w-full bg-primary-red text-white font-bold cursor-pointer inline-flex items-center justify-center transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_12px_rgba(216,58,58,0.25)] hover:bg-primary-red-hover hover:-translate-y-[1px] hover:shadow-[0_6px_16px_rgba(216,58,58,0.35)] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none py-3 rounded-xl text-sm"
            >
              Selesai & Kembali ke Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
