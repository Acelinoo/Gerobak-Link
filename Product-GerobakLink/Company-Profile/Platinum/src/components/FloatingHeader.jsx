import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Portofolio", path: "/projects" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <div className="w-3 h-3 bg-neutral-950 rounded-sm transform group-hover:rotate-45 transition-transform duration-500"></div>
            </div>
            <span className="text-xl font-bold tracking-widest text-white">NUSANTARA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-white transition-colors duration-300 ${
                  location.pathname === item.path ? "text-white" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] glass-nav bg-neutral-950/90 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center text-3xl font-light">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-white hover:scale-110 transition-all duration-300 ${
                    location.pathname === item.path ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
