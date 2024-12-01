
export function Values() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="src/assets/aant-design_picture-filled.png"
            alt="Modern building"
            className="rounded-lg shadow-lg hover:shadow-xl hover:rotate-1 transition-transform-shadow duration-500"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600">
              Ethics, entrepreneurial thinking, and decision making are embedded into the hearts & minds of our employees. 
              Eventually, this will give us our aim of success and steady growth of our company.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {['Innovation', 'Excellence', 'Integrity', 'Collaboration'].map((value) => (
                <div key={value} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}