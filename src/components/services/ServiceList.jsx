import { motion } from 'framer-motion';
import {
  FiTarget,
  FiShield,
  FiFileText,
  FiArrowRight,
  FiLayers,
  FiTrendingUp,
  FiClipboard
} from 'react-icons/fi';
import { TbAtom, TbTestPipe } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceList() {
  const { t } = useTranslation();

  const services = [
    {
      id: "01",
      title: "Custom Synthesis of Molecules",
      subtitle: "Tailored Chemical Synthesis for Specialized Research Requirements",
      paragraphs: [
        "GLP Pharma Standards provides custom synthesis services for pharmaceutical research compounds, complex organic molecules, impurity standards, advanced intermediates and specialized analytical materials.",
        "Our research approach focuses on developing practical synthetic pathways for compounds that are not readily available through conventional commercial sources.",
        "From route evaluation and multistep synthesis to purification and analytical characterization, we support projects involving challenging molecular structures and customer-specific specifications.",
        "Our custom synthesis services are particularly valuable for pharmaceutical manufacturers, CROs and analytical laboratories requiring specialized compounds in research quantities."
      ],
      actionText: "Enquire About Custom Synthesis",
      image: "/images/services_cmo.png",
      icon: FiTarget
    },
    {
      id: "02",
      title: "Complex Chiral Compounds",
      subtitle: "Advanced Synthesis of Stereochemically Complex Molecules",
      paragraphs: [
        "Chiral compounds play a critical role in pharmaceutical development because different stereoisomers can exhibit distinct chemical, biological and pharmacological properties.",
        "GLP Pharma Standards offers specialized synthesis support for complex chiral molecules, stereoisomeric impurities, chiral intermediates and structurally challenging research compounds.",
        "Our capabilities include multistep synthetic strategies, stereoselective transformations, chiral resolution and purification approaches, depending on project requirements.",
        "We support pharmaceutical research teams in obtaining compounds with defined stereochemical characteristics for analytical method development, impurity identification and research applications."
      ],
      actionText: "Enquire About Complex Chiral Synthesis",
      image: "/images/services_synthesis.png",
      icon: TbAtom
    },
    {
      id: "03",
      title: "Isolation, Identification & Characterization of Unknown Impurities",
      subtitle: "Scientific Investigation of Unidentified Pharmaceutical Impurities",
      paragraphs: [
        "Unknown impurities can emerge during API synthesis, pharmaceutical formulation, stability studies, degradation investigations and routine analytical testing.",
        "Identifying these impurities is important for understanding product quality, evaluating degradation pathways and developing effective impurity control strategies.",
        "GLP Pharma Standards provides research support for the isolation, identification and structural characterization of unknown pharmaceutical impurities.",
        "Depending on the project, our approach may involve impurity enrichment, chromatographic isolation, purification, mass spectrometric analysis, NMR spectroscopy and other appropriate analytical techniques.",
        "Where feasible, we also support the synthesis of identified impurities to obtain characterized reference materials for further analytical evaluation.",
        "Our services help pharmaceutical manufacturers and analytical laboratories investigate complex impurity profiles and support method development, impurity qualification and regulatory documentation."
      ],
      actionText: "Submit Your Unknown Impurity Inquiry",
      image: "/images/services_analytical.png",
      icon: FiShield
    },
    {
      id: "04",
      title: "Structure Elucidation Reports (SER)",
      subtitle: "Comprehensive Structural Characterization of Pharmaceutical Compounds",
      paragraphs: [
        "Accurate structural identification is essential when investigating pharmaceutical impurities, degradation products, unknown intermediates and newly synthesized research compounds.",
        "GLP Pharma Standards offers Structure Elucidation Reports (SER) based on the interpretation of relevant analytical data to establish or support the proposed molecular structure of a compound.",
        "Depending on the compound and analytical requirements, the investigation may include mass spectrometry, ¹H NMR, ¹³C NMR, two-dimensional NMR techniques, FT-IR and other suitable characterization methods.",
        "Our reports are designed to provide scientific interpretation of available experimental evidence, helping customers understand structural assignments and evaluate compound identity.",
        "These reports are valuable for impurity investigations, research documentation, analytical development and technical submissions."
      ],
      actionText: "Request a Structure Elucidation Report",
      image: "/images/services_regulatory.png",
      icon: FiFileText
    },
    {
      id: "05",
      title: "NDSRI Formation & Non-Formation Studies",
      subtitle: "Experimental Nitrosamine Formation Assessment and Scientific Reporting",
      paragraphs: [
        "Nitrosamine Drug Substance-Related Impurities (NDSRIs) are an important consideration in pharmaceutical impurity risk assessment and regulatory evaluation.",
        "Although certain drug substances or related chemical structures may present a theoretical potential for nitrosamine formation, actual formation depends on factors such as molecular structure, nitrosating agents, reaction conditions, formulation components and storage environment.",
        "GLP Pharma Standards offers specialized research support for investigating the formation or non-detection of potential NDSRIs through scientifically designed experimental studies.",
        "Our services may include targeted nitrosation experiments, forced-degradation investigations, analytical screening, structural assessment and evaluation of experimental findings under defined study conditions.",
        "Where a suspected NDSRI is not detected, we can provide a scientifically supported NDSRI Non-Formation Assessment Report, documenting the experimental approach, analytical methods, detection limits, observations and conclusions.",
        "Such reports may assist pharmaceutical manufacturers and regulatory teams in preparing technical justifications, impurity risk assessments and supporting documentation for Drug Master Files (DMFs) and other regulatory submissions.",
        "We also investigate cases in which nitrosamine formation is observed, supporting further identification, characterization and analytical evaluation.",
        "The report may support a customer's regulatory justification, but acceptance depends on the complete risk assessment, supporting data and applicable regulator requirements. It should not be described as an FDA-approved certificate or a substitute for product-specific confirmatory testing."
      ],
      actionText: "Request an NDSRI Formation or Non-Formation Study",
      image: "/images/services_analytical.png",
      icon: TbTestPipe
    },
    {
      id: "06",
      title: "Contract Research & Process R&D",
      subtitle: "Collaborative Chemical Research and Synthetic Process Development",
      paragraphs: [
        "GLP Pharma Standards provides contract research and process research services for pharmaceutical companies, CROs and specialty chemical organizations seeking customized chemistry solutions.",
        "Our research activities may include synthetic route exploration, feasibility studies, reaction optimization, multistep organic synthesis, intermediate development and characterization of research compounds.",
        "We offer project-based collaboration and dedicated Full-Time (FT) research support, subject to agreed project scope, resources and technical requirements.",
        "By combining synthetic chemistry expertise with a flexible project approach, we help customers investigate complex molecular targets and develop practical research solutions."
      ],
      actionText: "Explore Contract Research Opportunities",
      image: "/images/services_synthesis.png",
      icon: FiLayers
    },
    {
      id: "07",
      title: "API Process Optimization & Scale-Up Services",
      subtitle: "Improving Synthetic Efficiency and Process Understanding",
      paragraphs: [
        "Process optimization plays an important role in improving the efficiency, consistency and practicality of pharmaceutical chemical synthesis.",
        "GLP Pharma Standards offers research support for evaluating and optimizing API synthetic processes, including reaction conditions, reagent selection, impurity formation, intermediate purification and synthetic route performance.",
        "Our process R&D approach focuses on identifying opportunities to improve reaction conversion, selectivity, yield and reproducibility while understanding potential process-related impurities.",
        "We also support laboratory-scale process development and scale-up feasibility assessments for selected synthetic routes, subject to technical capabilities and project requirements.",
        "These services help pharmaceutical research teams assess process improvements and prepare suitable technical information for further development activities."
      ],
      actionText: "Inquire About Process Optimization",
      image: "/images/services_cmo.png",
      icon: FiTrendingUp
    },
    {
      id: "08",
      title: "Stability Studies & Regulatory Documentation Support",
      subtitle: "Analytical Research and Documentation for Pharmaceutical Development",
      paragraphs: [
        "Stability investigations help pharmaceutical researchers understand how chemical compounds behave under different environmental and storage conditions and identify potential degradation pathways.",
        "GLP Pharma Standards offers analytical research support for selected stability-related investigations, degradation studies and impurity characterization requirements.",
        "Depending on project scope, our services may include stress-degradation investigations, identification of degradation products, preparation of impurity reference materials and interpretation of relevant analytical findings.",
        "We also provide scientific documentation support, including Certificates of Analysis, analytical characterization data, Structure Elucidation Reports and study-specific technical reports.",
        "These services are intended to assist pharmaceutical manufacturers, CROs and analytical teams with research documentation and the preparation of supporting information for regulatory submissions."
      ],
      actionText: "Enquire About Stability & Documentation Support",
      image: "/images/services_regulatory.png",
      icon: FiClipboard
    }
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#F8FBFC] relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#1AA3B6]/5 blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#084553]/5 blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Intro from Word Document */}
        <div className="mb-10 sm:mb-14 border-b border-[#EAF2F4] pb-8">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-[#084553] leading-tight text-2xl sm:text-3xl md:text-4xl mb-5 max-w-4xl"
          >
            Specialized Scientific Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AA3B6] to-[#0B7285]">
              Complex Pharmaceutical Challenges
            </span>
          </motion.h1>

          <div className="space-y-3 max-w-4xl text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              GLP Pharma Standards offers specialized research and development services to support pharmaceutical manufacturers, CROs, analytical laboratories and chemical research organizations.
            </p>
            <p>
              Our capabilities encompass custom molecular synthesis, complex chiral chemistry, unknown impurity investigations, structure elucidation, nitrosamine formation studies, process research and analytical documentation support.
            </p>
            <p>
              We work collaboratively with customers to understand their scientific objectives, technical specifications and project timelines, providing customized solutions for challenging chemical research requirements.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
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
      className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EAF2F4] shadow-[0_8px_30px_rgba(8,69,83,0.04)] hover:shadow-[0_16px_45px_rgba(8,69,83,0.08)] transition-all duration-300 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-8 lg:gap-12 items-center`}
    >
      {/* Content */}
      <div className="w-full lg:w-[60%] flex flex-col">
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0F7F9] border border-[#1AA3B6]/20 flex items-center justify-center text-[#1AA3B6] shadow-xs shrink-0">
            <service.icon className="text-lg sm:text-xl" />
          </div>
          <h2 className="font-extrabold text-[#084553] text-xl sm:text-2xl md:text-[25px] leading-tight">
            {service.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base font-bold text-[#0B7285] mb-4">
          {service.subtitle}
        </p>

        {/* Paragraphs with rich, high-contrast text color */}
        <div className="space-y-3.5 mb-6 text-slate-700 leading-relaxed text-sm sm:text-[15px] font-normal">
          {service.paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="leading-relaxed text-slate-700">
              {para}
            </p>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <Link
            to={`/contact?subject=${encodeURIComponent(service.title)}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#084553] hover:bg-[#1AA3B6] text-white font-bold text-xs sm:text-sm shadow-sm transition-all duration-300 group cursor-pointer"
          >
            <span>{service.actionText}</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[40%] self-stretch flex items-center">
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[260px] max-h-[460px] shadow-md border border-[#EAF2F4] group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </motion.div>
  );
}
