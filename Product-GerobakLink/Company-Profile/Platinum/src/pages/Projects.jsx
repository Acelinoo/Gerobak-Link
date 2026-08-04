import { motion } from "framer-motion";
import ProjectShowcase from "../components/ProjectShowcase";
import ModernGallery from "../components/ModernGallery";
import CtaBlock from "../components/CtaBlock";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Portofolio <span className="gold-gradient">Kami</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-neutral-400 font-light max-w-2xl mx-auto"
        >
          Jelajahi pencapaian strategis Nusantara Logistik dalam mentransformasi lanskap logistik dan ekosistem UMKM. 
          Setiap proyek merepresentasikan dedikasi tanpa kompromi kami terhadap kualitas dan dampak sosial-ekonomi.
        </motion.p>
      </section>

      <ModernGallery />
      <ProjectShowcase />
      <CtaBlock />
      </main>
    </PageTransition>
  );
}
