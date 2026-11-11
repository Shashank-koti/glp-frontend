import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiCheckCircle, FiLock, FiFileText } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function CompliancePolicies() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-[#F8FBFC] relative overflow-hidden border-t border-border/60">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#084553]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#084553]/10 border border-[#084553]/20 text-[#084553] text-xs font-bold uppercase tracking-wider mb-4">
            <FiShield className="text-sm" />
            {t('about.policies.badge', 'Compliance & Regulations')}
          </div>
          <h2 className="font-extrabold text-[#12344D] text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
            {t('about.policies.title', 'Regulatory Compliance & Usage Policies')}
          </h2>
          <p className="text-slate-700 font-sm text-base sm:text-lmd leading-relaxed">
            {t('about.policies.desc', 'GLP Pharma Standards adheres to rigorous international quality, ethical, and legal frameworks across all compound synthesis, characterization, and distribution workflows.')}
          </p>
        </div>

        {/* Two Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Card 1: Research & Analytical Use Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(26,163,182,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <FiAlertTriangle className="text-2xl" />
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Mandatory Notice
                </span>
              </div>

              <h3 className="font-extrabold text-[#12344D] text-lg sm:text-xl mb-4">
                {t('about.policies.researchTitle', 'Research & Analytical Use Only')}
              </h3>

              <p className="text-slate-700 leading-relaxed text-[15px] sm:text-base font-normal mb-6">
                {t('about.policies.researchDesc', 'All products supplied by GLP Pharma Standards are intended exclusively for research, laboratory and analytical applications. They are not intended for human or animal consumption, therapeutic use, clinical administration or any other unauthorized application.')}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Regulated & Controlled Substances Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E2E8F0] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(26,163,182,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#084553]/10 border border-[#084553]/20 flex items-center justify-center text-[#084553]">
                  <FiShield className="text-2xl" />
                </div>
                <span className="text-xs font-bold text-[#084553] bg-[#084553]/10 border border-[#084553]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  Statutory Protocol
                </span>
              </div>

              <h3 className="font-extrabold text-[#12344D] text-lg sm:text-xl mb-4">
                {t('about.policies.complianceTitle', 'Regulated & Controlled Substances Policy')}
              </h3>

              <p className="text-slate-700 leading-relaxed text-[14px] sm:text-[16px] font-normal mb-6">
                {t('about.policies.complianceDesc', 'GLP Pharma Standards does not manufacture, supply, export or otherwise deal in restricted, narcotic, psychotropic, addictive, prohibited or other regulated chemical substances without the applicable licenses, authorizations and regulatory approvals. All transactions involving regulated substances are subject to applicable laws, licensing requirements and internal compliance review.')}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

