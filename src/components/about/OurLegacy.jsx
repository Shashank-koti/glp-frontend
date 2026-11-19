import { motion } from 'framer-motion';
import { FaFlask } from 'react-icons/fa';
import { FiAward, FiGlobe, FiLayers, FiCpu, FiCheckCircle, FiShield } from 'react-icons/fi';

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

  const highlights = [
    { value: '20,000+', label: 'API Impurities & Standards' },
    { value: '5,000+', label: 'Intermediates & Substances' },
    { value: '1,100+', label: 'Global Clients' },
    { value: '50+', label: 'Countries Served' },
    { value: 'ISO 9001 & 17034', label: 'Certified Quality' },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden border-t border-[#EAF2F4]">
      {/* Full-width container using the whole screen with responsive padding */}
      <div className="w-full max-w-[1600px] xl:w-[96%] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="bg-white/95 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-[#E2EEF1] p-4 sm:p-7 lg:p-9 shadow-[0_4px_30px_rgba(8,69,83,0.05)] relative"
        >
          {/* Top Header & Executive Lead Statement */}
          <div className="mb-6 sm:mb-7">

            <h2 className="font-extrabold text-[#084553] leading-tight text-2xl sm:text-3xl lg:text-[1.75rem] tracking-tight mb-6">
              Advancing Pharmaceutical Research Through &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#0B7285] to-[#084553]">
                Precision, Purity & Integrity
              </span>
            </h2>

            {/* 2-Column Lead Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 text-slate-700 text-sm sm:text-[15px] leading-relaxed pb-5 border-b border-[#EAF2F4]">
              <p className="font-medium text-slate-800">
                Established in 2015 and headquartered in Hyderabad, India, <strong>GLP Pharma Standards</strong> is a research-based manufacturer and supplier of high-quality API impurities, pharmaceutical reference standards, analytical reference materials and advanced research compounds for the global pharmaceutical industry.
              </p>
              <p>
                With a strong foundation in synthetic organic chemistry and analytical characterization, GLP Pharma Standards supports API manufacturers, pharmaceutical formulation companies, Contract Research Organizations (CROs), research institutions and analytical laboratories worldwide in impurity profiling, analytical method development, method validation, stability studies and quality control.
              </p>
            </div>
          </div>

          {/* Balanced 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

            {/* Left Column: Portfolio & Scientific Expertise */}
            <div className="lg:col-span-7 flex flex-col gap-5">

              {/* Card 1: Extensive Portfolio */}
              <div className="flex-1 bg-gradient-to-br from-white to-[#F8FBFC] rounded-2xl border border-[#E2EEF1] p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3 mb-3.5 pb-2.5 border-b border-[#EAF2F4]">
                  <div className="w-8 h-8 rounded-lg bg-[#1AA3B6]/10 text-[#1AA3B6] flex items-center justify-center shrink-0">
                    <FiLayers size={17} />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#084553] tracking-tight leading-snug">
                    Extensive Portfolio of Pharmaceutical Impurities & Reference Standards
                  </h3>
                </div>

                <div className="space-y-2.5 text-slate-700 text-sm sm:text-[14.5px] leading-relaxed">
                  <p>
                    GLP Pharma Standards specializes in <strong>pharmacopeial and non-pharmacopeial API impurities and pharmaceutical reference standards</strong>, including impurities listed in the United States Pharmacopeia (USP), European Pharmacopoeia (EP), British Pharmacopoeia (BP), Japanese Pharmacopoeia (JP) and Indian Pharmacopoeia (IP).
                  </p>
                  <p>
                    Our extensive portfolio comprises <strong>20,000+ API Impurities and Reference Standards</strong> and <strong>5,000+ Intermediate Impurities and Analytical-Grade Substances</strong>, covering process-related impurities, degradation impurities, API-related compounds, characterized unknown impurities, pharmaceutical working standards and secondary reference standards.
                  </p>
                  <p>
                    Our offerings also extend to nitrosamine impurities, stable isotope-labelled compounds, peptides, drug metabolites, complex intermediates and custom-synthesized molecules, addressing diverse pharmaceutical research and analytical requirements.
                  </p>
                </div>
              </div>

              {/* Card 2: Scientific Expertise */}
              <div className="flex-1 bg-gradient-to-br from-white to-[#F8FBFC] rounded-2xl border border-[#E2EEF1] p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3 mb-3.5 pb-2.5 border-b border-[#EAF2F4]">
                  <div className="w-8 h-8 rounded-lg bg-[#084553]/10 text-[#084553] flex items-center justify-center shrink-0">
                    <FiCpu size={17} />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#084553] tracking-tight leading-snug">
                    Scientific Expertise Beyond Reference Standards
                  </h3>
                </div>

                <div className="space-y-2.5 text-slate-700 text-sm sm:text-[14.5px] leading-relaxed">
                  <p>
                    At GLP Pharma Standards, we understand that pharmaceutical research often requires more than commercially available reference materials. Complex impurities, challenging molecular structures and unknown degradation products demand specialized scientific expertise and innovative synthetic approaches.
                  </p>
                  <p>
                    Our capabilities extend to <strong>custom synthesis, complex chiral chemistry, isolation and characterization of unknown impurities, structure elucidation, nitrosamine-related investigations and specialized contract research projects</strong>.
                  </p>
                  <p>
                    By combining synthetic chemistry expertise with analytical research capabilities, GLP Pharma Standards helps customers investigate challenging compounds and develop practical solutions for their research requirements.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Quality Documentation & CoA Characterization Hub */}
            <div className="lg:col-span-5 flex flex-col gap-5">

              {/* Card 3: Quality, Analytical Excellence & Documentation */}
              <div className="bg-gradient-to-br from-white to-[#F8FBFC] rounded-2xl border border-[#E2EEF1] p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-3 mb-3.5 pb-2.5 border-b border-[#EAF2F4]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <FiShield size={17} />
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#084553] tracking-tight leading-snug">
                    Quality, Analytical Excellence & Documentation
                  </h3>
                </div>

                <div className="space-y-2.5 text-slate-700 text-sm sm:text-[14px] leading-relaxed">
                  <p>
                    GLP Pharma Standards is an <strong>ISO 9001:2015 and ISO 17034:2016 certified company</strong>, with a strong emphasis on purity, structural confirmation, analytical characterization and comprehensive documentation.
                  </p>
                  <p>
                    We recognize that reliable analytical results begin with accurately identified and characterized reference materials. Our approach focuses on scientific precision, appropriate quality controls and reliable analytical evidence to support the intended applications of our compounds.
                  </p>
                  <p>
                    Depending on the product and analytical requirements, our materials are supplied with Certificates of Analysis (CoAs) supported by relevant analytical data, including ¹H NMR, FT-IR, HPLC/GC, Mass, Potency by TGA/MC, and additional data like ¹³C NMR, 2D NMR, LC-MS, CHNS, XRD, etc. We also provide detailed <strong>Structure Elucidation Reports (SER)</strong> for selected compounds requiring additional structural confirmation.
                  </p>
                </div>
              </div>

              {/* Card 4: Our Comprehensive CoA & Analytical Characterization (KEPT AS IS) */}
              <div className="rounded-2xl border border-[#E2EEF1] bg-[#F8FBFC] p-4 sm:p-5 shadow-xs">
                <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-[#EAF2F4]">
                  <div className="w-7 h-7 rounded-lg bg-[#084553]/10 flex items-center justify-center text-[#084553] shrink-0">
                    <FaFlask size={14} />
                  </div>
                  <h4 className="text-xs sm:text-[12.5px] font-extrabold uppercase tracking-wider text-[#084553] leading-snug">
                    Our Comprehensive CoA & Analytical Characterization:
                  </h4>
                </div>

                {/* 2-Column Grid of Analytical Methods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {analyticalMethods.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#E2EEF1] text-[12px] font-semibold text-[#084553] shadow-2xs hover:border-[#1AA3B6]/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1AA3B6] shrink-0"></span>
                      <span className="truncate">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Full-Width Executive Card: Trusted by the Global Pharmaceutical Industry */}
          <div className="mt-5 sm:mt-6 pt-5 border-t border-[#EAF2F4]">
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-r from-[#F0F9FA] via-[#F8FBFC] to-white border border-[#D9EBF0] border-l-4 border-l-[#1AA3B6] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-2.5 border-b border-[#E2EEF1]/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#084553] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FiGlobe size={16} />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#084553] tracking-tight">
                    Trusted by the Global Pharmaceutical Industry
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5 text-slate-700 text-sm sm:text-[14.5px] leading-relaxed">
                <p>
                  With <strong>1,100+ customers across more than 50 countries</strong>, GLP Pharma Standards has established a growing international presence by supplying specialized pharmaceutical impurities, reference standards and research compounds.
                </p>
                <p>
                  Our commitment extends beyond product supply. We emphasize responsive technical support, transparent communication, flexible customer-specific solutions and long-term professional relationships.
                </p>
                <p className="text-[#084553] font-semibold pt-2 border-t border-[#E2EEF1]/70">
                  At GLP Pharma Standards, we believe that every high-quality reference standard contributes to reliable pharmaceutical research. Through scientific precision, purity and integrity, we strive to support pharmaceutical innovation and help build a healthier world.
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
