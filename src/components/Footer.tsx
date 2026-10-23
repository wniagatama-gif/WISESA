import React from 'react';
import { Building2 } from 'lucide-react';
import '../styles/components/footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <Building2 className="w-5 h-5 text-[#005B9E]" aria-hidden="true" />
              <span>[NAMA PERUSAHAAN]</span>
            </div>
            <p className="text-[#7E8185] text-sm max-w-sm leading-relaxed">
              Website resmi profil perusahaan. Menyediakan informasi terpercaya mengenai layanan, nilai, dan arah perkembangan bisnis kami.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="footer-link">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Notes Col */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Legalitas & Catatan
            </h4>
            <ul className="space-y-2.5 text-sm text-[#7E8185]">
              <li>[Nomor Izin Usaha / NIB]</li>
              <li>[Sertifikasi Standar Operasional]</li>
              <li>Kebijakan Privasi (Placeholder)</li>
              <li>Syarat & Ketentuan (Placeholder)</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} [NAMA PERUSAHAAN]. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-xs text-[#7E8185]">
            Company Profile Starter: React + Vite + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
