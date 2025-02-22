import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDraftingCompass, FaHardHat, FaPaintRoller, FaTools } from "react-icons/fa";
import './common.css'

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Architectural Design",
    description: "Modern and functional designs tailored to your vision.",
    icon: <FaDraftingCompass className="text-gold text-5xl" />,
  },
  {
    title: "Construction Management",
    description: "Efficient planning and execution for seamless projects.",
    icon: <FaHardHat className="text-gold text-5xl" />,
  },
  {
    title: "Interior & Exterior",
    description: "Elegant and durable finishing touches to enhance aesthetics.",
    icon: <FaPaintRoller className="text-gold text-5xl" />,
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform old spaces into modern and functional areas.",
    icon: <FaTools className="text-gold text-5xl" />,
  },
];

const Services = () => {
  const servicesRef = useRef([]);

  useEffect(() => {
    servicesRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div style={{background:"#f0f0f0"}} className=" py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-10">
        OUR SERIVICES
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div  style={{background:"#f6f3f3"}} 
            key={index}
            ref={(el) => (servicesRef.current[index] = el)}
            className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            {service.icon}
            <h3 
 className="text-xl font-black text-charcoal mt-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
