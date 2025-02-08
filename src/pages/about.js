import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Team member data
const teamMembers = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
    bio: "With over 20 years of experience in construction management, John has led numerous high-profile projects across the country. His vision and leadership drive our company's success.",
    image: "https://picsum.photos/200"
  },
  {
    name: "Sarah Martinez",
    role: "Chief Operations Officer",
    bio: "Sarah brings a decade of strategic planning and operational excellence to our team. She ensures every project runs smoothly and meets the highest quality standards.",
    image: "https://picsum.photos/200"
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    bio: "A licensed professional engineer with expertise in structural design, Michael oversees our technical teams and ensures innovative, safe, and efficient project solutions.",
    image: "https://picsum.photos/200"
  }
];

const About = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      duration: 1500,
      reset: false,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Reveal sections
    sr.reveal('.company-overview', { origin: 'left', distance: '50px' });
    sr.reveal('.team-section', { origin: 'bottom', distance: '50px' });
    sr.reveal('.team-member', { origin: 'up', distance: '30px', interval: 500 });
  }, []);

  return (
    <div className="bg-charcoal container mx-auto px-4 py-12 pt-20">
      {/* Company Overview Section */}
      <section className="company-overview mb-16">
        <h1 className="text-4xl text-primaryText font-bold text-center mb-8 opacity-80">About Dwara infras</h1>
        <div className="max-w-4xl mx-auto text-lg text-center text-secondaryText">
          <p className="mb-6 ">
            Founded in 2005, our construction company has been a cornerstone of innovative building solutions. 
            We specialize in commercial and residential projects, combining cutting-edge technology 
            with traditional craftsmanship to deliver exceptional results.
          </p>
          <p>
            Our commitment to quality, safety, and client satisfaction has earned us a reputation 
            as one of the most trusted construction firms in the region. We pride ourselves on 
            completing projects on time, within budget, and exceeding client expectations.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="text-3xl font-bold text-center mb-12 opacity-80">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-lightGray text-charcoal team-member text-center shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden "
            >
              <div className="flex flex-col items-center pb-4 ">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover my-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <div className="p-4">
                <p className="text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;