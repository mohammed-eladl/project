
import { Eye } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center">
            <Eye className="text-blue-600" size={40} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-xl text-gray-600">
            Will always guide us to maximally work on being the closest partner to our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Innovation', 'Partnership', 'Growth'].map((item) => (
              <div 
                key={item}
                className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}