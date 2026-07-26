'use client';

import React, { useState } from 'react';
import { CartItem, StoreConfig } from '@/types/store';
import {
  X,
  QrCode,
  CreditCard,
  Banknote,
  Send,
  Copy,
  Check,
  ShieldCheck,
  FileText,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  customerName: string;
  customerPhone: string;
  config: StoreConfig;
  onCompleteOrder: (orderCode: string, selectedMethod: 'qris' | 'transfer' | 'cod') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  customerName,
  customerPhone,
  config,
  onCompleteOrder,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'transfer' | 'cod'>('qris');
  const [copiedBankIndex, setCopiedBankIndex] = useState<number | null>(null);

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

  const handleCopyAccount = (noRek: string, index: number) => {
    navigator.clipboard.writeText(noRek);
    setCopiedBankIndex(index);
    setTimeout(() => setCopiedBankIndex(null), 2000);
  };

  const generateOrderCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `#SB-${randomNum}`;
  };

  const handleSendWhatsApp = () => {
    const orderCode = generateOrderCode();

    // Build WA message string according to PRD section 3.3 format
    let itemLines = cartItems
      .map((item) => {
        let line = `- ${item.menuItem.nama}`;
        if (item.selectedVariant) {
          line += ` (${item.selectedVariant})`;
        }
        line += ` x${item.quantity}`;
        if (item.catatan) {
          line += ` — catatan: ${item.catatan}`;
        }
        return line;
      })
      .join('\n');

    let methodText = '';
    if (paymentMethod === 'qris') methodText = 'QRIS (bukti terlampir)';
    else if (paymentMethod === 'transfer') methodText = 'Transfer Bank (bukti terlampir)';
    else methodText = 'COD (Bayar di Tempat)';

    const waText = `Halo ${config.nama_toko}, saya mau pesan:
${itemLines}

Total: ${formatRupiah(totalAmount)}
Metode Bayar: ${methodText}
Nama: ${customerName.trim() || 'Pembeli'}
No. HP: ${customerPhone}
Kode pesanan: ${orderCode}`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${config.no_wa_pemilik}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    // Notify parent component to show Digital Struk Modal
    onCompleteOrder(orderCode, paymentMethod);
  };

  return (
    <div className="fixed inset-0 bg-[#1e120c]/55 backdrop-blur-[4px] z-[999] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-[20px] w-full max-w-[520px] max-h-[90vh] overflow-y-auto shadow-[0_12px_32px_rgba(42,26,20,0.14)] p-6 relative animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
          <div>
            <h2 className="text-xl font-black text-gray-900">Checkout & Pembayaran</h2>
            <p className="text-xs text-gray-500">
              Periksa ringkasan pesanan & pilih metode pembayaran
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Order Item Summary */}
          <div className="bg-orange-50/60 rounded-xl p-3 border border-orange-100 space-y-2">
            <h3 className="text-xs font-bold uppercase text-amber-950 tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-red-600" /> Ringkasan Pesanan
            </h3>
            <div className="max-h-40 overflow-y-auto space-y-2 text-xs divide-y divide-orange-100/80 pr-1">
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="pt-2 first:pt-0 flex justify-between gap-2">
                  <div>
                    <span className="font-bold text-gray-900">
                      {item.menuItem.nama} ({item.quantity}x)
                    </span>
                    {item.selectedVariant && (
                      <span className="text-[11px] text-amber-900 block font-medium">
                        Varian: {item.selectedVariant}
                      </span>
                    )}
                    {item.catatan && (
                      <span className="text-[11px] text-gray-500 block italic">
                        Catatan: {item.catatan}
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-gray-900 shrink-0">
                    {formatRupiah(item.menuItem.harga * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-orange-200/70 flex justify-between items-center text-sm">
              <span className="font-bold text-gray-800">Total Yang Harus Dibayar:</span>
              <span className="font-black text-red-600 text-base">
                {formatRupiah(totalAmount)}
              </span>
            </div>
          </div>

          {/* Customer Info Confirmation */}
          <div className="text-xs bg-gray-50 p-2.5 rounded-lg border border-gray-200 text-gray-700 flex justify-between">
            <div>
              <span className="text-gray-500">Pemesan:</span>{' '}
              <strong className="text-gray-900">{customerName || 'Pembeli'}</strong>
            </div>
            <div>
              <span className="text-gray-500">No. WA:</span>{' '}
              <strong className="text-gray-900">{customerPhone}</strong>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-2">
              Pilih Metode Pembayaran:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {config.metode_bayar.qris_aktif && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qris')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'qris'
                      ? 'border-red-600 bg-red-50/80 text-red-700 shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-red-600" />
                  <span>QRIS</span>
                </button>
              )}

              {config.metode_bayar.transfer_aktif && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod('transfer')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'transfer'
                      ? 'border-red-600 bg-red-50/80 text-red-700 shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-red-600" />
                  <span>Transfer Bank</span>
                </button>
              )}

              {config.metode_bayar.cod_aktif && (
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-red-600 bg-red-50/80 text-red-700 shadow-sm'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Banknote className="w-5 h-5 text-red-600" />
                  <span>COD</span>
                </button>
              )}
            </div>
          </div>

          {/* Payment Method Details */}
          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs">
            {paymentMethod === 'qris' && (
              <div className="text-center space-y-2">
                <p className="font-semibold text-gray-700">
                  Scan QRIS di bawah ini dengan E-Wallet atau M-Banking:
                </p>
                <div className="bg-white p-2 inline-block rounded-xl border border-gray-200 shadow-sm">
                  <img
                    src={config.qris_image_url}
                    alt="QRIS Code"
                    className="w-40 h-40 object-contain mx-auto"
                  />
                </div>
                <p className="text-[11px] text-amber-900 font-bold bg-amber-50 p-2 rounded-lg border border-amber-200">
                  📸 <strong>Instruksi:</strong> Screenshot/simpan bukti bayar Anda, nanti kirimkan bersamaan dengan pesan WhatsApp.
                </p>
              </div>
            )}

            {paymentMethod === 'transfer' && (
              <div className="space-y-3">
                <p className="font-semibold text-gray-700">
                  Transfer tepat nominal ke rekening berikut:
                </p>
                {config.rekening.map((acc, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-black text-sm text-red-600 block">
                        Bank {acc.nama_bank}
                      </span>
                      <span className="font-mono text-sm font-bold text-gray-900 block">
                        {acc.no_rekening}
                      </span>
                      <span className="text-[11px] text-gray-500">
                        a.n {acc.nama_pemilik}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyAccount(acc.no_rekening, idx)}
                      className="bg-[#F7EFE9] text-text-dark font-semibold border border-border-color rounded-[14px] cursor-pointer inline-flex items-center justify-center transition-all duration-150 hover:bg-[#EFE4DC] hover:border-[#D8C7BC] text-xs px-2.5 py-1.5 gap-1"
                    >
                      {copiedBankIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin No.</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
                <p className="text-[11px] text-amber-900 font-bold bg-amber-50 p-2 rounded-lg border border-amber-200">
                  📸 <strong>Instruksi:</strong> Simpan struk/bukti transfer Bank Anda untuk dikirim via WA.
                </p>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="text-center py-2 space-y-1">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  💵
                </div>
                <p className="font-bold text-gray-900 text-sm">Bayar di Tempat (COD)</p>
                <p className="text-gray-600 text-xs max-w-xs mx-auto">
                  Pembayaran tunai dilakukan saat Anda mengambil makanan atau saat driver mengantar pesanan.
                </p>
              </div>
            )}
          </div>

          {/* Final Action Button */}
          <button
            onClick={handleSendWhatsApp}
            className="w-full text-white cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none py-3.5 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-[0_4px_12px_rgba(5,150,105,0.3)] hover:shadow-[0_6px_16px_rgba(5,150,105,0.4)]"
          >
            <Send className="w-5 h-5" />
            <span>Kirim Pesanan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
