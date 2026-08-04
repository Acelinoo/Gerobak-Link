const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tighter">
          MARCHELINO.
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Marchelino Kurniawan. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
