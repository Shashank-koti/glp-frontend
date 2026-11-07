import { motion } from 'framer-motion';
import {
  FiActivity,
  FiTool,
  FiShield,
  FiFileText,
  FiArrowRight,
  FiCheck,
  FiLayers,
  FiTrendingUp,
  FiClipboard
} from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { TbAtom, TbTestPipe } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceList() {
  const { t } = useTranslation();

  const services = [
    {
      id: "01",
      title: t('services.list.s1Title'),
      subtitle: t('services.list.s1Sub'),
      desc: t('services.list.s1Desc'),
      features: [
        t('services.list.s1f1'),
        t('services.list.s1f2'),
        t('services.list.s1f3'),
        t('services.list.s1f4')
      ],
      image: "/images/services_cmo.png",
      color: "from-cyan-500/20 to-transparent",
      accentBg: "bg-cyan-50",
      textColor: "text-[#084553]",
      badgeColor: "bg-[#1AA3B6] text-white",
      icon: FiTool
    },
    {
      id: "02",
      title: t('services.list.s2Title'),
      subtitle: t('services.list.s2Sub'),
      desc: t('services.list.s2Desc'),
      features: [
        t('services.list.s2f1'),
        t('services.list.s2f2'),
        t('services.list.s2f3'),
        t('services.list.s2f4')
      ],
      image: "/images/services_synthesis.png",
      color: "from-teal-500/20 to-transparent",
      accentBg: "bg-teal-50",
      textColor: "text-[#0B7285]",
      badgeColor: "bg-[#0B7285] text-white",
      icon: TbAtom
    },
    {
      id: "03",
      title: t('services.list.s3Title'),
      subtitle: t('services.list.s3Sub'),
      desc: t('services.list.s3Desc'),
      features: [
        t('services.list.s3f1'),
        t('services.list.s3f2'),
        t('services.list.s3f3'),
        t('services.list.s3f4')
      ],
      image: "/images/services_analytical.png",
      color: "from-blue-500/20 to-transparent",
      accentBg: "bg-blue-50",
      textColor: "text-[#084553]",
      badgeColor: "bg-blue-600 text-white",
      icon: FiShield
    },
    {
      id: "04",
      title: t('services.list.s4Title'),
      subtitle: t('services.list.s4Sub'),
      desc: t('services.list.s4Desc'),
      features: [
        t('services.list.s4f1'),
        t('services.list.s4f2'),
        t('services.list.s4f3'),
        t('services.list.s4f4')
      ],
      image: "/images/services_regulatory.png",
      color: "from-emerald-500/20 to-transparent",
      accentBg: "bg-emerald-50",
      textColor: "text-emerald-800",
      badgeColor: "bg-emerald-600 text-white",
      icon: FiFileText
    },
    {
      id: "05",
      title: t('services.list.s5Title'),
      subtitle: t('services.list.s5Sub'),
      desc: t('services.list.s5Desc'),
      features: [
        t('services.list.s5f1'),
        t('services.list.s5f2'),
        t('services.list.s5f3'),
        t('services.list.s5f4')
      ],
      image: "/images/services_analytical.png",
      color: "from-rose-500/20 to-transparent",
      accentBg: "bg-rose-50",
      textColor: "text-rose-900",
      badgeColor: "bg-rose-600 text-white",
      icon: TbTestPipe
    },
    {
      id: "06",
      title: t('services.list.s6Title'),
      subtitle: t('services.list.s6Sub'),
      desc: t('services.list.s6Desc'),
      features: [
        t('services.list.s6f1'),
        t('services.list.s6f2'),
        t('services.list.s6f3'),
        t('services.list.s6f4')
      ],
      image: "/images/services_synthesis.png",
      color: "from-indigo-500/20 to-transparent",
      accentBg: "bg-indigo-50",
      textColor: "text-indigo-900",
      badgeColor: "bg-indigo-600 text-white",
      icon: FiLayers
    },
    {
      id: "07",
      title: t('services.list.s7Title'),
      subtitle: t('services.list.s7Sub'),
      desc: t('services.list.s7Desc'),
      features: [
        t('services.list.s7f1'),
        t('services.list.s7f2'),
        t('services.list.s7f3'),
        t('services.list.s7f4')
      ],
      image: "/images/services_cmo.png",
      color: "from-amber-500/20 to-transparent",
      accentBg: "bg-amber-50",
      textColor: "text-amber-900",
      badgeColor: "bg-amber-600 text-white",
      icon: FiTrendingUp
    },
    {
      id: "08",
      title: t('services.list.s8Title'),
      subtitle: t('services.list.s8Sub'),
      desc: t('services.list.s8Desc'),
      features: [
        t('services.list.s8f1'),
        t('services.list.s8f2'),
        t('services.list.s8f3'),
        t('services.list.s8f4')
      ],
      image: "/images/services_regulatory.png",
      color: "from-sky-500/20 to-transparent",
      accentBg: "bg-sky-50",
      textColor: "text-sky-900",
      badgeColor: "bg-sky-600 text-white",
      icon: FiClipboard
    }
  ];

  return (
    <section className="py-10 md:py-18 lg:py-20 bg-[#F8FBFC] relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#1AA3B6]/5 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#084553]/5 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-6 gap-6 sm:gap-8 border-b border-[#EAF2F4] pb-6">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
              className="font-extrabold text-[#084553] leading-tight text-2xl sm:text-3xl md:text-4xl"
            >
              Specialized Scientific Solutions for &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] to-[#0B7285]">
                Complex Pharmaceutical Challenges
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="text-[#5B7280] text-left md:text-right font-medium max-w-lg text-sm sm:text-base leading-relaxed"
          >
            {t('services.list.desc')}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAF2F4] shadow-[0_10px_35px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_45px_rgba(8,69,83,0.08)] transition-all duration-300 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-8 lg:gap-14 items-center`}
    >
      {/* Content */}
      <div className="w-full lg:w-[58%] flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#F0F7F9] border border-[#1AA3B6]/20 flex items-center justify-center text-[#1AA3B6] shadow-xs shrink-0`}>
              <service.icon className="text-lg sm:text-xl" />
            </div>
            <h3 className="font-extrabold text-[#084553] text-xl sm:text-2xl md:text-[26px] leading-tight mb-2">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base font-bold text-[#1AA3B6] mb-3">
          {service.subtitle}
        </p>

        <p className="text-[#5B7280] leading-relaxed mb-6 text-sm sm:text-[15px] font-medium">
          {service.desc}
        </p>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-[#F8FBFC] border border-[#EAF2F4]"
            >
              <div className="w-5 h-5 rounded-full bg-[#1AA3B6]/15 text-[#0B7285] flex items-center justify-center shrink-0">
                <FiCheck className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="font-semibold text-[#12344D] text-xs sm:text-sm truncate">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <Link
            to={`/contact?subject=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#084553] hover:bg-[#1AA3B6] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-300 group cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[42%]">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#EAF2F4] group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-white/90 text-xs">
            <span className="font-bold tracking-wide backdrop-blur-md bg-black/40 px-3 py-1 rounded-lg border border-white/10">
              GLP Scientific Capabilities
            </span>
            <span className="font-bold backdrop-blur-md bg-[#1AA3B6]/80 px-2.5 py-1 rounded-lg">
              CoA & SER Supported
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
