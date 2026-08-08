'use client';

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="wrap">
        <div className="eyebrow">Studio Desain &amp; Development Web</div>
        <h1 className="hero-head">Satu Tempat Buat Semua Kebutuhan Digitalmu.</h1>
        <p className="hero-sub">
          GerobakLink merancang dan membangun website untuk empat kebutuhan yang paling sering dicari — profil perusahaan, toko online, undangan digital, joki tugas, dan portofolio pribadi. Tiap tipe punya sistem desainnya sendiri, dikerjakan dengan standar presisi yang sama.
        </p>

        <div className="hero-actions">
          <a href="#katalog" className="btn btn-primary" data-cursor="LIHAT">
            Lihat Katalog <span className="mg">→</span>
          </a>
          <a href="#proses" className="btn" data-cursor="PROSES">
            Cara Kerja Kami
          </a>
        </div>

        {/* Index Ruler */}
        <div className="index-ruler">
          <a href="#kat-01" data-cursor="01">
            <b>01 · Profil</b>Company Profile
          </a>
          <a href="#kat-02" data-cursor="02">
            <b>02 · Toko</b>Toko Online
          </a>
          <a href="#kat-03" data-cursor="03">
            <b>03 · Undangan</b>Undangan Digital
          </a>
          <a href="#kat-04" data-cursor="04">
            <b>04 · Karya</b>Portofolio
          </a>
          <a href="#kat-05" data-cursor="05">
            <b>05 · Pendidikan</b>Web Pendidikan
          </a>
          <a href="#kat-06" data-cursor="06">
            <b>06 · Joki Tugas</b>Tugas Kuliah/Sekolah/Kantor
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <i />
        Scroll
      </div>
    </section>
  );
}
