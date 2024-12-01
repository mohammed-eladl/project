import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="w-3/4 mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore the Map
        </h2>
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13783.333828341485!2d31.796306!3d30.2703261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd5d41a22f03%3A0xdaf32844b918660b!2sVision%20Metal%20Works!5e0!3m2!1sen!2seg!4v1732907348799!5m2!1sen!2seg"
            width={"100%"}
            height={"100%"}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
