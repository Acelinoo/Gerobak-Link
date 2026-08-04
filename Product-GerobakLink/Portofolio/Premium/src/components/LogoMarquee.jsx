import './LogoMarquee.css';

const logos = [
  { name: 'React', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse></svg>' },
  { name: 'Next.js', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15V9l7.74 10.6a12 12 0 1 1-2.43-1.63M15 15V9"></path></svg>' },
  { name: 'Tailwind CSS', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5s-2 0-3.5 1.5-1.5 3.5-1.5 3.5 2-1 3.5-1.5 1.5-.5 3.5-1.5 1.5-3.5 1.5-3.5-2 1-3.5 1.5z"></path><path d="M6.5 13.5s-2 0-3.5 1.5-1.5 3.5-1.5 3.5 2-1 3.5-1.5 1.5-.5 3.5-1.5 1.5-3.5 1.5-3.5-2 1-3.5 1.5z"></path></svg>' },
  { name: 'Java', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.5s1 2.5 8 2.5 8-2.5 8-2.5"></path><path d="M6 16.5s1 2.5 6 2.5 6-2.5 6-2.5"></path><path d="M8 8c0-1.5-2-3-2-5"></path><path d="M12 9c0-2-3-4-3-6"></path><path d="M16 8c0-1.5-2-3-2-5"></path></svg>' },
  { name: 'Prisma', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"></path><path d="M12 2v20"></path><path d="M2 22l10-10"></path></svg>' },
  { name: 'PostgreSQL', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="18" rx="8" ry="3"></ellipse><path d="M4 18V6a8 3 0 0 1 16 0v12"></path><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse></svg>' },
  { name: 'Cisco', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6 8v8"></path><path d="M10 6v12"></path><path d="M14 6v12"></path><path d="M18 8v8"></path></svg>' },
];

const LogoMarquee = () => {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {/* We double the logos to create a seamless loop */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="marquee__item">
            <div 
              className="marquee__icon" 
              dangerouslySetInnerHTML={{ __html: logo.svg }} 
              aria-hidden="true"
            />
            <span className="marquee__name">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
