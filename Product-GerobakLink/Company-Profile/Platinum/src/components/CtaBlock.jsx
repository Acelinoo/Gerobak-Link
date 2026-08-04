import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CtaBlock() {
  return (
    <section className="w-full py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background with slight glow */}
      <div className="absolute inset-0 bg-neutral-900/30"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-champagne/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 glass-card p-10 md:p-16 border border-white/10 rounded-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Siap untuk tumbuh <br className="hidden md:block" /> 
              <span className="gold-gradient">Bersama Kami?</span>
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-lg">
              Diskusikan kebutuhan rantai pasok, integrasi sistem logistik, dan perencanaan operasional 
              bisnis Anda dengan tim ahli kami hari ini.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <Link
              to="/contact"
              className="w-full md:w-auto text-center inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-950 font-bold rounded-full hover:bg-neutral-200 transition-colors shadow-2xl"
            >
              Hubungi Tim Bisnis Kami →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
