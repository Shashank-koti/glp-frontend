import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function CompanyIntro() {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden mt-16">
      {/* Decorative background elements */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent skew-x-12 translate-x-20 z-0 opacity-70 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >

            {/* Heading */}
            <div>
              <h2 className="font-extrabold text-heading  text-xl sm:text-2xl md:text-3xl">
                {t('home.companyIntro.title', 'Your Trusted Source for')}{' '}
              </h2>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-3.5 text-slate-700 sm:space-y-4  leading-relaxed text-[15px] sm:text-[16px]">
              <p>
                {t('home.companyIntro.p1', 'GLP Pharma Standards, based in Hyderabad, India, is a specialized manufacturer and supplier of high-quality API impurities, pharmaceutical reference standards, working standards, secondary standards and nitrosamine impurities.')}
              </p>
              <p>
                {t('home.companyIntro.p2', 'Our comprehensive product portfolio also includes peptides, drug metabolites, stable isotope labelled compounds, catalysts, pharmaceutical intermediates and custom-synthesized molecules.')}
              </p>
              <p>
                {t('home.companyIntro.p3', 'We support global drug manufacturers in releasing safer, purer, and fully compliant products, with impurity standards they can trust for regulatory filings, which will help the world become healthier.')}
              </p>
              <p>
                {t('home.companyIntro.p4', 'At GLP Pharma Standards, we excel at adapting to the changing regulations, customer demands and technological innovations that challenge the pharma industry.')}
              </p>
            </div>

            <div className="pt-1">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors text-base sm:text-lg"
              >
                {t('home.companyIntro.readOurStory', 'Read Our Full Story')}
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Main Image container with compact, sleek styling */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('/images/hero/pharma_hero_lab.png')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
