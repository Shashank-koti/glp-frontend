import { motion } from 'framer-motion';
import { FiCheckCircle, FiFileText, FiAward, FiGlobe } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { TbTestPipe, TbAtom } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

export default function OurLegacy() {
  const { t } = useTranslation();

  const analyticalMethods = [
    'HPLC & UPLC',
    'GC & GC-MS',
    'LC-MS/MS / Mass Spec',
    '1H NMR Spectroscopy',
    '13C NMR Spectroscopy',
    '2D NMR (COSY / HMBC)',
    'FT-IR Spectroscopy',
    'CHNS Elemental Analysis',
    'TGA & Moisture Analysis',
    'X-Ray Diffraction (XRD)',
    'Structure Elucidation (SER)'
  ];

  return (
    <section className="py-14 sm:py-24 bg-white relative overflow-hidden border-t border-[#EAF2F4]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-[#EAF2F4] group">
              <img
                src="/images/about_legacy_research.png"
                alt="GLP Pharma Standards Scientific Research"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031525]/70 via-transparent to-transparent"></div>

              {/* Floating Badge (Est. 2015) */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white max-w-xs">
                <div className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#084553] to-[#1AA3B6] text-3xl sm:text-4xl leading-none">
                  2015
                </div>
                <div className="text-[#084553] font-extrabold uppercase tracking-wider text-xs mt-1">
                  Founded in Hyderabad, India
                </div>
                <p className="text-[11px] text-[#5B7280] font-medium mt-1">
                  Serving API manufacturers, CROs & analytical testing labs globally.
                </p>
              </div>
            </div>

            {/* Background blur blobs */}
            <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-[#1AA3B6]/10 rounded-full blur-[60px] -z-10 pointer-events-none"></div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#084553]/10 rounded-full blur-[50px] -z-10 pointer-events-none"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h2 className="font-extrabold text-[#084553] leading-tight text-1xl sm:text-2xl md:text-3xl tracking-tight">
                Advancing Pharmaceutical Research Through &nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] to-[#0B7285]">
                  Precision, Purity and Integrity
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#5B7280] font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Established in 2015 and headquartered in Hyderabad, India, <strong>GLP Pharma Standards</strong> is a research-based manufacturer and supplier of pharmaceutical impurity standards, analytical reference materials and advanced research compounds for the global pharmaceutical industry.
              </p>
              <p>
                We support pharmaceutical API manufacturers, formulation companies, contract research organizations (CROs), research institutions and analytical testing laboratories with high-purity compounds and scientifically characterized materials essential for pharmaceutical research, impurity profiling, analytical method development, method validation and quality control.
              </p>
              <p>
                Our products are manufactured under strict quality control to meet the highest standards of purity and accuracy. We offer our products in custom pack sizes and competitive prices to suit global pharmaceutical needs. Our extensive portfolio comprises <strong>20,000+ API impurities and reference standards</strong>, along with <strong>5,000+ intermediate impurities</strong> and analytical-grade substances.
              </p>
            </div>

            {/* Characterization Data Showcase */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <FaFlask className="text-[#1AA3B6]" size={16} />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#084553]">
                  Comprehensive CoA & Analytical Characterization:
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {analyticalMethods.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FBFC] border border-[#EAF2F4] text-[11px] sm:text-xs font-semibold text-[#084553] shadow-3xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1AA3B6]"></span>
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
