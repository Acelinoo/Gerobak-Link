'use client';

import { useState } from 'react';

export default function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    interest: 'Company Profile',
    message: '',
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success?: boolean;
    message?: string;
  }>({ loading: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: data.message || 'Pesan berhasil dikirim!',
        });
        setFormData({
          name: '',
          contact: '',
          interest: 'Company Profile',
          message: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.error || 'Gagal mengirim pesan. Silakan coba lagi.',
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        message: 'Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.',
      });
    }
  };

  return (
    <section id="cta">
      <div className="wrap cta">
        <div className="reveal">
          <h2>Siap pilih yang mana?</h2>
          <p>
            Konsultasi awal gratis — ceritakan kebutuhanmu lewat WhatsApp atau isi form kontak di bawah ini untuk memulai.
          </p>

          <div className="cta-grid">
            {/* Fast-path WhatsApp Button */}
            <div className="cta-fastpath">
              <h3>Konsultasi Langsung via WhatsApp</h3>
              <p>Respon lebih cepat untuk diskusi santai mengenai gambaran situsmu.</p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20INDEKS,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                className="btn btn-primary"
                data-cursor="MULAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Konsultasi via WA <span className="mg">→</span>
              </a>
            </div>

            {/* Form Kontak Short (Prisma DB Lead Integration) */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Kirim Pesan Konsultasi</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Masukkan nama Anda"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact">
                  Kontak (Email / No. WA) *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="form-input"
                  placeholder="Email atau 0812..."
                  required
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="interest">
                  Kategori Paket yang Diminati
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="form-select"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="Company Profile">Company Profile (PKG.01)</option>
                  <option value="Toko Online">Toko Online (PKG.02)</option>
                  <option value="Undangan Digital">Undangan Digital (PKG.03)</option>
                  <option value="Portofolio">Portofolio (PKG.04)</option>
                  <option value="Belum Yakin / Lainnya">Belum Yakin / Konsultasi Dulu</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Detail Kebutuhan
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Ceritakan gambaran singkat situs atau referensi yang Anda inginkan..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                data-cursor="SUBMIT"
                disabled={status.loading}
              >
                {status.loading ? 'Mengirim...' : 'Kirim Formulir'} <span className="mg">→</span>
              </button>

              {status.message && (
                <div
                  className={`form-status ${
                    status.success ? 'success' : 'error'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
