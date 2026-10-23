import React from 'react';
import { Target, Compass, Award } from 'lucide-react';
import '../styles/components/about.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section section-wrapper" aria-labelledby="about-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4"
          >
            Tentang [NAMA PERUSAHAAN]
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Mengenal lebih dekat dedikasi dan komitmen kami dalam menghadirkan standar mutu terbaik bagi setiap rekanan dan klien.
          </p>
        </div>

        {/* Company Narrative & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Visi Kami
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Tuliskan visi perusahaan di sini: Menjadi penyedia layanan terdepan yang inovatif, berdaya saing global, serta memberikan dampak positif bagi para pemangku kepentingan].
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Misi Kami
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Tuliskan misi perusahaan di sini: Memberikan solusi profesional secara konsisten, membangun hubungan kerja sama jangka panjang, dan menjaga standar etika operasional].
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon" aria-hidden="true">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Nilai Utama
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Tuliskan nilai inti perusahaan di sini: Kejujuran, keandalan, tanggung jawab profesional, dan orientasi pada solusi berkelanjutan untuk setiap mitra bisnis].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
