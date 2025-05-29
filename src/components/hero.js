import { useEffect, useRef } from "react";
import gsap from "gsap";
import './hero.css';
// import constructionExperience from '../images/brand/construction-experience.jpeg'
import video from '../images/brand/video.mp4'
import Mobile from '../images/brand/videoMobile.mp4'
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const numberRef = useRef(null);
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    

    useEffect(() => {
        gsap.fromTo(
            textRef1.current,
            { opacity: 0, x:-200}, // Moves from left
            { opacity: 1, x:0, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(
            textRef2.current,
            { opacity: 0, x:-200},
            { opacity: 1, x:0, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(
            ref3.current,
            { opacity: 0, x:200}, 
            { opacity: 1, x:0, duration: 1, ease: "power2.out", delay: 0.5 }
        );
        gsap.fromTo(
            ref4.current,
            { opacity: 0, x:200}, 
            { opacity: 1, x:0, duration: 1, ease: "power2.out", delay: 0.5 }
        );


        gsap.fromTo(
          numberRef.current,
          { innerText: 0 },
          {
            innerText: 10000,
            duration: 4,
            snap: { innerText: 1 },
            ease: "power1.out",
          }
        );

    }, []);

    return (

        <div class="grid-container">
 <div className="relative w-full h-screen overflow-hidden block md:hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Mobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Full-Screen Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Bottom Black Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Vision</h1>
        <p className="text-lg mb-6">Master of consistency and quality</p>

        {/* Scroll Down Button */}
        <a
          href="#next-section"
          className="animate-bounce mt-10 flex flex-col items-center text-white"
        >
          <FaChevronDown className="text-3xl" />
          <span className="mt-2 text-sm">Scroll Down</span>
        </a>
      </div>
    </div>
            <div class="item1">
               
                {/* <img src={Moile}class="imgbg"></img> */}
                {/* <video class="imgbg" autoPlay loop muted>
                    <source src={Mobile}></source>
                </video> */}

                <p ref={textRef1} className="tagline">
                    <div className="overlay"></div>
                    <span className="start"> MASTER OF </span>
                    <div> <span className="end">CONSISTENCY AND QUALITY</span></div>
                </p>
            </div>
            <div class="item2">
                <p className="followers" ref={textRef2}>
                    With a strong commitment to excellence and innovation, we have not only built remarkable structures but also a thriving community. Having gained over <span  ref={numberRef}>10000</span> digital followers, we continue to inspire and connect with clients, architects, and construction enthusiasts worldwide. <span style={{textDecoration:"underline",background:"#F0F0F0",color:"#36454F", border: "none"}}  > <a href="https://www.instagram.com/dwara_infras/"> Join us</a></span> on our journey as we shape the future, one project at a time!
                </p>
            </div>

            <div  className="item3">
    <video ref={ref3} autoPlay loop muted>
        <source src={video} type="video/mp4" />
    </video>
<p
  ref={ref4}
  className="rotated-text cursor-pointer"
  onClick={() => window.location.href = 'tel:+919344413901'}
  role="link"
  tabIndex="0"
>
  Book a free consultation
</p>
</div>

  
           
</div>




    );
};

export default Hero;
