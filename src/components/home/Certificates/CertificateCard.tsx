
import { useInView } from '../Partners/useInView';

interface CertificateCardProps {
  imageSrc: string;
  index: number;
}

export function CertificateCard({ imageSrc, index }: CertificateCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 300}ms` }}
    >
 

     <div className="group relative bg-gray rounded-3xl  overflow-hidden shadow-inner hover:shadow-2xl transition-all duration-300">
        <div className="relative aspect-[4/3]">
          <img
            src={imageSrc}
            alt="Schneider Certificate"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

    </div>
  );
}