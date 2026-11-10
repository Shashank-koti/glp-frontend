import { Link, useLocation } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import navImg from "/navImg.png";

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  const productCategoriesCol1 = [
    { name: 'API Impurities & Reference Standards', path: '/product-categories-view/api-impurities-and-reference-standards' },
    { name: 'Nitrosamine Impurities', path: '/products-view/Nitroso-Impurities' },
    { name: 'Peptides', path: '/products-view/Peptides' },
    { name: 'Isotope Labelled Compounds', path: '/products-view/Isotope-Labelled-Compounds' },
    { name: 'Drug Metabolites', path: '/products-view/Metabolites' },
    { name: 'CRO Molecules', path: '/products-view/Cro-Molecules' },
  ];

  const productCategoriesCol2 = [
    { name: 'Phytochemicals', path: '/products-view/Phytochemicals' },
    { name: 'Pharmaceutical Intermediates', path: '/products-view/Intermediates' },
    { name: 'Catalysts', path: '/products-view/Catalysts' },
    { name: 'Fine Chemicals', path: '/products-view/Fine-Chemicals' },
    { name: 'Agro Chemicals', path: '/products-view/Agro-Chemicals' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#031525] via-[#07243D] to-[#0E3A5D] pt-12 pb-6 border-t border-[#1AA3B6]/30 shadow-[0_-12px_40px_rgba(3,21,37,0.2)] overflow-hidden text-white">

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-5 lg:col-span-3">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-md border border-white/20">
              <img
                src={navImg}
                alt="GLP Pharma Logo"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-200 font-normal text-[14.5px] leading-relaxed pr-2">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-3 pt-1">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-white/90 hover:bg-[#1AA3B6] hover:text-white hover:scale-110 transition-all duration-300">
                <FiLinkedin size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-white/90 hover:bg-[#1AA3B6] hover:text-white hover:scale-110 transition-all duration-300">
                <FiTwitter size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-white/90 hover:bg-[#1AA3B6] hover:text-white hover:scale-110 transition-all duration-300">
                <FiFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:pl-2">
            <div className="mb-5">
              <h4 className="text-white font-extrabold text-lg tracking-wide">{t('footer.quickLinks')}</h4>
            </div>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-200 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-[14.5px] font-medium inline-block">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/careers" className="text-slate-200 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-[14.5px] font-medium inline-block">{t('footer.careers')}</Link></li>
              <li><Link to="/gallery" className="text-slate-200 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-[14.5px] font-medium inline-block">{t('footer.gallery')}</Link></li>
              <li><Link to="/contact" className="text-slate-200 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-[14.5px] font-medium inline-block">{t('footer.contactUs')}</Link></li>
            </ul>
          </div>

          {/* Products - 2 Columns */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="mb-5">
              <h4 className="text-white font-extrabold text-lg tracking-wide">{t('footer.products', 'Products')}</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              <ul className="space-y-2.5">
                {productCategoriesCol1.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={cat.path}
                      className="text-slate-200 hover:text-[#5CE1E6] hover:translate-x-1 transition-all duration-200 text-[13.5px] font-medium block leading-snug"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {productCategoriesCol2.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={cat.path}
                      className="text-slate-200 hover:text-[#5CE1E6] hover:translate-x-1 transition-all duration-200 text-[13.5px] font-medium block leading-snug"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <div className="mb-5">
              <h4 className="text-white font-extrabold tracking-wide text-lg">Contact Us</h4>
            </div>
            <ul className="space-y-4 text-slate-200 font-medium">
              <li className="flex items-start gap-3 group cursor-pointer">
                <div className="mt-0.5 w-7 h-7 rounded-lg bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#5CE1E6] group-hover:bg-[#1AA3B6] group-hover:text-white transition-all duration-300 shrink-0">
                  <FiMapPin size={13} />
                </div>
                <span className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-200 group-hover:text-white transition-colors break-words">
                  Plot No:1, Shakti Puram Phase-2, Prashanti Nagar,<br />Industrial Estate(IE), Kukatpally, Hyderabad,<br />Telangana, India, PIN: 500072
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#5CE1E6] group-hover:bg-[#1AA3B6] group-hover:text-white transition-all duration-300 shrink-0">
                  <FiPhone size={13} />
                </div>
                <a href="tel:+919866074638" className="text-[13.5px] sm:text-[14px] text-slate-200 group-hover:text-white transition-colors">+91 9866074638</a>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 shadow-sm flex items-center justify-center text-[#5CE1E6] group-hover:bg-[#1AA3B6] group-hover:text-white transition-all duration-300 shrink-0">
                  <FiMail size={13} />
                </div>
                <a href="mailto:info@glppharmastandards.com" className="text-[13px] sm:text-[14px] text-slate-200 group-hover:text-white transition-colors break-all sm:break-normal">info@glppharmastandards.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-red-600 border border-red-500 px-2.5 py-1 rounded shrink-0 shadow-xs">
            NOTE :
          </span>
          <p className="text-[12px] sm:text-[13px] text-slate-300 leading-relaxed font-normal">
            All products supplied by GLP Pharma Standards are intended exclusively for research, laboratory and analytical applications. Not for human or animal consumption, therapeutic use, clinical administration, or unauthorized applications.
          </p>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-[14.5px] text-slate-300 font-medium text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} GLP Pharma Standards. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
