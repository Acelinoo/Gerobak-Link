import ScrollReveal from '../components/ScrollReveal';
import './Education.css';

const Education = () => {
  return (
    <section className="section education" id="pendidikan">
      <div className="section__header">
        <span className="section__number">02</span>
        <h2 className="section__title">Pendidikan & Sertifikasi</h2>
      </div>

      <div className="edu__grid">
        <ScrollReveal delay={0.1}>
          <div className="card edu__card">
            <div className="edu__meta mono-label">Gelar Dummy</div>
            <h3 className="edu__title">Jurusan Dummy A</h3>
            <div className="edu__institution">Universitas Dummy Pertama</div>
            
            <div className="edu__stamp">
              <div className="edu__stamp-inner">
                <span className="mono">VERIFIED</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="card edu__card">
            <div className="edu__meta mono-label">Sertifikasi Dummy</div>
            <h3 className="edu__title">Modul Kursus Dummy B</h3>
            <div className="edu__institution">Lembaga Sertifikasi Dummy</div>
            
            <div className="edu__stamp edu__stamp--alt">
              <div className="edu__stamp-inner">
                <span className="mono">PASSED</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
