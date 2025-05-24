import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  useEffect(() => {
    gsap.to(".parallax", {
      yPercent: 20,
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-[150vh] relative overflow-hidden parallax-container bg-gradient-to-b from-black to-gray-900 p-8">
      <div className="parallax text-5xl font-bold text-yellow-300">
        Haryanvi Syntax? <br /> समझदार के इशारा ही काफ़ी!
      </div>
    </section>
  );
}
