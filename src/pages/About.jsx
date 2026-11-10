import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import OurLegacy from '../components/about/OurLegacy';
import CoreValues from '../components/about/CoreValues';
import GlobalInfrastructure from '../components/about/GlobalInfrastructure';
import CompliancePolicies from '../components/about/CompliancePolicies';
import SEO from '../components/common/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About GLP Pharma Standards - Precision, Purity & Integrity"
        description="Established in 2015 in Hyderabad, India, GLP Pharma Standards is a research-based manufacturer and supplier of pharmaceutical impurity standards, analytical reference materials and custom synthesis."
        canonical="/about"
      />
      <AboutHero />
      <OurLegacy />
      <MissionVision />
      <CoreValues />
      <GlobalInfrastructure />
      <CompliancePolicies />
    </div>
  );
}
