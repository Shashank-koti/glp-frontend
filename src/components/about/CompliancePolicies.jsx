import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiCheckCircle, FiLock, FiFileText } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function CompliancePolicies() {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white relative overflow-hidden border-t border-[#EAF2F4]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#084553]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="w-full max-w-[1500px] xl:w-[96%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#084553]/10 border border-[#084553]/20 text-[#084553] text-xs font-bold uppercase tracking-wider mb-2.5">
            <FiShield className="text-sm" />
            {t('about.policies.badge', 'Compliance & Regulations')}
          </div>
          <h2 className="font-extrabold text-[#12344D] text-2xl sm:text-3xl md:text-[2rem] tracking-tight mb-2.5">
            {t('about.policies.title', 'Regulatory Compliance & Usage Policies')}
          </h2>
          <p className="text-slate-700 font-sm text-sm sm:text-[15px] leading-relaxed">
            {t('about.policies.desc', 'GLP Pharma Standards adheres to rigorous international quality, ethical, and legal frameworks across all compound synthesis, characterization, and distribution workflows.')}
          </p>
        </div>

        {/* Two Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">

          {/* Card 1: Research & Analytical Use Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#F8FBFC] to-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_40px_rgba(26,163,182,0.08)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <FiAlertTriangle className="text-xl" />
                </div>
                <h3 className="font-extrabold text-[#12344D] text-lg sm:text-xl mb-3">
                  {t('about.policies.researchTitle', 'Research & Analytical Use Only')}
                </h3>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-[14.5px] font-normal mb-4">
                {t('about.policies.researchDesc', 'All products supplied by GLP Pharma Standards are intended exclusively for research, laboratory and analytical applications. They are not intended for human or animal consumption, therapeutic use, clinical administration or any other unauthorized application.')}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Regulated & Controlled Substances Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#F8FBFC] to-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_40px_rgba(26,163,182,0.08)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#084553]/10 border border-[#084553]/20 flex items-center justify-center text-[#084553]">
                  <FiShield className="text-xl" />
                </div>
                <h3 className="font-extrabold text-[#12344D] text-lg sm:text-xl mb-3">
                  {t('about.policies.complianceTitle', 'Regulated & Controlled Substances Policy')}
                </h3>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-[14.5px] font-normal mb-4">
                {t('about.policies.complianceDesc', 'GLP Pharma Standards does not manufacture, supply, export or otherwise deal in restricted, narcotic, psychotropic, addictive, prohibited or other regulated chemical substances without the applicable licenses, authorizations and regulatory approvals. All transactions involving regulated substances are subject to applicable laws, licensing requirements and internal compliance review.')}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

