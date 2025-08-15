import React from "react";

const LocationSection = () => {
  return (
    <div className="relative w-full h-screen" style={{ fontFamily: "'Oswald', serif" }}>
      {/* Google Map iframe */}
      <iframe
        title="Dwara Infras Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0462911449016!2d76.92673387504982!3d10.963653889205012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f352a0e1d3%3A0x6cd1e7cf254eddf1!2sAnbu%20Nagar%20Rd%2C%20Sri%20Vinayaka%20Nagar%2C%20Perumal%20Nagar%2C%20Kovaipudur%2C%20Tamil%20Nadu%20641042!5e0!3m2!1sen!2sin!4v1687252459933!5m2!1sen!2sin"
      ></iframe>

      {/* Optional dark overlay with address text */}
      {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4 bg-charcoal  bg-opacity-50 ">
          <h2 className="text-4xl font-bold mb-2">Visit Us</h2>
          <p className="text-lg max-w-xl">
            Address: Anbu Nagar Rd, Sri Vinayaka Nagar, Perumal Nagar, Kovaipudur, Tamil Nadu 641042
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default LocationSection;
