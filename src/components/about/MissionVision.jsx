import { motion } from 'framer-motion';
import { FiTarget, FiCompass, FiAward, FiShield } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden border-t border-[#EAF2F4]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#1AA3B6]/5 to-[#084553]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="group relative bg-gradient-to-br from-[#F8FBFC] to-white rounded-3xl p-8 sm:p-10 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_45px_rgba(8,69,83,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#084553] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <FiTarget size={28} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1AA3B6]">
                  Purpose & Commitment
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#084553] tracking-tight">
                  {t('about.mission.title', 'Our Mission')}
                </h3>
              </div>
            </div>

            <p className="text-[#5B7280] leading-relaxed text-base sm:text-md font-sm">
              {t(
                'about.mission.desc',
                'To support pharmaceutical research and analytical excellence by providing high-quality impurity standards, accurately characterized reference materials and customized chemical research solutions with integrity, reliability and scientific precision.'
              )}
            </p>

            <div className="mt-3 pt-2 border-t border-[#EAF2F4] flex items-center gap-2 text-xs font-bold text-[#084553]">
              <FiShield className="text-[#1AA3B6]" size={16} />
              <span>Scientific Precision • Complete Transparency • Uncompromising Quality</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative bg-gradient-to-br from-[#F8FBFC] to-white rounded-3xl p-8 sm:p-10 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_45px_rgba(8,69,83,0.1)] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1AA3B6] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <FiCompass size={28} />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#084553]">
                  Long-Term Horizon
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#084553] tracking-tight">
                  {t('about.vision.title', 'Our Vision')}
                </h3>
              </div>
            </div>

            <p className="text-[#5B7280] leading-relaxed text-base sm:text-md font-sm">
              {t(
                'about.vision.desc',
                'To become a globally preferred partner for pharmaceutical impurity standards, advanced research compounds and specialized chemical synthesis through continuous innovation, technical expertise and customer-focused service.'
              )}
            </p>

            <div className="mt-3 pt-2 border-t border-[#EAF2F4] flex items-center gap-2 text-xs font-bold text-[#084553]">
              <FiAward className="text-[#1AA3B6]" size={16} />
              <span>Global Reach (50+ Countries) • 20,000+ Standards • Trusted Partner</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
