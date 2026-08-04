import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Digitalisasi Rantai Pasok Jawa Barat",
    category: "Sistem Logistik Daerah",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Integrasi Platform UMKM Nasional",
    category: "E-Commerce & Supply Chain",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Smart Warehouse Tanjung Priok",
    category: "Infrastruktur IT",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Portofolio <span className="gold-gradient">Proyek</span>
          </h2>
          <p className="text-neutral-400 text-lg font-light max-w-md">
            Pencapaian strategis kami dalam mentransformasi ekosistem logistik dan UMKM di Indonesia.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-champagne hover:text-white transition-colors">
          Lihat Semua Proyek <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="flex flex-col w-full">
        {projects.map((proj, idx) => (
          <motion.a
            href="/projects"
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative w-full h-[60vh] md:h-[70vh] overflow-hidden border-t border-white/10 flex items-center block cursor-pointer"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={proj.img}
                alt={proj.title}
                loading="lazy"
                width="1200"
                height="800"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-end">
              <div>
                <span className="text-champagne font-medium tracking-widest text-sm mb-2 block">
                  {proj.id} — {proj.category}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {proj.title}
                </h3>
              </div>
              
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 ease-out">
                <ArrowUpRight size={28} className="text-white" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
