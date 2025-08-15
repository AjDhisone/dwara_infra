import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sakthivel Karuppusamy",
    text: `I had an amazing and happy experience with Dwara Infras. It is our dream home and it finally happened. Great teamwork!`,
    rating: 5,
  },
  {
    name: "Imran Khan B",
    text: `Our first dream home, and Dwara Infras made it real. Superb planning, design, and support throughout.`,
    rating: 5,
  },
  {
    name: "Oganathan S",
    text: `The construction was fantastic and reliable. Smooth execution and beautiful interior work. Honest team.`,
    rating: 4,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      7000
    );
    return () => resetTimeout();
  }, [index]);

  const renderStars = (count) => {
    return (
      <div className="flex justify-center mt-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < count ? "white" : "none"}
            viewBox="0 0 24 24"
            stroke="white"
            className="w-5 h-5 mx-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 17.27l5.18 3.04-1.64-6.36 4.64-4.09-6.16-.49L12 3 9.98 9.37l-6.16.49 4.64 4.09-1.64 6.36L12 17.27z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className="py-20 px-6 sm:px-10 lg:px-32"
      style={{ backgroundColor: "#4A5763", fontFamily: "'Oswald', serif" }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        CLIENT FEEDBACK
      </h2>
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="min-w-full px-6 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-[#4A5763] mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                  />
                </svg>
              </div>
              <p className="text-lg text-white font-light italic max-w-xl mb-2">
                “{testimonial.text}”
              </p>
              {renderStars(testimonial.rating)}
              <h4 className="text-xl text-white font-semibold mt-2">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
