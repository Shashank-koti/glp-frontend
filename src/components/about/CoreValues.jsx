import { motion } from 'framer-motion';
import { FiCrosshair, FiDroplet, FiShield, FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.5 }
  },
};

export default function CoreValues() {
  const { t } = useTranslation();

  const values = [
    {
      icon: FiCrosshair,
      title: t('about.values.v1Title', 'Precision'),
      desc: t('about.values.v1Desc', 'Maintaining scientific accuracy in every compound identification, synthesis, characterization and documentation.'),
      tag: 'Scientific Accuracy',
      accentColor: 'from-[#1AA3B6] to-[#084553]',
      iconBg: 'bg-[#1AA3B6]/10 text-[#1AA3B6] border-[#1AA3B6]/30',
      badgeBg: 'bg-[#1AA3B6]/10 text-[#1AA3B6]'
    },
    {
      icon: FiDroplet,
      title: t('about.values.v2Title', 'Purity'),
      desc: t('about.values.v2Desc', 'Striving to deliver high-purity research materials suitable for their intended R&D and analytical applications.'),
      tag: 'Analytical Quality',
      accentColor: 'from-[#0B7285] to-[#12344D]',
      iconBg: 'bg-[#0B7285]/10 text-[#0B7285] border-[#0B7285]/30',
      badgeBg: 'bg-[#0B7285]/10 text-[#0B7285]'
    },
    {
      icon: FiShield,
      title: t('about.values.v3Title', 'Integrity'),
      desc: t('about.values.v3Desc', 'Building lasting customer confidence through transparent communication, responsible business practices and reliable technical support.'),
      tag: 'Transparency & Trust',
      accentColor: 'from-[#12344D] to-[#084553]',
      iconBg: 'bg-[#12344D]/10 text-[#12344D] border-[#12344D]/30',
      badgeBg: 'bg-[#12344D]/10 text-[#12344D]'
    },
    {
      icon: FiTrendingUp,
      title: t('about.values.v4Title', 'Scientific Excellence'),
      desc: t('about.values.v4Desc', 'Adapting to changing regulations, customer demands and technological innovations that challenge the pharma industry.'),
      tag: 'Innovation',
      accentColor: 'from-[#084553] to-[#1AA3B6]',
      iconBg: 'bg-[#084553]/10 text-[#084553] border-[#084553]/30',
      badgeBg: 'bg-[#084553]/10 text-[#084553]'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#F8FBFC] relative overflow-hidden border-t border-border/50">
      {/* Subtle Scientific Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1AA3B6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="font-extrabold text-[#12344D] mb-4 text-2xl sm:text-3xl md:text-4xl tracking-tight">
              {t('about.values.title')}
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "tween", duration: 0.25 }}
                className="group relative h-full flex flex-col"
              >
                <div className="relative bg-white p-7 sm:p-8 rounded-2xl h-full border border-border/80 group-hover:border-primary/50 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_16px_36px_rgba(26,163,182,0.12)] flex flex-col justify-between">
                  <div>
                    {/* Top Row: Icon + Value Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${val.iconBg} transition-all duration-300 group-hover:scale-105 shadow-sm`}>
                        <Icon className="text-2xl" />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${val.badgeBg}`}>
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-[#12344D] mb-3 text-xl group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-body leading-relaxed text-sm sm:text-[14.5px] font-normal">
                      {val.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">Value {idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
