import ServiceList from '../components/services/ServiceList';
import ServiceProcess from '../components/services/ServiceProcess';

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <ServiceList />
      <ServiceProcess />
    </div>
  );
}
