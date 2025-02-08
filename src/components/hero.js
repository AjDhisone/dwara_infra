// src/components/Hero.js
import React from 'react';
import video from '../video/video1.mp4'
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src={video} // Replace with your video file URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="bg-white absolute inset-0 bg-opacity-10 flex flex-col justify-center items-center text-center p-4">
        {/* Tagline */}
        <h1 className=" text-4xl sm:text-6xl font-bold text-charcoal mb-4">
          Master of consistency and quality
        </h1>

        {/* Subtitle
        <p className="text-lg sm:text-xl text-charcoal mb-8">
          From Blueprint to Reality
        </p> */}

        {/* Call-to-Action Button */}
        <button className="bg-btnColor text-charcoal font-semibold py-3 px-6 rounded hover:bg-btnHover transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
