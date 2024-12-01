
import { FeatureList } from "./FeatureList";

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden">
             
              <iframe
                width="100%"
                height="320"
                src="https://www.youtube.com/embed/Np2Bee2ew2I?si=_fIOaBnunFXn-XOO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" /> */}
              {/* <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-white-900 rounded-full p-4 text-white hover:bg-white-900 transition-colors duration-300"
              >
                <Play className="h-8 w-8" />
              </button> */}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              WHY CHOICE VISION METAL SERVICES
            </h2>
            <p className="text-gray-800 mb-8">
              The factory utilizes the latest equipment and technologies to
              ensure high precision and quality at every stage of manufacturing,
              guaranteeing durable and well-crafted products that meet the
              required specifications.
            </p>
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
}
