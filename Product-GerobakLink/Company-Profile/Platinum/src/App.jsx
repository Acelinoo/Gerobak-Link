import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FloatingHeader from "./components/FloatingHeader";
import LuxuryFooter from "./components/LuxuryFooter";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="bg-neutral-950 min-h-screen font-sans selection:bg-gold-500/30 selection:text-gold-200 cursor-none md:cursor-auto">
        <FloatingHeader />
        <AnimatedRoutes />
        <LuxuryFooter />
      </div>
    </Router>
  );
}

export default App;
