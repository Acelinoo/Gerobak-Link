import { motion } from "framer-motion";
import { Compass, Box, Layers, Globe } from "lucide-react";

const features = [
  {
    title: "Integritas Tinggi",
    desc: "Menjunjung tinggi transparansi dan kejujuran dalam setiap kemitraan operasional logistik.",
    icon: <Box size={24} className="text-champagne" />,
    className: "md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-end min-h-[300px]",
    bg: "bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"
  },
  {
    title: "Inovasi Digital",
    desc: "Mendorong adaptasi teknologi cerdas untuk percepatan bisnis UMKM.",
    icon: <Globe size={24} className="text-champagne" />,
    className: "md:col-span-1 md:row-span-1 glass-card p-6 flex flex-col gap-4",
  },
  {
    title: "Kolaborasi",
    desc: "Sinergi bersama komunitas lokal dan pemerintah untuk ekosistem yang sehat.",
    icon: <Layers size={24} className="text-champagne" />,
    className: "md:col-span-1 md:row-span-1 glass-card p-6 flex flex-col gap-4",
  },
  {
    title: "Pelayanan Prima",
    desc: "Dedikasi kami untuk memberikan solusi logistik end-to-end yang efisien dan andal.",
    icon: <Compass size={24} className="text-champagne" />,
    className: "md:col-span-2 md:row-span-1 glass-card p-6 flex items-center gap-6",
  }
];

export default function BentoFeatures() {
  return (
    <section id="studio" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Nilai-Nilai <span className="gold-gradient">Perusahaan</span>
        </h2>
        <p className="text-neutral-400 max-w-xl text-lg font-light">
          Fondasi utama operasional kami untuk menciptakan solusi inovatif 
          yang andal, aman, dan berdampak nyata bagi pertumbuhan ekonomi lokal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`${item.className} relative overflow-hidden group`}
          >
            {/* Background Overlay if exists */}
            {item.bg && (
              <div className={`absolute inset-0 ${item.bg} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            )}
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 font-light">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
