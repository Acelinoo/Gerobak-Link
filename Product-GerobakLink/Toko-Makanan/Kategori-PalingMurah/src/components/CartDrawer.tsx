'use client';

import React, { useState } from 'react';
import { CartItem } from '@/types/store';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (cartItemId: string, newQty: number) => void;
  onUpdateCatatan: (cartItemId: string, catatan: string) => void;
  onRemoveItem: (cartItemId: string) => void;
  customerName: string;
  setCustomerName: (val: string) => void;
  customerPhone: string;
  setCustomerPhone: (val: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onUpdateCatatan,
  onRemoveItem,
  customerName,
  setCustomerName,
  customerPhone,
  setCustomerPhone,
  onProceedToCheckout,
}) => {
  const [phoneError, setPhoneError] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
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

  const handleCheckoutClick = () => {
    // Validate phone number: mandatory, only numbers, min 10 digits
    const cleanedPhone = customerPhone.replace(/\D/g, '');
    if (!customerPhone.trim()) {
      setPhoneError('Nomor WhatsApp wajib diisi.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setPhoneError('Nomor WhatsApp minimal 10 digit angka.');
      return;
    }

    setPhoneError('');
    onProceedToCheckout();
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#1e120c]/55 backdrop-blur-[3px] z-[998]" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[440px] bg-white z-[999] flex flex-col shadow-[-8px_0_28px_rgba(0,0,0,0.18)] animate-slide-in-right">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-orange-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            <h2 className="font-extrabold text-lg text-gray-900">
              Keranjang Pesanan ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-orange-100/70 flex items-center justify-center text-3xl">
                🛒
              </div>
              <p className="font-bold text-gray-800 text-lg">Keranjang masih kosong</p>
              <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                Pilih menu enak dari Sambal Bakar dan tambahkan ke sini.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.cartItemId}
                className="bg-white rounded-xl p-3 border border-orange-100 shadow-sm flex flex-col gap-2"
              >
                <div className="flex gap-3">
                  <img
                    src={item.menuItem.foto_url}
                    alt={item.menuItem.nama}
                    className="w-16 h-16 rounded-lg object-cover bg-orange-50 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-sm text-gray-900 truncate">
                        {item.menuItem.nama}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {item.selectedVariant && (
                      <span className="inline-block bg-orange-100/80 text-orange-950 text-[11px] font-semibold px-2 py-0.5 rounded-md my-1">
                        {item.selectedVariant}
                      </span>
                    )}

                    <div className="font-extrabold text-sm text-red-600 mt-0.5">
                      {formatRupiah(item.menuItem.harga)}
                    </div>
                  </div>
                </div>

                {/* Note per item */}
                <div>
                  <input
                    type="text"
                    placeholder="Catatan (mis: setengah mateng, extra pedas)"
                    value={item.catatan}
                    onChange={(e) =>
                      onUpdateCatatan(item.cartItemId, e.target.value)
                    }
                    className="w-full text-xs p-2 rounded-lg bg-gray-50 border border-gray-200 outline-none focus:border-red-500"
                  />
                </div>

                {/* Qty controls */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                  <span className="text-xs text-gray-500 font-medium">Subtotal item:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <button
                        onClick={() =>
                          onUpdateQty(item.cartItemId, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQty(item.cartItemId, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-gray-700 hover:bg-gray-200"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-xs font-bold text-gray-900 min-w-[70px] text-right">
                      {formatRupiah(item.menuItem.harga * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Customer Inputs Form */}
          {cartItems.length > 0 && (
            <div className="bg-orange-50/70 p-3.5 rounded-xl border border-orange-100 space-y-3 mt-4">
              <h3 className="font-extrabold text-xs text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-red-600" />
                Data Pemesan (Wajib)
              </h3>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nama Lengkap Pemesan:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-[14px] rounded-[14px] border border-border-color bg-white text-text-dark transition-all duration-200 outline-none focus:border-primary-red focus:shadow-[0_0_0_3px_rgba(216,58,58,0.12)] text-xs py-2"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nomor WhatsApp <span className="text-red-600">*</span>:
                </label>
                <input
                  type="tel"
                  placeholder="Contoh: 081234567890"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    if (phoneError) setPhoneError('');
                  }}
                  className={`w-full px-[14px] rounded-[14px] border border-border-color bg-white text-text-dark transition-all duration-200 outline-none focus:border-primary-red focus:shadow-[0_0_0_3px_rgba(216,58,58,0.12)] text-xs py-2 ${
                    phoneError ? 'border-red-500 bg-red-50' : ''
                  }`}
                />
                {phoneError && (
                  <p className="text-[11px] font-bold text-red-600 mt-1">
                    {phoneError}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout CTA */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white space-y-3 shadow-lg">
            <div className="flex items-center justify-between text-base">
              <span className="font-bold text-gray-700">Total Pembelian:</span>
              <span className="font-black text-xl text-red-600">
                {formatRupiah(subtotal)}
              </span>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full bg-primary-red text-white cursor-pointer inline-flex items-center justify-center transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-red-hover hover:-translate-y-[1px] hover:shadow-[0_6px_16px_rgba(216,58,58,0.35)] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none shadow-[0_4px_12px_rgba(239,68,68,0.3)] py-3 rounded-xl font-extrabold flex gap-2 text-base"
            >
              <span>Lanjut Pilih Pembayaran</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
