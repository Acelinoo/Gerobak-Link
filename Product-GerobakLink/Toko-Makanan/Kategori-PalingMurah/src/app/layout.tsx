import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sambal Bakar — Pesan Makanan Online Direct WA',
  description: 'Toko makanan online Sambal Bakar. Nikmati hidangan ayam, bebek, dan paket komplit pedas mantap. Order cepat tanpa ribet via WhatsApp.',
  keywords: ['Sambal Bakar', 'Toko Makanan Online', 'Ayam Geprek', 'Pesan WA', 'Kuliner Pedas'],
  authors: [{ name: 'GerobakLink' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#FFF8F0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth bg-bg-cream text-text-dark font-main [-webkit-tap-highlight-color:transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-bg-cream [&::-webkit-scrollbar-thumb]:bg-[#D8C7BC] [&::-webkit-scrollbar-thumb]:rounded-full">
      <body className="antialiased selection:bg-red-500 selection:text-white min-h-screen flex flex-col bg-bg-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
