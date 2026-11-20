import { motion } from 'framer-motion';
import { FiGlobe, FiActivity, FiLayers, FiCpu, FiShield } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function AboutHero() {
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
    <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-12 bg-white overflow-hidden">
      {/* Full-width container using screen width with responsive horizontal padding */}
      <div className="w-full max-w-[1550px] xl:w-[96%] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">

        {/* 1. Hero Visual Banner with Integrated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative mx-auto max-w-4xl lg:max-w-5xl mb-5 sm:mb-7"
        >
          {/* Main Wide Image */}
          <div className="aspect-[16/8] md:aspect-[2.8/1] rounded-2xl sm:rounded-3xl overflow-hidden relative border border-[#E2EEF1] group mt-6">
            <img
              src="/images/about_hero_lab.png"
              alt="Advanced Pharmaceutical Laboratory"
              className="w-full h-full object-cover"
            />
            {/* Subtle inner overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#084553]/40 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* Floating Badge - Left (Desktop) */}
          <div className="hidden md:block absolute -left-4 lg:-left-6 bottom-4 lg:bottom-6 bg-white/95 backdrop-blur-md p-3.5 lg:p-4 rounded-xl lg:rounded-2xl border border-[#E2EEF1] max-w-[220px] z-20">
            <div className="w-9 h-9 rounded-full bg-[#084553] flex items-center justify-center mb-2 text-white">
              <FiGlobe className="text-base lg:text-lg" />
            </div>
            <div className="font-black text-[#084553] text-xl lg:text-2xl leading-tight">{t('about.hero.card1Val')}</div>
            <div className="text-slate-700 font-medium leading-tight text-xs">{t('about.hero.card1Text')}</div>
          </div>

          {/* Floating Badge - Right (Desktop) */}
          <div className="hidden md:block absolute -right-4 lg:-right-6 top-4 lg:top-6 bg-white/95 backdrop-blur-md p-3.5 lg:p-4 rounded-xl lg:rounded-2xl border border-[#E2EEF1] max-w-[220px] z-20">
            <div className="w-9 h-9 rounded-full bg-[#1AA3B6]/15 flex items-center justify-center mb-2 text-[#0B7285]">
              <FiActivity className="text-base lg:text-lg" />
            </div>
            <div className="font-black text-[#084553] text-xl lg:text-2xl leading-tight">{t('about.hero.card2Val')}</div>
            <div className="text-slate-700 font-medium leading-tight text-xs">{t('about.hero.card2Text')}</div>
          </div>

          {/* Mobile Stats (Below Image) */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-3 md:hidden">
            <div className="bg-white p-3 rounded-xl border border-[#E2EEF1] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#084553] flex items-center justify-center text-white shrink-0">
                <FiGlobe className="text-base" />
              </div>
              <div>
                <div className="font-black text-[#084553] text-base">{t('about.hero.card1Val')}</div>
                <div className="text-slate-700 font-medium text-xs">{t('about.hero.card1Text')}</div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-[#E2EEF1] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1AA3B6]/15 flex items-center justify-center text-[#0B7285] shrink-0">
                <FiActivity className="text-base" />
              </div>
              <div>
                <div className="font-black text-[#084553] text-base">{t('about.hero.card2Val')}</div>
                <div className="text-slate-700 font-medium text-xs">{t('about.hero.card2Text')}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Executive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-2 sm:mb-3"
        >
          <h1 className="font-extrabold text-[#084553] text-lg sm:text-xl lg:text-2xl tracking-tight leading-tight ">
            Advancing Pharmaceutical Research Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] via-[#0B7285] to-[#084553]">
              Precision, Purity & Integrity
            </span>
          </h1>
        </motion.div>

        {/* 3. Full-Width Text Flow (Reduced gaps & removed step badges) */}
        <div className="w-full space-y-4 sm:space-y-5">

          {/* Overview & Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pb-4 sm:pb-5 border-b border-[#EAF2F4]"
          >
            <div className="space-y-2 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
              <p className="font-medium text-slate-800">
                Established in 2015 and headquartered in Hyderabad, India, <strong>GLP Pharma Standards</strong> is a research-based manufacturer and supplier of high-quality API impurities, pharmaceutical reference standards, analytical reference materials and advanced research compounds for the global pharmaceutical industry.
              </p>
              <p>
                With a strong foundation in synthetic organic chemistry and analytical characterization, GLP Pharma Standards supports API manufacturers, pharmaceutical formulation companies, Contract Research Organizations (CROs), research institutions and analytical laboratories worldwide in impurity profiling, analytical method development, method validation, stability studies and quality control.
              </p>
            </div>
          </motion.div>

          {/* Extensive Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pb-4 sm:pb-5 border-b border-[#EAF2F4]"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#1AA3B6]/10 text-[#1AA3B6] flex items-center justify-center shrink-0">
                <FiLayers size={16} />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#084553] tracking-tight">
                Extensive Portfolio of Pharmaceutical Impurities & Reference Standards
              </h2>
            </div>
            <div className="space-y-2 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
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
          </motion.div>

          {/* Scientific Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pb-4 sm:pb-5 border-b border-[#EAF2F4]"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#084553]/10 text-[#084553] flex items-center justify-center shrink-0">
                <FiCpu size={16} />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#084553] tracking-tight">
                Scientific Expertise Beyond Reference Standards
              </h2>
            </div>
            <div className="space-y-2 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
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
          </motion.div>

          {/* Quality, Analytical Excellence & Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pb-4 sm:pb-5 border-b border-[#EAF2F4]"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <FiShield size={16} />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#084553] tracking-tight">
                Quality, Analytical Excellence & Documentation
              </h2>
            </div>
            <div className="space-y-2 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
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
          </motion.div>

          {/* Our Comprehensive CoA & Analytical Characterization */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pb-4 sm:pb-5 border-b border-[#EAF2F4]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#084553]/10 flex items-center justify-center text-[#084553] shrink-0">
                <FaFlask size={14} />
              </div>
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#084553]">
                Our Comprehensive CoA & Analytical Characterization:
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
              {analyticalMethods.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8FBFC] border border-[#E2EEF1] text-xs sm:text-[12.5px] font-semibold text-[#084553]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1AA3B6] shrink-0"></span>
                  <span className="truncate">{m}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trusted by the Global Pharmaceutical Industry */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="pt-1"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#084553] text-white flex items-center justify-center shrink-0">
                <FiGlobe size={15} />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#084553] tracking-tight">
                Trusted by the Global Pharmaceutical Industry
              </h2>
            </div>
            <div className="space-y-2 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
              <p>
                With <strong>1,100+ customers across more than 50 countries</strong>, GLP Pharma Standards has established a growing international presence by supplying specialized pharmaceutical impurities, reference standards and research compounds.
              </p>
              <p>
                Our commitment extends beyond product supply. We emphasize responsive technical support, transparent communication, flexible customer-specific solutions and long-term professional relationships.
              </p>
              <p className="text-[#084553] font-semibold pt-1">
                At GLP Pharma Standards, we believe that every high-quality reference standard contributes to reliable pharmaceutical research. Through scientific precision, purity and integrity, we strive to support pharmaceutical innovation and help build a healthier world.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
