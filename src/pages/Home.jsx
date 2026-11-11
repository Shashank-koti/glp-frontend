import Hero from '../components/home/Hero';
import CompanyIntro from '../components/home/CompanyIntro';
import NewlySynthesizedProducts from '../components/home/NewlySynthesizedProducts';
import Services from '../components/home/Services';
import LogisticsPartners from '../components/home/LogisticsPartners';
import OurClients from '../components/home/OurClients';
import GlobalTrust from '../components/home/GlobalTrust';
import SEO from '../components/common/SEO';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO
        title="Pharmaceutical Impurity Standards & API Impurities"
        description="GLP Pharma Standards is a premier manufacturer and global supplier of high-purity pharmaceutical impurity standards, API impurities, drug metabolites, and custom synthesis molecules."
        canonical="/"
      />
      <Hero />
      <CompanyIntro />
      <NewlySynthesizedProducts />
      <Services />
      <GlobalTrust />
      <OurClients />
      <LogisticsPartners />
    </div>
  );
}
