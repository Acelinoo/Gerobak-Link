import ScrollReveal from '../components/ScrollReveal';
import acelinoImg from '../assets/acelino.png';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="tentang">
      <div className="section__header">
        <span className="section__number">01</span>
        <h2 className="section__title">Tentang Saya</h2>
      </div>

      <div className="about__grid">
        <div className="about__spec-sheet">
          <div className="about__spec-row">
            <div className="about__spec-label mono-label">Status</div>
            <div className="about__spec-value mono text-red">Aktif / Available</div>
          </div>
          <div className="about__spec-row">
            <div className="about__spec-label mono-label">Fokus</div>
            <div className="about__spec-value">Engineering UI/UX, Backend System</div>
          </div>
          <div className="about__spec-row">
            <div className="about__spec-label mono-label">Lokasi</div>
            <div className="about__spec-value">Indonesia</div>
          </div>
          <div className="about__photo-wrapper">
            <img src={acelinoImg} alt="Marchelino Kurniawan" className="about__photo" />
          </div>
        </div>

        <div className="about__content">
          <ScrollReveal delay={0.1}>
            <p className="about__text">
              Saya adalah seorang Web Developer dengan latar belakang pendidikan dari Universitas Dummy. Saya memiliki passion kuat dalam menerjemahkan kompleksitas bisnis menjadi sistem informasi yang intuitif dan efisien.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="about__text">
              Pendekatan saya terhadap pengembangan web berakar pada <strong>"Engineering Precision"</strong>. Saya percaya bahwa antarmuka yang hebat bukan hanya tentang estetika, melainkan tentang struktur yang kokoh, aksesibilitas, dan performa yang optimal di bawah beban kerja produksi.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="about__text">
              Dengan pengalaman menangani siklus penuh pengembangan perangkat lunak—mulai dari analisis kebutuhan, perancangan arsitektur, hingga implementasi <em>clean code</em> di sisi frontend dan backend—saya siap membangun solusi digital yang berskala.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
