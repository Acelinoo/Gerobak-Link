import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <main className="pt-24 min-h-screen pb-24">
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Hubungi <span className="gold-gradient">Kami</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-neutral-400 font-light max-w-2xl mx-auto"
        >
          Diskusikan kemitraan strategis dan integrasi logistik digital untuk memajukan bisnis Anda 
          bersama tim konsultan dan teknis kami.
        </motion.p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass-card p-6 flex flex-col gap-4">
                <MapPin className="text-champagne" size={28} />
                <div>
                  <h3 className="text-white font-bold mb-2">Kantor Pusat</h3>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Gedung Cyber 2, Lt. 17<br />
                    Jl. HR Rasuna Said, Jakarta Selatan<br />
                    DKI Jakarta 12950, Indonesia
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 flex flex-col gap-4 justify-center">
                <Mail className="text-champagne" size={28} />
                <div>
                  <h3 className="text-white font-bold mb-2">Informasi & Kemitraan</h3>
                  <p className="text-neutral-400 font-light text-sm">halo@nusantara.id</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-3xl overflow-hidden glass-card p-2 relative group">
              <img 
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80" 
                alt="Peta Jakarta" 
                loading="lazy"
                width="1200"
                height="400"
                className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-neutral-950/40 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center animate-ping">
                </div>
                <div className="w-4 h-4 rounded-full bg-champagne absolute"></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Pesan berhasil dikirim!'); }}>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  placeholder="Budi Santoso"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Perusahaan / Organisasi</label>
                <input 
                  type="text" 
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  placeholder="PT Maju Bersama"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  placeholder="budi@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Pesan / Pertanyaan</label>
                <textarea 
                  rows="5"
                  required
                  className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-champagne focus:ring-1 focus:ring-champagne transition-all"
                  placeholder="Ceritakan kebutuhan operasional atau logistik bisnis Anda..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-neutral-950 font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      </main>
    </PageTransition>
  );
}
