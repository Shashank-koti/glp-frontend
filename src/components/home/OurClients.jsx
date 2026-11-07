import { motion } from 'framer-motion';

export default function OurClients() {
  const clientLogos = [
    { name: "Therapiva", url: "/images/clients/1_therapiva.png" },
    { name: "CTX", url: "/images/clients/2_ctx.png" },
    { name: "Laurus Lab", url: "/images/clients/3_laurus_lab.png" },
    { name: "Macleods", url: "/images/clients/4_macleods.jpeg" },
    { name: "Srini", url: "/images/clients/5_srini.jpeg" },
    { name: "Smruthi", url: "/images/clients/6_smruthi.png" },
    { name: "Tyche", url: "/images/clients/7_tyche.png" },
    { name: "BDR", url: "/images/clients/8_bdr.png" },
    { name: "Accord", url: "/images/clients/9_accord.jpeg" },
    { name: "MSN", url: "/images/clients/10_msn.png" },
    { name: "Lupin", url: "/images/clients/11_lupin.png" },
    { name: "Glenmark", url: "/images/clients/12_glenmark.png" },
    { name: "Amneal", url: "/images/clients/13_amneal.jpeg" },
    { name: "Caplin", url: "/images/clients/14_caplin.jpeg" },
    { name: "Neuland", url: "/images/clients/15_neuland.png" },
    { name: "Windlas", url: "/images/clients/16_windlas.jpeg" },
    { name: "Natco", url: "/images/clients/17_natco.jpeg" },
    { name: "Advanced", url: "/images/clients/18_advanced.png" },
    { name: "Akron", url: "/images/clients/19_akron.png" },
    { name: "Titan", url: "/images/clients/20_titan.png" },
    { name: "Gland", url: "/images/clients/21_gland.jpeg" },
    { name: "Shodhana", url: "/images/clients/22_shodhana.png" },
    { name: "Randox", url: "/images/clients/23_randox.png" },
    { name: "Hetero", url: "/images/clients/24_hetero.png" },
    { name: "Edithgen", url: "/images/clients/25_edithgen.jpeg" },
    { name: "Intas Pharmaceuticals", url: "/images/clients/26_intas_pharmaceuticals.jpeg" },
    { name: "Aquatic", url: "/images/clients/27_aquatic.png" },
    { name: "Chem-Impex", url: "/images/clients/28_chem_impex.png" },
    { name: "Cipla", url: "/images/clients/29_cipla.png" },
    { name: "Dr. Reddy's", url: "/images/clients/30_dr_reddy_s.jpeg" },
    { name: "Teva", url: "/images/clients/31_teva.png" },
    { name: "Wanbury", url: "/images/clients/32_wanbury.png" },
    { name: "Torrent", url: "/images/clients/33_torrent.png" },
    { name: "Granules", url: "/images/clients/34_granules.jpeg" },
    { name: "Tagoor", url: "/images/clients/35_tagoor.png" },
    { name: "Emcure", url: "/images/clients/36_emcure.jpeg" },
    { name: "Solara", url: "/images/clients/37_solara.jpeg" },
    { name: "PharmaZell / Axplora", url: "/images/clients/38_pharmazell_axplora.png" },
    { name: "Masung", url: "/images/clients/39_masung.jpeg" },
    { name: "SMS Pharmaceuticals Ltd.", url: "/images/clients/40_sms_pharmaceuticals_ltd.jpeg" },
    { name: "Shilpa Therapeutics", url: "/images/clients/41_shilpa_therapeutics.jpeg" },
    { name: "Samchun Chemical Co., Ltd.", url: "/images/clients/42_samchun_chemical_co_ltd.png" },
    { name: "VWR International", url: "/images/clients/43_vwr_international.png" },
    { name: "Lek Pharmaceuticals D.D", url: "/images/clients/44_lek_pharmaceuticals_d_d.png" },
    { name: "QbD Pharmaceuticals Pvt. Ltd", url: "/images/clients/45_qbd_pharmaceuticals_pvt_ltd.png" },
    { name: "Scientific Products S.A.S", url: "/images/clients/46_scientific_products_s_a_s.jpeg" },
    { name: "Inovexa AD", url: "/images/clients/47_inovexa_ad.png" },
    { name: "CHEMONE", url: "/images/clients/48_chemone.jpeg" },
    { name: "Novugen Pharma Sdn. Bhd.", url: "/images/clients/49_novugen_pharma_sdn_bhd.jpeg" },
    { name: "Pharmavit Limited", url: "/images/clients/50_pharmavit_limited.jpeg" },
    { name: "Saneca Pharmaceuticals", url: "/images/clients/51_saneca_pharmaceuticals.jpeg" },
    { name: "Chembio Co., LTD", url: "/images/clients/52_chembio_co_ltd.jpeg" },
    { name: "Bachem SA", url: "/images/clients/53_bachem_sa.png" },
    { name: "Novartis D.O.O (Slovenia)", url: "/images/clients/54_novartis_d_o_o_slovenia.png" },
    { name: "Revive Pharma Limited (Uganda)", url: "/images/clients/55_revive_pharma_limited_uganda.png" },
    { name: "Avéma Pharma Solutions", url: "/images/clients/56_av_ma_pharma_solutions.jpeg" },
    { name: "Abhilash Chemicals And Pharmaceuticals Pvt. Ltd", url: "/images/clients/57_abhilash_chemicals_and_pharmaceuticals_pvt_ltd.jpeg" },
    { name: "Glochem Industries", url: "/images/clients/58_glochem_industries.png" },
    { name: "Shaanxi Boaxin Pharmaceuticals Co. Ltd", url: "/images/clients/59_shaanxi_boaxin_pharmaceuticals_co_ltd.jpeg" },
    { name: "Micro Labs Limited", url: "/images/clients/60_micro_labs_limited.png" },
    { name: "Evertogen Life Sciences Ltd", url: "/images/clients/61_evertogen_life_sciences_ltd.jpeg" },
    { name: "Gracure Pharmaceuticals Ltd", url: "/images/clients/62_gracure_pharmaceuticals_ltd.jpeg" },
    { name: "Marksans Pharma Ltd", url: "/images/clients/63_marksans_pharma_ltd.png" },
    { name: "Natural Biogenex", url: "/images/clients/64_natural_biogenex.png" },
    { name: "NGL Fine Chem Limited", url: "/images/clients/65_ngl_fine_chem_limited.png" },
    { name: "Zim Labs", url: "/images/clients/66_zim_labs.png" },
    { name: "Harman Finochem Ltd.", url: "/images/clients/67_harman_finochem_ltd.jpeg" },
    { name: "Hi Tech BioSciences India Pvt. Ltd.", url: "/images/clients/68_hi_tech_biosciences_india_pvt_ltd.jpeg" },
    { name: "Azurity Pharmaceuticals India LLP", url: "/images/clients/69_azurity_pharmaceuticals_india_llp.jpeg" },
    { name: "CVR Life Sciences Pvt. Ltd", url: "/images/clients/70_cvr_life_sciences_pvt_ltd.png" },
    { name: "Elixir Pharma Chem Pvt. Ltd.", url: "/images/clients/71_elixir_pharma_chem_pvt_ltd.png" },
    { name: "Optimus Pharma Pvt Ltd", url: "/images/clients/72_optimus_pharma_pvt_ltd.jpeg" }
  ];

  // We duplicate the list to create a seamless infinite scrolling effect
  const marqueeItems = [...clientLogos, ...clientLogos];

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

        {/* The scrolling track */}
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
      </div>
    </section>
  );
}
