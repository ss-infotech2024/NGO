import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NormalMarquee = ({ textColor = "#14532d", bgColor = "#a3e635" }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      x: "-50%", // Move left
      duration: 18,
      ease: "linear",
      repeat: -1, // Infinite
    });
  }, []);

  return (
    <section
      className="w-full overflow-hidden py-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-max flex space-x-8 text-[2rem] font-semibold whitespace-nowrap"
        style={{ color: textColor }}
        ref={marqueeRef}
      >
        {Array(20)
          .fill("Let's help each other")
          .map((text, i) => (
            <React.Fragment key={i}>
              <span>{text}</span>
              <span>*</span>
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default NormalMarquee;
