import React from 'react';
import { Briefcase, Layers, Cog, CheckCircle2 } from 'lucide-react';
import '../styles/components/services.css';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'layanan-1',
    icon: <Briefcase className="w-6 h-6" aria-hidden="true" />,
    title: '[Layanan Utama 1: Konsultasi & Solusi Bisnis]',
    description: '[Deskripsi singkat mengenai layanan pertama, ruang lingkup pekerjaan, serta manfaat yang diperoleh klien].',
    features: [
      '[Cakupan layanan 1: Analisis kebutuhan awal]',
      '[Cakupan layanan 2: Perencanaan implementasi]',
      '[Cakupan layanan 3: Pendampingan berkala]',
    ],
  },
  {
    id: 'layanan-2',
    icon: <Layers className="w-6 h-6" aria-hidden="true" />,
    title: '[Layanan Utama 2: Manajemen Proyek & Operasional]',
    description: '[Deskripsi singkat mengenai layanan kedua, metodologi kerja, dan jaminan penyelesaian tepat waktu].',
    features: [
      '[Cakupan layanan 1: Tata kelola terstruktur]',
      '[Cakupan layanan 2: Efisiensi sumber daya]',
      '[Cakupan layanan 3: Laporan kemajuan transparan]',
    ],
  },
  {
    id: 'layanan-3',
    icon: <Cog className="w-6 h-6" aria-hidden="true" />,
    title: '[Layanan Utama 3: Pemeliharaan & Dukungan Teknis]',
    description: '[Deskripsi singkat mengenai layanan ketiga, ketersediaan tim pendukung, dan komitmen layanan purnajual].',
    features: [
      '[Cakupan layanan 1: Pemantauan kinerja berkala]',
      '[Cakupan layanan 2: Respons cepat kendala teknis]',
      '[Cakupan layanan 3: Peningkatan berkelanjutan]',
    ],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section section-wrapper" aria-labelledby="services-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-bold text-[#051336] tracking-tight mb-4"
          >
            Layanan Kami
          </h2>
          <p className="text-[#43474d] text-base sm:text-lg">
            Rangkaian layanan komprehensif yang dirancang untuk mendukung kelancaran dan perkembangan operasional organisasi Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#051336] mb-3">
                {service.title}
              </h3>
              <p className="text-[#43474d] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="mt-auto space-y-2 border-t border-[rgba(126,129,133,0.2)] pt-4" aria-label={`Fitur ${service.title}`}>
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#43474d]">
                    <CheckCircle2 className="w-4 h-4 text-[#005B9E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
