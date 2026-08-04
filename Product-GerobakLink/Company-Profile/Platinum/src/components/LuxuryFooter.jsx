import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LuxuryFooter() {
  return (
    <footer id="contact" className="w-full bg-neutral-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-champagne/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Mari wujudkan <br /> <span className="gold-gradient">Transformasi Bersama.</span>
            </h2>
            <p className="text-neutral-400 font-light max-w-md mb-8">
              Baik Anda merencanakan integrasi rantai pasok cerdas maupun digitalisasi UMKM skala besar, 
              tim konsultan dan insinyur kami siap merealisasikan visi Anda.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-colors font-medium">
              Mulai Konsultasi
            </Link>
          </div>

          <div>
            <h4 className="text-champagne tracking-widest text-xs uppercase font-medium mb-6">Tentang Perusahaan</h4>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portofolio Kami</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Publikasi</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Karir</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-champagne tracking-widest text-xs uppercase font-medium mb-6">Kantor Pusat</h4>
            <address className="not-italic text-neutral-400 font-light space-y-2 mb-6">
              <p>Gedung Cyber 2, Lt. 17</p>
              <p>Jl. HR Rasuna Said, Jakarta Selatan</p>
              <p>DKI Jakarta 12950, Indonesia</p>
            </address>
            <div className="space-y-2 text-neutral-400 font-light">
              <p>+62 (21) 555-8901</p>
              <p>halo@nusantara.id</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-neutral-500 text-sm font-light">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-widest text-white">NUSANTARA</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">ArchDaily</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
