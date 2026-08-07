import ScrollVelocity from '../components/ScrollVelocity';
import {
  Code2,
  Layers,
  FileCode,
  Layout,
  Server,
  Globe,
  Database,
  Box,
  Cloud,
  Terminal,
  Cpu,
  GitBranch,
  Zap
} from 'lucide-react';
import './TechStack.css';

const LINE_1 = [
  { name: 'REACT.JS', icon: <Code2 size={24} /> },
  { name: 'NEXT.JS', icon: <Layers size={24} /> },
  { name: 'TYPESCRIPT', icon: <FileCode size={24} /> },
  { name: 'TAILWIND CSS', icon: <Layout size={24} /> },
  { name: 'NODE.JS', icon: <Server size={24} /> },
  { name: 'EXPRESS', icon: <Globe size={24} /> }
];

const LINE_2 = [
  { name: 'POSTGRESQL', icon: <Database size={24} /> },
  { name: 'DOCKER', icon: <Box size={24} /> },
  { name: 'AWS CLOUD', icon: <Cloud size={24} /> },
  { name: 'PYTHON', icon: <Terminal size={24} /> },
  { name: 'REDIS', icon: <Cpu size={24} /> },
  { name: 'GIT & GITHUB', icon: <GitBranch size={24} /> },
  { name: 'VITE', icon: <Zap size={24} /> }
];

const renderTechLine = (items) => {
  return (
    <span className="scroll-tech-group">
      {items.map((item, idx) => (
        <span key={idx} className="scroll-tech-item">
          <span className="scroll-tech-name">{item.name}</span>
          <span className="scroll-tech-icon">{item.icon}</span>
          <span className="scroll-tech-bullet">•</span>
        </span>
      ))}
    </span>
  );
};

const TechStack = () => {
  const texts = [renderTechLine(LINE_1), renderTechLine(LINE_2)];

  return (
    <section className="section techstack-scroll" id="keahlian">
      <div className="scroll-velocity-wrapper">
        <ScrollVelocity
          texts={texts}
          velocity={70}
          className="custom-scroll-text"
          numCopies={4}
        />
      </div>
    </section>
  );
};

export default TechStack;
