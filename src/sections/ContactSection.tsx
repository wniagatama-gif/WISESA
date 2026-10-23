import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Mohon lengkapi nama, email, dan pesan Anda sebelum mengirimkan formulir.');
      return;
    }

    // Feedback visual pengiriman formulir lokal (placeholder interaktif)
    setIsSubmitted(true);
    setErrorMessage('');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section-wrapper bg-white" aria-labelledby="contact-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-bold text-[#051336] tracking-tight mb-4"
          >
            Hubungi Kami
          </h2>
          <p className="text-[#43474d] text-base sm:text-lg">
            Ada pertanyaan atau ingin mendiskusikan kerja sama bisnis? Tim kami siap mendengarkan dan membantu Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Company Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-semibold text-[#051336]">
              Informasi Kantor
            </h3>
            <p className="text-[#43474d] text-sm leading-relaxed">
              Silakan hubungi saluran komunikasi resmi perusahaan di bawah ini atau tinggalkan pesan melalui formulir yang tersedia.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#005B9E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-medium text-[#051336]">Alamat Kantor:</span>
                  <span className="text-sm text-[#43474d]">[Gedung Perkantoran / Nama Jalan No. XX, Kota, Provinsi, Kode Pos]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#005B9E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-medium text-[#051336]">Telepon / WhatsApp:</span>
                  <a
                    href="tel:+6200000000000"
                    className="text-sm text-[#005B9E] hover:text-[#051336] hover:underline"
                  >
                    +62 [Nomor Telepon Placeholder]
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#005B9E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block font-medium text-[#051336]">Email Resmi:</span>
                  <a
                    href="mailto:kontak@perusahaan.example.com"
                    className="text-sm text-[#005B9E] hover:text-[#051336] hover:underline"
                  >
                    kontak@[domain-perusahaan.example.com]
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[rgba(126,129,133,0.05)] border border-[rgba(126,129,133,0.25)] rounded-xl p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8" role="status" aria-live="polite">
                <CheckCircle2 className="w-12 h-12 text-[#005B9E] mx-auto mb-4" aria-hidden="true" />
                <h4 className="text-xl font-bold text-[#051336] mb-2">Pesan Berhasil Terkirim</h4>
                <p className="text-[#43474d] text-sm max-w-md mx-auto mb-6">
                  Terima kasih telah menghubungi kami. Tim perwakilan [NAMA PERUSAHAAN] akan segera meninjau pesan Anda dan merespons dalam waktu singkat.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#051336] bg-white border border-[#7E8185] rounded-md hover:bg-[rgba(126,129,133,0.08)] min-h-[44px]"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {errorMessage && (
                  <div
                    className="mb-4 p-3 rounded-md bg-[rgba(5,19,54,0.05)] border border-[#051336] text-[#051336] font-medium text-sm"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#051336] mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-3.5 py-2.5 rounded-md border border-[rgba(126,129,133,0.4)] text-[#000000] bg-white placeholder-[#7E8185] focus:outline-none focus:ring-2 focus:ring-[#005B9E] text-sm min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#051336] mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-md border border-[rgba(126,129,133,0.4)] text-[#000000] bg-white placeholder-[#7E8185] focus:outline-none focus:ring-2 focus:ring-[#005B9E] text-sm min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-[#051336] mb-1">
                    Subjek Keperluan
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Diskusi Penawaran Layanan"
                    className="w-full px-3.5 py-2.5 rounded-md border border-[rgba(126,129,133,0.4)] text-[#000000] bg-white placeholder-[#7E8185] focus:outline-none focus:ring-2 focus:ring-[#005B9E] text-sm min-h-[44px]"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[#051336] mb-1">
                    Isi Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pertanyaan atau deskripsi kebutuhan perusahaan Anda di sini..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-md border border-[rgba(126,129,133,0.4)] text-[#000000] bg-white placeholder-[#7E8185] focus:outline-none focus:ring-2 focus:ring-[#005B9E] text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#005B9E] text-white font-medium hover:bg-[#051336] transition-colors min-h-[44px]"
                >
                  <span>Kirim Pesan</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
