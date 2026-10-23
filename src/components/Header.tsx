import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import '../styles/components/header.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Kontak', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name Placeholder */}
          <a
            href="#hero"
            className="header-brand"
            aria-label="Kembali ke Beranda"
          >
            <Building2 className="w-6 h-6 text-[#005B9E]" aria-hidden="true" />
            <span>[NAMA PERUSAHAAN]</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 header-cta-btn"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-panel md:hidden">
          <div className="site-container flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="nav-link block py-2 text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 header-cta-btn"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
