import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiFileText,
  FiCpu,
  FiHeadphones,
  FiGlobe,
  FiAward
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4 }
  },
};

export default function GlobalInfrastructure() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: FiClock,
      title: "11+ Years Synthesis Experience",
      desc: "Proven track record in synthesizing, isolating, and supplying pharmaceutical impurity reference standards.",
      highlight: "11+ Years"
    },
    {
      icon: FiPackage,
      title: "20,000+ Standards in Ready Stock",
      desc: "Extensive inventory of API impurities and pharmaceutical reference materials maintained for immediate dispatch worldwide.",
      highlight: "20,000+ Stock"
    },
    {
      icon: FiAward,
      title: "Specialized Nitrosamine & Custom Capabilities",
      desc: "Dedicated expertise in nitrosamines (NDSRIs), peptides, stable isotopes, and challenging multi-step custom synthesis.",
      highlight: "NDSRI & Custom"
    },
    {
      icon: FiFileText,
      title: "Comprehensive Analytical Characterization",
      desc: "Complete documentation including CoA and Structure Elucidation Reports (SER) backed by HPLC, GC, LC-MS/MS, 1H/13C NMR, and XRD.",
      highlight: "CoA & SER"
    },
    {
      icon: FiCpu,
      title: "Isolation & Unknown Impurity Elucidation",
      desc: "Specialized isolation and analytical elucidation of complex degradation products and process-related unknowns.",
      highlight: "Structure Elucidation"
    },
    {
      icon: FiHeadphones,
      title: "Responsive Technical Support",
      desc: "Prompt and dedicated support from experienced doctoral scientists and analytical chemists for every client inquiry.",
      highlight: "Rapid Turnaround"
    },
    {
      icon: FiGlobe,
      title: "Global Reach Across 50+ Countries",
      desc: "Supplying export-compliant reference materials to 1,100+ pharmaceutical manufacturers and CROs across 6 continents.",
      highlight: "50+ Countries"
    }
  ];

  const stats = [
    { number: "11+", label: "Years Experience", sub: "Since 2015" },
    { number: "20K+", label: "Ready Stock Standards", sub: "Immediate Dispatch" },
    { number: "1,100+", label: "Global Clients", sub: "Pharma, Biotech & CROs" },
    { number: "50+", label: "Countries Served", sub: "Across 6 Continents" }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden border-t border-[#EAF2F4]">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1500px] xl:w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5">
            <FiAward className="text-sm" />
            Key Advantages
          </div>
          <h2 className="font-extrabold text-[#12344D] text-2xl sm:text-3xl md:text-[2rem] tracking-tight mb-2.5">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#084553]">GLP Pharma Standards?</span>
          </h2>
          <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
            Our commitment to scientific accuracy, comprehensive analytical characterization and responsive technical support has helped us earn the trust of over 1,100 clients across more than 50 countries.
          </p>
        </div>

        {/* Top 4 Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-7 sm:mb-9">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="bg-gradient-to-br from-[#F8FBFC] to-white border border-[#E2E8F0] p-3 rounded-xl text-center shadow-xs hover:shadow-sm hover:border-primary/40 transition-all duration-300"
            >
              <div className="font-black text-transparent bg-clip-text bg-gradient-to-br from-[#1AA3B6] to-[#084553] text-xl sm:text-2xl lg:text-[28px] mb-0.5">
                {stat.number}
              </div>
              <div className="text-[#12344D] font-bold text-xs sm:text-sm leading-tight">
                {stat.label}
              </div>
              <div className="text-slate-500 text-[11px] sm:text-xs mt-0.5 font-medium">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-[#F8FBFC] hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] hover:border-primary/40 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="text-lg" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full">
                      {adv.highlight}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#12344D] text-lg mb-2 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
