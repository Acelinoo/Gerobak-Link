'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Katalog from '@/components/Katalog';
import Proses from '@/components/Proses';
import Ulasan from '@/components/Ulasan';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function Home() {
  useMagneticButton();
  useRevealOnScroll();

  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top">
        <Hero />
        <Katalog />
        <Proses />
        <Ulasan />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
