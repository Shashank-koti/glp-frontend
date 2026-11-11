import { motion } from 'framer-motion';
import { FiMail, FiUsers } from 'react-icons/fi';

export default function OpenPositions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] text-center space-y-6 my-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-[#E8F7F9] text-[#1AA3B6] flex items-center justify-center mx-auto shadow-xs border border-[#D0F0F5]">
        <FiUsers size={28} />
      </div>

      <div className="space-y-2">
        <h2 className="font-extrabold text-[#084553] text-2xl sm:text-3xl md:text-4xl tracking-tight">
          Join Our Growing Family
        </h2>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
        <p>
          GLP Pharma Standards is looking for energetic and talented people who likes challenges, who wants to make a difference and who have a track record of delivering results.
        </p>
        <p>
          If you have zeal to make some difference, you are most welcome to join GLP Pharma Standards family. We assure you to provide a transparent &amp; flexible working environment to make balance in work &amp; life and talent to flourish across the boundaries.
        </p>
      </div>

      <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFC] border border-[#EAF2F4] max-w-2xl mx-auto">
        <p className="text-[#084553] font-semibold text-sm sm:text-[15px] leading-relaxed">
          There are more career openings coming soon. Just keep checking in …it could just be the beginning of an exciting phase in your life.
        </p>
      </div>

      <div className="pt-2">
        <p className="text-slate-600 text-xs sm:text-sm font-medium mb-3">
          Send your application to:
        </p>
        <a
          href="mailto:info@glppharmastandards.com?subject=Job Application - GLP Pharma Standards"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#1AA3B6] hover:bg-[#0B7285] text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
        >
          <FiMail size={18} />
          info@glppharmastandards.com
        </a>
      </div>
    </motion.div>
  );
}
