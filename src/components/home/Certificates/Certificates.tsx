import { Award } from "lucide-react";
import { CertificateCard } from "./CertificateCard";
import { useInView } from "../Partners/useInView";

export function Certificates() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const certificates = ["src/assets/11 1.png", "src/assets/12 1.png"];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="w-10 h-10 text-black-500 mr-2" />
            <h2 className="text-3xl font-bold text-black">
              Schneider Certificate
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We Are Happy To Get Schneider Certificate And ISO 9001 : 2015.{" "}
          </p>
        </div>

        {/* IMAGE ISO */}
        <div className="grid grid-cols-1 md:grid-cols gap-10 max-w-4xl mx-auto w-96 my-4 group relative bg-gray rounded-3xl  overflow-hidden shadow-inner hover:shadow-2xl transition-all duration-300">
          <img
            src="../../../../src/assets/24-A-3265_rev.0_Vision Metal Works-1.png"
            alt=""
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} imageSrc={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
