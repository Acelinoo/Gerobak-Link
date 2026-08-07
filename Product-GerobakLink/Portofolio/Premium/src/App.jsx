import { useState } from 'react';
import { motion } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import CaseStudyModal from './components/CaseStudyModal';
import CvModal from './components/CvModal';
import CertificateModal from './components/CertificateModal';
import ToastNotification from './components/ToastNotification';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="app-container"
    >
      <Navigation onOpenCv={() => setIsCvOpen(true)} />
      
      <main>
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <TechStack />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Contact onToast={showToast} />
      </main>

      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {isCvOpen && (
        <CvModal 
          onClose={() => setIsCvOpen(false)} 
          onToast={showToast}
        />
      )}

      {selectedCert && (
        <CertificateModal 
          cert={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}

      <ToastNotification 
        message={toastMessage} 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />
    </motion.div>
  );
}

export default App;
