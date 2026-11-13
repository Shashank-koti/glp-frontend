import { motion } from 'framer-motion';
import { FaFlask, FaVial, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t('home.services.s1.title'),
      description: t('home.services.s1.desc'),
      icon: FaFlask,
      color: "from-primary to-accent"
    },
    {
      title: t('home.services.s2.title'),
      description: t('home.services.s2.desc'),
      icon: FaCogs,
      color: "from-indigo-500 to-purple-400"
    },
    {
      title: t('home.services.s3.title'),
      description: t('home.services.s3.desc'),
      icon: FaVial,
      color: "from-primary to-accent"
    },
    {
      title: t('home.services.s4.title'),
      description: t('home.services.s4.desc'),
      icon: FaShieldAlt,
      color: "from-orange-500 to-amber-400"
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-white relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <h4 className="text-[#084553] font-bold tracking-widest uppercase text-xs">{t('home.services.ourExpertise')}</h4>
            </div>
            <h1 className="font-extrabold text-heading leading-tight text-2xl sm:text-3xl md:text-4xl">
              {t('home.services.title1')} <br className="hidden md:block" />
              {t('home.services.title2')}
            </h1>
          </div>
          <div className="pb-2">
            <a href="/services" className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-primary rounded-full font-medium transition-colors duration-300 group text-sm sm:text-base">
              {t('home.services.viewAll')}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white p-6 sm:p-8 rounded-3xl transition-all duration-500 border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Gradient hover background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className="relative mb-8 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                    <service.icon className="text-heading text-3xl" />
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300 text-xl">
                {service.title}
              </h4>
              <p className="text-slate-700 leading-relaxed font-normal text-sm">
                {service.description}
              </p>

              {/* Bottom decorative line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
