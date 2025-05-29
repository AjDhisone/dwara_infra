
import './homeBody.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2022", text: "Dwara Infras was founded with a bold vision to redefine architectural planning and construction in Coimbatore. With just a small team and big dreams, we began our journey toward becoming a trusted name in the industry." },
  { year: "2023", text: "Within just a year, our dedication to quality and consistency helped us complete over 150 projects — from independent homes to premium interior makeovers — setting a strong foundation for long-term client trust." },
  { year: "2024", text: "With innovation at our core, we surpassed 3000 customized house plan designs, providing clients across Tamil Nadu with functional, aesthetic, and sustainable spaces." },
  { year: "2025", text: "Our growing reputation led to a rapid expansion in talent. Now with 179 dedicated professionals across architecture, interior design, and construction, we are scaling projects with even greater precision and passion." },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const milestoneRefs = useRef([]);
  const circleRefs = useRef([]);
  const endCircleRef = useRef(null);
  const endTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const items = milestoneRefs.current;
    const circles = circleRefs.current;
    const endCircle = endCircleRef.current;
    const endText = endTextRef.current;

    // Animate the timeline growing
    gsap.fromTo(
      line,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Animate each milestone & its circle point
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        circles[index],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    

    gsap.fromTo(
      endText,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: endText,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="about-container font-black" ref={sectionRef}>
      <h1 className="about-header">OUR JOURNEY</h1>
      <div className="timeline">
        <div className="line" ref={lineRef}></div>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`milestone-container ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            {/* Circular point on the line */}
            <div
              className="circle-point"
              ref={(el) => (circleRefs.current[index] = el)}
            ></div>

            {/* Milestone Box */}
            <div
              className="milestone"
              ref={(el) => (milestoneRefs.current[index] = el)}
            >
              <div className="year">{milestone.year}</div>
              <div className="text">{milestone.text}</div>
            </div>
          </div>
        ))}

        {/* Circle & "Miles to go..." text at the end of the timeline */}
        {/* <div className="end-container">
          <div className="circle" ref={endCircleRef}></div>
          <p className="miles-text" ref={endTextRef}>
            Miles to go...
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;
