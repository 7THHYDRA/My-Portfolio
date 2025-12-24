/** @format */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img
                src="/images/proshopcoverimage.png"
                alt="Ryde App Interface"
              />
            </div>
            <div className="text-content">
              <h2>
                A Scalable Full-Stack E-Commerce Platform Built for Performance
                and Growth
              </h2>
              <p className="text-white-50 md:text-xl">
                ProShop is a MERN-based e-commerce application featuring secure
                authentication, product management, cart functionality, and
                payment integration.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Note Management App */}{" "}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/NoteappCoverImage.jpg"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
                Note Management App – Secure, Simple, and Efficient Data
                Handling
              </h2>
            </div>
            {/* REST API / Backend Project */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/APICoverImage.jpg" alt="YC Directory App" />
              </div>
              <h2>
                {" "}
                RESTful API Platform – Scalable Backend Architecture with
                Node.js and MongoDB
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
