import { Cog, Scissors, WrenchIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: "Custom Metal Products Manufacturing",
      description: "Precision manufacturing of custom metal products tailored to your specifications",
      icon: Cog,
    },
    {
      title: "Metal Cutting and Forming",
      description: "Advanced cutting and forming services using state-of-the-art equipment",
      icon: Scissors,
    },
    {
      title: "Metal Structure Assembly",
      description: "Professional assembly and installation of metal structures",
      icon: WrenchIcon,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-black-400 max-w-2xl mx-auto">
            We provide comprehensive metal fabrication services using cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}