import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { 
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80", 
    title: "Fasilitas Logistik",
    category: "Infrastruktur",
    date: "2024",
    desc: "Pusat distribusi logistik utama kami yang melayani pengiriman kargo laut dan darat berskala nasional dengan sistem pelacakan real-time, memastikan rantai pasok berjalan tanpa hambatan.",
    location: "Pelabuhan Utama, Jakarta"
  },
  { 
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80", 
    title: "Infrastruktur E-Commerce",
    category: "Teknologi",
    date: "2025",
    desc: "Integrasi sistem pembayaran digital dan manajemen transaksi inovatif yang memudahkan mitra UMKM dalam mengelola penjualan mereka secara aman, cepat, dan efisien.",
    location: "Platform Digital"
  },
  { 
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80", 
    title: "Smart Warehouse",
    category: "Manajemen Aset",
    date: "2023",
    desc: "Fasilitas pergudangan cerdas yang dilengkapi dengan sensor IoT dan otomatisasi penuh untuk memastikan keamanan, visibilitas, dan akurasi pergerakan stok barang harian.",
    location: "Kawasan Industri, Cikarang"
  },
  { 
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80", 
    title: "Analitik Rantai Pasok",
    category: "Data & Analitik",
    date: "2026",
    desc: "Dasbor pemantauan komprehensif kami menyajikan analisis prediktif dan wawasan mendalam terkait kinerja jaringan logistik, membantu pengambilan keputusan strategis.",
    location: "Kantor Pusat Operasional"
  },
];

export default function ModernGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Arsip <span className="gold-gradient">Visual</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto">
            Dokumentasi komprehensif dari operasional logistik, fasilitas pergudangan cerdas, dan pusat inovasi teknologi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImg(item)}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group glass-card border-none"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width="800"
                height="1000"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white tracking-widest text-sm transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  LIHAT GAMBAR
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[70] bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] h-full md:h-auto overflow-y-auto md:overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 flex flex-col md:flex-row bg-neutral-950"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-3/5 h-[40vh] md:h-[80vh] relative">
                <img
                  src={selectedImg.img}
                  alt={selectedImg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center border-l border-white/5 bg-neutral-950">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-champagne text-xs font-bold tracking-widest uppercase">{selectedImg.category}</span>
                  <span className="text-neutral-500 text-sm">— {selectedImg.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{selectedImg.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-8">
                  {selectedImg.desc}
                </p>
                
                <div className="space-y-5 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Lokasi Proyek</p>
                    <p className="text-neutral-300 font-medium text-sm">{selectedImg.location}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Status Operasional</p>
                    <p className="text-emerald-400 font-medium text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 
                      Aktif & Beroperasi
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
