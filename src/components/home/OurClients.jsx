import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import apiClient from '../../api/apiClient';

export default function OurClients() {
  const [clientLogos, setClientLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch client images directly from MongoDB database
    apiClient
      .get('/client-logos')
      .then((res) => {
        if (isMounted && res.data?.success && Array.isArray(res.data?.data) && res.data.data.length > 0) {
          setClientLogos(
            res.data.data.map((item) => ({
              name: item.name,
              url: item.image, // Base64 data URL stored directly in MongoDB
            }))
          );
        }
      })
      .catch((err) => {
        console.warn('Could not fetch client logos from MongoDB:', err?.message || err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Duplicate the list to create a seamless infinite scrolling effect
  const marqueeItems = clientLogos.length > 0 ? [...clientLogos, ...clientLogos] : [];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-[#EAF2F4]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl"></div>
      </div>

      <div className="w-full xl:w-[95%] 2xl:w-[92%] max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase mb-3 text-sm"
          >
            TRUSTED PARTNERS
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.2rem] md:text-[2.8rem] font-extrabold text-heading mb-6 tracking-tight leading-tight"
          >
            Our Prestigious Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto"
          >
            We are proud to collaborate with industry leaders and provide top-tier pharmaceutical solutions to businesses worldwide.
          </motion.p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center h-40">
        {/* Left and Right Fade Masks for a premium look */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {loading && marqueeItems.length === 0 ? (
          /* Subtle skeleton placeholder while logos load */
          <div className="flex w-full justify-around items-center px-4 gap-4 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-48 sm:w-56 h-24 bg-slate-50 border border-[#EAF2F4] rounded-xl flex items-center justify-center p-3"
              >
                <div className="w-24 h-6 bg-slate-200/60 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          /* The scrolling track */
          <div className="flex w-max animate-marquee" style={{ animationDuration: '95s' }}>
            {marqueeItems.map((client, index) => (
              <div 
                key={index} 
                className="w-48 sm:w-56 px-3 flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-white border border-[#EAF2F4] rounded-xl p-3 w-full h-24 flex items-center justify-center shadow-sm">
                  <img 
                    src={client.url} 
                    alt={client.name} 
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                      }
                    }}
                  />
                  <span className="hidden font-extrabold text-[#12344D] text-center text-sm sm:text-[14.5px] leading-snug tracking-tight px-1">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
