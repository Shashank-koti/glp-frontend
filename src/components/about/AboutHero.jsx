import { motion } from 'framer-motion';
import { FiActivity, FiGlobe, FiAward } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5 }
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-8da sm:pt-12 pb-3 sm:pb-5 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Stunning Visual Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "tween" }}
          className="mt-1 sm:mt-2 relative mx-auto max-w-5xl"
        >
          {/* Main Wide Image */}
          <div className="aspect-[16/9] md:aspect-[2.5/1] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(26,163,182,0.12)] relative border border-border group">
            <img
              src="/images/about_hero_lab.png"
              alt="Advanced Pharmaceutical Laboratory"
              className="w-full h-full object-cover transform"
            />
            {/* Subtle inner overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent mix-blend-multiply"></div>
          </div>

          {/* Floating Glassmorphic Card - Left (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, type: "tween" }}
            className="hidden md:block absolute -left-6 lg:-left-10 bottom-6 lg:bottom-8 bg-white/95 backdrop-blur-xl p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-xl border border-white max-w-[240px] lg:max-w-[260px] transform hover:-translate-y-1 transition-transform duration-300 z-20"
          >
            <motion.div variants={floatVariants} initial="initial" animate="animate">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#084553] flex items-center justify-center mb-3 text-white">
                <FiGlobe className="text-lg lg:text-xl" />
              </div>
              <div className="font-black text-heading mb-1 text-2xl lg:text-3xl">{t('about.hero.card1Val')}</div>
              <div className="text-slate-700 font-medium leading-tight text-xs lg:text-sm">{t('about.hero.card1Text')}</div>
            </motion.div>
          </motion.div>

          {/* Floating Glassmorphic Card - Right (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
            className="hidden md:block absolute -right-6 lg:-right-10 top-6 lg:top-8 bg-white/95 backdrop-blur-xl p-5 lg:p-6 rounded-2xl lg:rounded-3xl shadow-xl border border-white max-w-[240px] lg:max-w-[260px] transform hover:-translate-y-1 transition-transform duration-300 z-20"
          >
            <motion.div variants={floatVariants} initial="initial" animate="animate" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 text-accent">
                <FiActivity className="text-lg lg:text-xl" />
              </div>
              <div className="font-black text-heading mb-1 text-2xl lg:text-3xl">{t('about.hero.card2Val')}</div>
              <div className="text-slate-700 font-medium leading-tight text-xs lg:text-sm">{t('about.hero.card2Text')}</div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Mobile Stats Cards (Hidden on Desktop) */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-5 md:hidden">
          <div className="bg-white/90 p-4 rounded-xl shadow-md border border-[#EAF2F4] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#084553] flex items-center justify-center text-white shrink-0">
              <FiGlobe className="text-lg" />
            </div>
            <div>
              <div className="font-black text-heading text-lg">{t('about.hero.card1Val')}</div>
              <div className="text-slate-700 font-medium text-[12px]">{t('about.hero.card1Text')}</div>
            </div>
          </div>
          <div className="bg-white/90 p-4 rounded-xl shadow-md border border-[#EAF2F4] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <FiActivity className="text-lg" />
            </div>
            <div>
              <div className="font-black text-heading text-lg">{t('about.hero.card2Val')}</div>
              <div className="text-slate-700 font-medium text-[12px]">{t('about.hero.card2Text')}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}



