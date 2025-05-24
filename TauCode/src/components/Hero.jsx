import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "bounce.out",
    });
  }, []);

  return (
    <section className="h-screen flex items-center justify-center flex-col text-center p-8">
      <h1 ref={titleRef} className="text-6xl font-bold leading-tight">
        TauCode 💻 <br /> <span className="text-green-400">जहाँ कोड भी ठेठ हरियाणवी में चले</span>
      </h1>
      <p className="mt-6 text-lg text-gray-400 max-w-xl">
        🤠 "बाई, एक `if` लगा दे — के करूं अब?" — TauCode lets you write code in your *style*.
      </p>
    </section>
  );
}
