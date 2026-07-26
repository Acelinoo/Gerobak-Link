'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { StoreConfig, MenuItem, CartItem } from '@/types/store';
import { DUMMY_STORE_CONFIG, DUMMY_CATEGORIES, DUMMY_MENU_ITEMS } from '@/data/dummyData';
import { Header } from '@/components/Header';
import { ClosedBanner } from '@/components/ClosedBanner';
import { CategoryNav } from '@/components/CategoryNav';
import { MenuItemCard } from '@/components/MenuItemCard';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { OrderStrukModal } from '@/components/OrderStrukModal';
import { Footer } from '@/components/Footer';
import { ShoppingBag, ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react';

export default function Home() {
  const [config, setConfig] = useState<StoreConfig>(DUMMY_STORE_CONFIG);
  const [categories, setCategories] = useState(DUMMY_CATEGORIES);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(DUMMY_MENU_ITEMS);

  const [activeCategory, setActiveCategory] = useState('semua');
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrderData, setCompletedOrderData] = useState<{
    orderCode: string;
    paymentMethod: 'qris' | 'transfer' | 'cod';
  } | null>(null);

  // Fetch API config on mount
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/config');
        const data = await res.json();
        if (data.success) {
          if (data.config) setConfig(data.config);
          if (data.categories) setCategories(data.categories);
          if (data.items) setMenuItems(data.items);
        }
      } catch (err) {
        console.warn('Menggunakan fallback data dummy.');
      }
    }
    loadData();
  }, []);

  // Real-time check operating hours against current time
  useEffect(() => {
    function checkHours() {
      if (!config.jam_buka || !config.jam_tutup) return;

      // Allow URL parameter ?demo=open or ?override=open to force open for testing anytime
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('demo') === 'open' || searchParams.get('override') === 'true') {
        setIsStoreOpen(true);
        return;
      }

      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const [bukaH, bukaM] = config.jam_buka.split(':').map(Number);
      const [tutupH, tutupM] = config.jam_tutup.split(':').map(Number);

      const bukaMinutes = bukaH * 60 + bukaM;
      const tutupMinutes = tutupH * 60 + tutupM;

      const open = currentMinutes >= bukaMinutes && currentMinutes < tutupMinutes;
      setIsStoreOpen(open);
    }

    checkHours();
    const interval = setInterval(checkHours, 10000);
    return () => clearInterval(interval);
  }, [config]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'semua') return menuItems;
    return menuItems.filter((item) => item.kategori === activeCategory);
  }, [menuItems, activeCategory]);

  // Cart handlers
  const handleAddToCart = (item: MenuItem, selectedVariant: string) => {
    const cartItemId = `${item.id}-${selectedVariant || 'default'}`;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            menuItem: item,
            selectedVariant,
            quantity: 1,
            catatan: '',
          },
        ];
      }
    });
  };

  const handleUpdateQty = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleUpdateCatatan = (cartItemId: string, catatan: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, catatan } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const totalCartAmount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.menuItem.harga * item.quantity,
      0
    );
  }, [cartItems]);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCompleteOrder = (
    orderCode: string,
    paymentMethod: 'qris' | 'transfer' | 'cod'
  ) => {
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setCompletedOrderData({ orderCode, paymentMethod });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      {/* Header */}
      <Header
        config={config}
        isOpen={isStoreOpen}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Closed Banner if shop is outside operating hours */}
      {!isStoreOpen && (
        <ClosedBanner jamBuka={config.jam_buka} jamTutup={config.jam_tutup} />
      )}

      {/* Category Nav */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content Area */}
      <main className="max-w-[1000px] mx-auto px-4 flex-1 py-6">
        {/* Banner Hero Mini */}
        <div className="mb-6 bg-gradient-to-r from-red-700 via-orange-600 to-amber-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-lg space-y-2">
            <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-100">
              <Sparkles className="w-3.5 h-3.5" /> Sajian Pedas Fresh Setiap Hari
            </span>
            <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Nikmati Sambal Bakar Langsung Diantar ke Rumah!
            </h2>
            <p className="text-xs md:text-sm text-orange-100/90 font-medium">
              Pilih menu kesukaanmu, tentukan level pedas, dan checkout mudah via WhatsApp tanpa perlu login!
            </p>
          </div>
          <div className="absolute -right-6 -bottom-8 opacity-20 text-9xl pointer-events-none select-none">
            🔥
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-extrabold text-gray-900 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-red-600" />
              Daftar Menu Lezat
            </h2>
            <span className="text-xs font-semibold text-gray-500">
              Menampilkan {filteredItems.length} menu
            </span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center text-gray-500 border border-orange-100">
              <p className="font-bold text-gray-700">Menu tidak ditemukan</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  isStoreOpen={isStoreOpen}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Floating Sticky Bottom Cart Bar for Mobile & Quick Access */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 inset-x-4 z-40 max-w-md mx-auto animate-fade-in">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-primary-red text-white font-bold cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary-red-hover hover:-translate-y-[1px] active:translate-y-0 disabled:bg-[#E2D9D3] disabled:text-[#9C8980] disabled:cursor-not-allowed disabled:shadow-none hover:shadow-[0_6px_16px_rgba(216,58,58,0.35)] py-3.5 px-5 rounded-2xl flex items-center justify-between shadow-2xl shadow-red-600/40 border border-orange-300/40"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white text-red-600 font-black text-xs px-1.5 py-0.5 rounded-full shadow">
                  {totalCartCount}
                </span>
              </div>
              <div className="text-left leading-tight">
                <span className="text-[11px] text-orange-100 font-medium block">
                  Subtotal Pesanan:
                </span>
                <span className="text-base font-black">
                  {formatRupiah(totalCartAmount)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 font-extrabold text-sm bg-white/20 px-3 py-1.5 rounded-xl">
              <span>Lihat Keranjang</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onUpdateCatatan={handleUpdateCatatan}
        onRemoveItem={handleRemoveItem}
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerPhone={customerPhone}
        setCustomerPhone={setCustomerPhone}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        customerName={customerName}
        customerPhone={customerPhone}
        config={config}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* Order Struk / Digital Receipt Modal */}
      {completedOrderData && (
        <OrderStrukModal
          isOpen={!!completedOrderData}
          onClose={() => setCompletedOrderData(null)}
          orderCode={completedOrderData.orderCode}
          paymentMethod={completedOrderData.paymentMethod}
          cartItems={cartItems}
          customerName={customerName}
          customerPhone={customerPhone}
          config={config}
        />
      )}

      {/* Footer */}
      <Footer config={config} />
    </div>
  );
}
