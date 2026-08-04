import { motion } from 'motion/react';
import { Layout, Server, Zap, Database } from 'lucide-react';

const skills = [
  {
    icon: <Layout className="w-6 h-6 mb-4 text-blue-500" />,
    title: 'Frontend Engineering',
    desc: 'React, Next.js, Tailwind CSS, Framer Motion'
  },
  {
    icon: <Server className="w-6 h-6 mb-4 text-purple-500" />,
    title: 'Backend Systems',
    desc: 'Node.js, Express, RESTful APIs, GraphQL'
  },
  {
    icon: <Database className="w-6 h-6 mb-4 text-green-500" />,
    title: 'Database Architecture',
    desc: 'PostgreSQL, MongoDB, Prisma, Redis'
  },
  {
    icon: <Zap className="w-6 h-6 mb-4 text-amber-500" />,
    title: 'Performance & Optimization',
    desc: 'Core Web Vitals, Caching, SEO best practices'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Expertise & <br/>Technologies</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            I specialize in building scalable web applications with modern architectures. My focus is on creating seamless user experiences backed by robust, efficient backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {skill.icon}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
