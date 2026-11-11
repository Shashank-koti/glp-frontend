import { motion } from 'framer-motion';
import { FaFlask } from 'react-icons/fa';

export default function OurLegacy() {
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
    <section className="bg-gradient-to-b from-white via-[#F8FBFC] to-white relative overflow-hidden border-t border-[#EAF2F4]">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-[#E2EEF1] p-6 sm:p-10 lg:p-12 shadow-[0_4px_25px_-5px_rgba(8,69,83,0.06)] space-y-7 relative"
        >

          {/* Heading */}
          <div>
            <h2 className="font-extrabold text-[#084553] leading-tight text-2xl sm:text-3xl md:text-[2rem] tracking-tight">
              Advancing Pharmaceutical Research Through &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] to-[#0B7285]">
                Precision, Purity and Integrity
              </span>
            </h2>
          </div>

          {/* Primary Text Content */}
          <div className="space-y-4 text-slate-700 font-normal text-sm sm:text-[15px] leading-relaxed">
            <p>
              Established in 2015 and headquartered in Hyderabad, India, <strong>GLP Pharma Standards</strong> is a research-based manufacturer and supplier of pharmaceutical impurity standards, analytical reference materials and advanced research compounds for the global pharmaceutical industry.
            </p>
            <p>
              We support pharmaceutical API manufacturers, formulation companies, contract research organizations (CROs), research institutions and analytical testing laboratories with high-purity compounds and scientifically characterized materials essential for pharmaceutical research, impurity profiling, analytical method development, method validation and quality control.
            </p>
            <p>
              Our products are manufactured under strict quality control to meet the highest standards of purity and accuracy. We offer our products in custom pack sizes and competitive prices to suit global pharmaceutical needs. Our extensive portfolio comprises <strong>20,000+ API impurities and reference standards</strong>, along with <strong>5,000+ intermediate impurities</strong> and analytical-grade substances.
            </p>
            <p>
              Our capabilities extend to nitrosamine impurities, pharmaceutical working standards, secondary standards, isotope-labelled compounds, peptides, metabolites, complex intermediates and custom-synthesized molecules.
            </p>
          </div>

          {/* Quality & Identity Focus Highlight */}
          <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#F0F9FA] via-[#F8FBFC] to-white border-l-4 border-[#1AA3B6] shadow-xs">
            <p className="text-slate-800 text-sm sm:text-[15px] leading-relaxed font-medium">
              At GLP Pharma Standards, we recognize that reliable analytical results begin with the quality and identity of the reference materials used. We therefore emphasize compound purity, structural confirmation, analytical characterization and transparent documentation.
            </p>
          </div>

          {/* Characterization Data Showcase */}
          <div className="pt-2 border-t border-[#EAF2F4]/80">
            <div className="flex items-center gap-2 mb-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#084553]">
                Our Comprehensive CoA & Analytical Characterization:
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {analyticalMethods.map((m, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FBFC] border border-[#E2EEF1] text-xs font-semibold text-[#084553] shadow-2xs hover:border-[#1AA3B6]/50 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1AA3B6]"></span>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
