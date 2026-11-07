import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function CompanyIntro() {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-20 lg:py-38 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent skew-x-12 translate-x-20 z-0 opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h1 className="font-extrabold text-heading leading-[1.15] text-1xl sm:text-1xl md:text-3xl">
                {t('home.companyIntro.pioneering')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                  {t('home.companyIntro.pharmaceuticals')}
                </span>
              </h1>
            </div>

            <p className="text-body leading-relaxed font-sm text-md sm:text-md">
              {t('home.companyIntro.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-4">
              {t('home.companyIntro.points', { returnObjects: true }).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#084553] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <FiCheckCircle className="text-white group-hover:text-white transition-colors duration-300 w-4 h-4" />
                  </div>
                  <span className="text-body font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="">
              <a href="/about" className="group inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors text-base sm:text-lg">
                {t('home.companyIntro.readOurStory')}
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image container with premium styling */}
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/hero/pharma_hero_lab.png')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            </div>

            {/* Decorative dots behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,theme(colors.blue.400)_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,theme(colors.cyan.400)_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
