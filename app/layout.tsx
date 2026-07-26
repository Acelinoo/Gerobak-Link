import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'INDEKS — Studio Desain & Development Website Presisi',
  description:
    'Studio desain & development website presisi di Indonesia. Melayani pembuatan Company Profile, Toko Online, Undangan Digital, dan Portofolio Pribadi.',
  keywords: [
    'studio web',
    'jasa pembuatan website',
    'company profile',
    'toko online',
    'undangan digital',
    'portofolio',
    'web design studio',
  ],
  openGraph: {
    title: 'INDEKS — Studio Desain & Development Website Presisi',
    description:
      'Satu studio, empat cara hadir online. Katalog 4 paket website presisi untuk bisnis dan kebutuhan personal Anda.',
    url: 'https://indeks.studio',
    siteName: 'INDEKS Studio Web',
    images: [
      {
        url: 'https://indeks.studio/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'INDEKS Studio Web',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INDEKS — Studio Desain & Development Website Presisi',
    description:
      'Satu studio, empat cara hadir online. Katalog 4 paket website presisi untuk bisnis dan kebutuhan personal Anda.',
    images: ['https://indeks.studio/og-banner.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
