import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCrown, FaUsers } from "react-icons/fa"; // Importing icons
import './common.css';
import img1 from '../images/brand/award1.jpeg'
import img2 from '../images/brand/award2.jpeg'

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const awardRefs = useRef([]);
  const boxRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

      boxRefs.current.forEach((box) => {
        gsap.fromTo(box, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: box, start: "top 90%", once: true },
        });
      });

      numberRefs.current.forEach((num) => {
        const targetValue = parseInt(num.dataset.value, 10);
        gsap.fromTo(num, { innerText: 0 }, {
          innerText: targetValue, duration: 2, snap: { innerText: 1 }, ease: "power2.out",
          scrollTrigger: {
            trigger: num,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(num, {
                duration: 2,
                innerText: targetValue,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function () {
                  num.innerText = Math.floor(this.targets()[0].innerText) + "+";
                },
              });
            },
          },
        });
      });

      awardRefs.current.forEach((award) => {
        const image = award.querySelector(".award-image");
        const text = award.querySelector(".award-text");

        gsap.set(text, { opacity: 0, y: 20 });

        gsap.to(image, { scale: 1.05, duration: 0,  paused: true });
        gsap.to(text, { opacity: 1, y: 0, duration: 0,  paused: true });

        award.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.1, duration: 0 }); 
          gsap.to(text, { opacity: 1, y: 0, duration: 0 }); 
        });
        
        award.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0 }); 
          gsap.to(text, { opacity: 0, y: 20, duration: 0 }); 
        });
        
        
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section style={{ background: "#36454F" }} ref={sectionRef} className="text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-10">WHY CHOOSE US</h2>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-12 text-center mb-16">
        <div
          ref={(el) => (boxRefs.current[0] = el)}
          style={{ background: "#4A5763" }}
          className="p-6 rounded-lg shadow-lg w-80 h-52 flex flex-col justify-center items-center"
        >
          <FaCrown style={{color:'gold'}} className="text-yellow-400 text-4xl mb-2" /> {/* Premium icon for projects */}
          <h3 className="text-2xl font-black">PROJECTS COMPLETED</h3>
          <p ref={(el) => (numberRefs.current[0] = el)} data-value="250" className="text-xl font-bold mt-2">
            0+
          </p>
        </div>
        <div
          ref={(el) => (boxRefs.current[1] = el)}
          style={{ background: "#4A5763" }}
          className="p-6 rounded-lg shadow-lg w-80 h-52 flex flex-col justify-center items-center"
        >
          <FaUsers style={{color:"gold"}} className="text-blue-400 text-4xl mb-2" /> {/* Different icon for followers */}
          <h3 className="text-2xl font-black">DIGITAL FOLLOWERS</h3>
          <p ref={(el) => (numberRefs.current[1] = el)} data-value="10000" className="text-xl font-bold mt-2">
            0+
          </p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="flex flex-wrap justify-center gap-12">
        <div ref={(el) => (awardRefs.current[0] = el)} className="relative w-80 cursor-pointer group">
          <img
            src={img1}
            alt="Award 1"
            className="award-image w-full h-52 object-cover rounded-lg transition-transform duration-300"
          />
          <p style={{background:"#36454f85",padding:"1vw"}}  className="award-text absolute bottom-0 left-0 right-0  text-white text-center py-3 opacity-0 transition-opacity duration-300">
          MR.Elangovan ( our CEO and Founder) has been honored with the Best Architect & Interior Designer of 2025 from Tamil Nadu, a prestigious recognition of their exceptional contributions to the field of architecture and interior design.
          </p>
        </div>

        <div ref={(el) => (awardRefs.current[1] = el)} className="relative w-80 cursor-pointer group">
          <img
            src={img2}
            alt="Award 2"
            className="award-image w-full h-52 object-cover rounded-lg transition-transform duration-300"
          />
          <p style={{background:"#36454f85",padding:"1vw"}} className="award-text absolute bottom-0 left-0 right-0  text-white text-center py-3 opacity-0 transition-opacity duration-300">
          Our chief Architect has been honored with the Most Creative Architect of 2025 award by GABA International, recognizing their groundbreaking contributions to architectural innovation and design excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
