import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxScroll = () => {
  useEffect(() => {
    let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray("section").forEach((section, i) => {
      let bg = section.querySelector(".bg");
      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () => (i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"),
        },
        {
          backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full text-black">
      {["Simple parallax sections", "Hey look, a title", "They just keep coming", "So smooth though", "Nice, right?"].map(
        (text, i) => (
          <section key={i} className="relative h-screen flex items-center justify-center">
            <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat"></div>
            <h1 className="text-white text-3xl font-light shadow-lg">{text}</h1>
          </section>
        )
      )}
    </div>
  );
};

export default ParallaxScroll;
