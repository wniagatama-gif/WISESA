import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/components/hero.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-wrapper section-wrapper" aria-labelledby="hero-heading">
      <div className="site-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status / Category Tag Placeholder */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="hero-tag">
              <ShieldCheck className="w-4 h-4 text-blue-800" aria-hidden="true" />
              <span>Profil Resmi Perusahaan</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Membangun Solusi Terpercaya untuk Masa Depan Bisnis Anda
          </h1>

          {/* Subtitle / Company Value Description */}
          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
            [NAMA PERUSAHAAN] menyediakan layanan profesional dengan komitmen tinggi pada kualitas, integritas, dan kepuasan mitra kerja di seluruh Indonesia.
          </p>

          {/* Functional CTAs with clear targets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="hero-cta-btn hero-cta-primary w-full sm:w-auto text-base"
            >
              <span>Jelajahi Layanan</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="hero-cta-btn hero-cta-secondary w-full sm:w-auto text-base"
            >
              Konsultasi Bersama Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
