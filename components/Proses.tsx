'use client';

export default function Proses() {
  const steps = [
    {
      num: '01',
      title: 'Konsultasi Awal',
      desc: 'Diskusi mendalam mengenai kebutuhan, tujuan, dan gambaran fitur yang diinginkan.',
    },
    {
      num: '02',
      title: 'Scoping & Penawaran Harga',
      desc: 'Pemetaan cakupan kerja dan penyusunan harga secara transparan.',
    },
    {
      num: '03',
      title: 'Pembayaran DP 50%',
      desc: 'Pengerjaan resmi dimulai setelah kesepakatan uang muka.',
    },
    {
      num: '04',
      title: 'Tahap Pengembangan',
      desc: 'Proses pembuatan sistem secara custom dengan update laporan berkala ke klien.',
    },
    {
      num: '05',
      title: 'Revisi',
      desc: 'Kesempatan memberikan umpan balik (maksimal 2x revisi minor gratis).',
    },
    {
      num: '06',
      title: 'Pelunasan & Serah Terima',
      desc: 'Sisa 50% dibayarkan, hak akses dan source code diserahkan sepenuhnya.',
    },
    {
      num: '07',
      title: 'Dukungan 14 Hari',
      desc: 'Masa garansi untuk pendampingan dan perbaikan bug secara gratis.',
    },
  ];

  return (
    <section id="proses">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Proses — 07 Tahapan</div>
            <h2 className="section-title">Tujuh alur kerja transparan.</h2>
          </div>
          <p className="section-note">
            Setiap proyek dikerjakan secara sistematis dari diskusi awal hingga pendampingan pasca launching.
          </p>
        </div>

        <div className="proses-list">
          <div className="proses-line">
            <div className="proses-line-fill" id="prosesFill" />
          </div>
          {steps.map((step) => (
            <div className="proses-step reveal" key={step.num}>
              <div className="num">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
