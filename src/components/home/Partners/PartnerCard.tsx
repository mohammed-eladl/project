import { useInView } from './useInView';

interface PartnerCardProps {
  name: string;
  logo: string;
  index: number;
}

export function PartnerCard({ name, logo, index }: PartnerCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ${
        isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group relative  p-6 rounded-lg  transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-12 w-auto mx-auto object-contain   
              transition-all duration-300 transform group-hover:scale-110 animate-float"
          />
        </div>
        <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-gray-500">{name}</p>
        </div>
      </div>
    </div>
  );
}