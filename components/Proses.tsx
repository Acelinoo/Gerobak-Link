'use client';

export default function Proses() {
  return (
    <section id="proses">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Proses</div>
            <h2 className="section-title">Empat tahap, satu standar.</h2>
          </div>
          <p className="section-note">
            Semua tipe situs melalui alur yang sama — bedanya cuma di detail desain dan fitur tiap kategori.
          </p>
        </div>

        <div className="proses-list">
          <div className="proses-line">
            <div className="proses-line-fill" id="prosesFill" />
          </div>
          <div className="proses-step reveal">
            <div className="num">01</div>
            <div>
              <h3>Konsultasi</h3>
              <p>Diskusi kebutuhan, tipe situs yang paling cocok, dan referensi yang kamu suka.</p>
            </div>
          </div>
          <div className="proses-step reveal">
            <div className="num">02</div>
            <div>
              <h3>Desain</h3>
              <p>Sistem desain dibangun khusus untuk kategori situsmu, bukan tempel dari template.</p>
            </div>
          </div>
          <div className="proses-step reveal">
            <div className="num">03</div>
            <div>
              <h3>Build</h3>
              <p>Development, revisi, dan pengujian di berbagai perangkat sebelum dianggap selesai.</p>
            </div>
          </div>
          <div className="proses-step reveal">
            <div className="num">04</div>
            <div>
              <h3>Deploy &amp; Review</h3>
              <p>Situs live di domainmu, kamu review langsung, dan siap dipakai.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
