import { PartnerCard } from './PartnerCard';
import { useInView } from './useInView';

export function Partners() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const partners = [
    { name: 'Mobica', logo: 'src/assets/Layer_1 (1).png' },
    { name: 'Schneider', logo: 'src/assets/Layer_1 (2).png' },
    { name: 'PowerLine', logo: 'src/assets/Layer_1 (3).png' },
    { name: 'Troy', logo: 'src/assets/Layer_1 (4).png' },
    { name: 'ArcelorMittal', logo: 'src/assets/Layer_1.png' },
    { name: 'ABB', logo: 'src/assets/Layer_11.png' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-black mb-4">Our Trusted Partners</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional quality and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              logo={partner.logo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}