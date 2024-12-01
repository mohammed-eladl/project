
import { Target } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-end">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <Target className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600">
              The most valuable asset we can ever acquire is a talented employee. 
              Employees of this type can efficiently turn client's dreams into reality. 
              We will focus on employee's continuous growth and development in order to support 
              our clients with the most effective solutions.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="src/assets/ant-design_picture-filled.png"
              alt="Architectural detail"
              className="rounded-lg shadow-lg hover:rotate-1 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}