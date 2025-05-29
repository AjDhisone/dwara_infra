import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDraftingCompass, FaBuilding, FaHardHat } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import ceo from '../images/Team/ceo.png'

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const teamCardsRef = useRef(null);

  // Updated team data with Divya removed.
  const cardData = [
    {
      image: ceo,
      text: 'Elango Arumugam: With over 10 years of experience as the visionary CEO and Chief Designer, Elango leads our firm in redefining modern living spaces through innovative architectural solutions.',
    },
    // {
    //   image: 'https://picsum.photos/seed/2/600/400',
    //   text: 'Senthil Kumar: As a dedicated co-founder and project manager, Senthil ensures every detail is executed with precision. His expertise in construction management is a cornerstone of our success.',
    // },
    // {
    //   image: 'https://picsum.photos/seed/3/600/400',
    //   text: 'Ashika: A creative architect known for her sustainable designs, Ashika merges technical excellence with artistic flair to craft spaces that inspire and endure.',
    // },
    // {
    //   image: 'https://picsum.photos/seed/4/600/400',
    //   text: 'Ravi: An innovative interior designer whose work transforms spaces into functional art, Ravi combines aesthetics with practicality to create environments that resonate with clients.',
    // },
  ];

  useEffect(() => {
    // Animate Company Overview on scroll.
    gsap.fromTo(
      overviewRef.current,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: overviewRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate each service box individually.
    gsap.utils.toArray('.service-box').forEach((box, index) => {
      gsap.fromTo(
        box,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  // Simple fade-in and scroll-up animation for team cards.
  useEffect(() => {
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamCardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#4A5763', paddingTop: '12vh' }}>
      {/* Header Image at the very top */}
     
      {/* Company Overview */}
      <section ref={overviewRef} className="mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Company Overview</h1>
        <p className="text-lg leading-relaxed text-white" style={{ textAlign: 'justify' }}>
          Dwara Infras is a dynamic design and construction firm committed to delivering innovative and
          client-centric architectural solutions. With a strong foundation in house planning, interior design,
          and exterior aesthetics, the company has successfully completed over 150 projects, ensuring 100%
          client satisfaction. Having designed more than 3,000 house plans, Dwara Infras stands out for its
          expertise in blending functionality with visual appeal. While currently focused on design services,
          the company is set to expand its construction operations across Tamil Nadu by March 2025. Built on trust,
          quality, and a passion for excellence, Dwara Infras continues to redefine modern living spaces with
          creativity and precision.
        </p>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="mb-12 py-8 -mx-8" style={{ backgroundColor: '#D3D3D3' }}>
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#4A5763' }}>
          Dwara Infras Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Service 1 */}
          <div className="service-box w-full md:w-5/12 lg:w-1/4 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#E8E8E8' }}>
            <div className="text-5xl mb-4 flex justify-center" style={{ color: '#4A5763' }}>
              <FaDraftingCompass />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: '#4A5763' }}>
              House Planning & Architectural Design
            </h3>
            <p className="text-sm" style={{ textAlign: 'justify', color: '#4A5763' }}>
              Custom house plans, space planning, efficient layouts, 2D & 3D floor plans, and Vastu-compliant designs tailored to your needs.
            </p>
          </div>
          {/* Service 2 */}
          <div className="service-box w-full md:w-5/12 lg:w-1/4 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#E8E8E8' }}>
            <div className="text-5xl mb-4 flex justify-center" style={{ color: '#4A5763' }}>
              <MdOutlineDesignServices />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: '#4A5763' }}>
              Interior Design
            </h3>
            <p className="text-sm" style={{ textAlign: 'justify', color: '#4A5763' }}>
              Residential & commercial interior solutions, realistic 3D visualizations, material selection, and innovative decor concepts.
            </p>
          </div>
          {/* Service 3 */}
          <div className="service-box w-full md:w-5/12 lg:w-1/4 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#E8E8E8' }}>
            <div className="text-5xl mb-4 flex justify-center" style={{ color: '#4A5763' }}>
              <FaBuilding />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: '#4A5763' }}>
              Exterior Elevation Design
            </h3>
            <p className="text-sm" style={{ textAlign: 'justify', color: '#4A5763' }}>
              Modern, contemporary, and traditional elevation designs with 3D rendering and custom facade detailing.
            </p>
          </div>
          {/* Service 4 */}
          <div className="service-box w-full md:w-5/12 lg:w-1/4 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#E8E8E8' }}>
            <div className="text-5xl mb-4 flex justify-center" style={{ color: '#4A5763' }}>
              <FaHardHat />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: '#4A5763' }}>
              Construction & Turnkey Projects
            </h3>
            <p className="text-sm" style={{ textAlign: 'justify', color: '#4A5763' }}>
              End-to-end construction services with quality materials, expert execution, structural design, supervision, and remodeling. <span className="italic">(Expanding across Tamil Nadu by March 2025)</span>
            </p>
          </div>
          {/* Service 5 */}
          <div className="service-box w-full md:w-5/12 lg:w-1/4 p-6 rounded-xl shadow-lg" style={{ backgroundColor: '#E8E8E8' }}>
            <div className="text-5xl mb-4 flex justify-center" style={{ color: '#4A5763' }}>
              <BiSupport />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center" style={{ color: '#4A5763' }}>
              Consultation Services
            </h3>
            <p className="text-sm" style={{ textAlign: 'justify', color: '#4A5763' }}>
              Professional guidance in architecture and design, budget planning, material selection, and on-site project supervision.
            </p>
          </div>
        </div>
      </section>

     {/* Team Section */}
<section className="mb-12 text-center">
  <h2 className="text-3xl font-bold text-white mb-6">Meet Our CEO</h2>

  <div className="flex justify-center" ref={teamCardsRef}>
    {cardData.map((card, index) => (
      <div 
        key={index} 
        className="team-card bg-gray-900 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm"
      >
        <img 
          src={card.image} 
          alt={`Team Member ${index + 1}`} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-white text-sm text-justify">
          {card.text}
        </p>
      </div>
    ))}
  </div>
</section>

      
    </div>
  );
};

export default AboutPage;
