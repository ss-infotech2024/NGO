import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  HeartPulse,
  UserCheck,
  Leaf,
  Baby,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const domains = [
    {
      title: "Education for All",
      description:
        "We work to provide quality education to underprivileged children by setting up community schools and running scholarship programs.",
      icon: <BookOpen className="text-green-600" />,
    },
    {
      title: "Healthcare Initiatives",
      description:
        "Organizing medical camps, health awareness drives, and providing free consultations in rural areas.",
      icon: <HeartPulse className="text-green-600" />,
    },
    {
      title: "Women Empowerment",
      description:
        "Creating training programs and self-help groups to empower women with skills and financial independence.",
      icon: <UserCheck className="text-green-600" />,
    },
    {
      title: "Environment & Sustainability",
      description:
        "Promoting tree plantation, clean energy, and plastic-free campaigns to protect our environment.",
      icon: <Leaf className="text-green-600" />,
    },
    {
      title: "Child Welfare",
      description:
        "Supporting orphans and abandoned children with shelter, nutrition, and education.",
      icon: <Baby className="text-green-600" />,
    },
  ];

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Cards animation
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode, // grid container
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mt-14 sm:mx-14 mx-0 sm:rounded-xl rounded-none bg-green-600 py-20 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="container mx-auto text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Social Work
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            At Daanapaani, we strive to uplift communities through
            education, health, empowerment, and sustainability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Contribution Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="bg-white rounded-xl p-6 border hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-4xl">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {domain.title}
                </h3>
                <p className="text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
