import { motion } from "framer-motion";

const team = [
  { name: "Budi Santoso", role: "Direktur Utama", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
  { name: "Siti Rahmawati", role: "Direktur Operasional", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
  { name: "Agus Pratama", role: "CTO / IT Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" },
  { name: "Rina Wijaya", role: "Komisaris Utama", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
];

import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen pb-20">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center border-b border-white/10 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Tentang <span className="gold-gradient">Kami</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-neutral-400 font-light max-w-3xl mx-auto"
        >
          Berdiri sejak tahun 2018, PT Nusantara Logistik telah berkembang menjadi pelopor inovasi 
          digital logistik. Kami didorong oleh satu tujuan utama: mempercepat pertumbuhan UMKM dan 
          mendistribusikan kemakmuran ke seluruh pelosok negeri.
        </motion.p>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden glass-card p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
              alt="Tim Operasional" 
              loading="lazy"
              width="1200"
              height="800"
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Visi & Misi</h2>
            <p className="text-neutral-400 font-light mb-6 text-lg">
              Kami tidak sekadar membangun sistem logistik; kami merancang ekosistem ekonomi inklusif. 
              Pendekatan kami bergantung pada analisis data berbasis AI dipadukan dengan pemahaman mendalam 
              mengenai kebutuhan pedagang lokal di Indonesia.
            </p>
            <ul className="space-y-4 text-neutral-300 font-light">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-champagne"></span> Legalitas Perusahaan (NIB: 1293000888200)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-champagne"></span> Dipercaya oleh 10,000+ Mitra UMKM
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-champagne"></span> Berizin Resmi Penyelenggara Sistem Elektronik (PSE) Kominfo
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Tim <span className="gold-gradient">Manajemen</span></h2>
          <p className="text-neutral-400 font-light">Para pemimpin visioner di balik inovasi logistik Nusantara Logistik.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  loading="lazy"
                  width="600"
                  height="800"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-champagne text-sm font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      </main>
    </PageTransition>
  );
}
