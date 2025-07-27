import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = ({
  rotation = 0,
  textColor = "#ffffff",
  bgColor = "#065f46", // default: green-900
}) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-text", {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={marqueeRef}
      className="py-8 overflow-hidden"
      style={{ transform: `rotate(${rotation}deg)`, backgroundColor: bgColor }}
    >
      <div className="w-full">
        <div
          className="marquee-text flex items-center space-x-8 text-[2.6rem] font-semibold whitespace-nowrap w-max"
          style={{ color: textColor }}
        >
          {Array(20)
            .fill("Let's help each other")
            .map((text, idx) => (
              <React.Fragment key={idx}>
                <span>{text}</span>
                <span>*</span>
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeScroll;
