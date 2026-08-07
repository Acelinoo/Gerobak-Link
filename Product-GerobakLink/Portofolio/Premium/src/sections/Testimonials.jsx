import ScrollReveal from '../components/ScrollReveal';
import { Star, Quote, ShieldCheck, Building2, UserCheck } from 'lucide-react';
import LogoMarquee from '../components/LogoMarquee';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    role: 'Chief Technology Officer',
    company: 'Tech Enterprise Group',
    avatar: 'BS',
    text: 'Marchelino memiliki kemampuan luar biasa dalam mengeksekusi arsitektur web yang sangat cepat dan terstruktur. Pengetahuan teknis dan perhatiannya terhadap detail sangat mengesan kan.',
    rating: 5
  },
  {
    name: 'Amanda Rahma',
    role: 'VP of Product',
    company: 'Digital Solutions Co.',
    avatar: 'AR',
    text: 'Kualitas pekerjaan Marchelino luar biasa. Antarmuka aplikasi yang dibangun terasa sangat fluid, responsif, dan standar pengkodeannya sangat mudah dipahami tim.',
    rating: 5
  },
  {
    name: 'David Wijaya',
    role: 'Lead Architect & Mentor',
    company: 'Software Engineering Labs',
    avatar: 'DW',
    text: 'Sangat disiplin dan menguasai filosofi clean code. Kemampuannya menyelesaikan masalah teknis yang rumit menjadikannya salah satu engineer berbakat.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section testimonials" id="testimoni">
      <div className="section-header">
        <div className="section-tag">05 / Rekomendasi Profesional</div>
        <h2 className="section-title">Rekomendasi & Rekan Kerja</h2>
        <p className="section-subtitle">
          Ulasan dan penilaian dari rekan kerja, atasan, dan mentor di industri teknologi.
        </p>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((item, index) => (
          <ScrollReveal key={item.name} delay={index * 0.1}>
            <div className="glass-card testimonial-card">
              <div className="testimonial-card__header">
                <div className="testimonial-card__stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <Quote size={24} className="quote-icon" />
              </div>

              <p className="testimonial-card__text">"{item.text}"</p>

              <div className="testimonial-card__author">
                <div className="author-avatar">{item.avatar}</div>
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role} • <strong>{item.company}</strong></p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="testimonials__marquee-section">
        <p className="marquee-title mono">EKOSISTEM TEKNOLOGI & MOSTACK UTAMA</p>
        <LogoMarquee />
      </div>
    </section>
  );
};

export default Testimonials;
