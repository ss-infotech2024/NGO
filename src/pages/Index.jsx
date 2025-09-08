import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import localImage19 from '../assets/Images/IndependenceDay.jpg';
import localImage18 from '../assets/Images/IndependenceDay.jpg';
import Team from '../assets/Images/Team.jpg';


import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Bdge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import {
  Play,
  Heart,
  Users,
  GraduationCap,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroWithSlider from "../components/ui/HeorWithSlider";
import EventsSection from "../components/ui/EventsSection";
import MarqueeScroll from "../components/ui/MarqueeScroll";
import CharityCards from "../components/Charity";
import Footer from "../components/Footer";
import BentoGrid from "./BentoGrid";
import NormalMarquee from "../components/ui/NormalMarquee";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animate all sections
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // when section enters viewport
            toggleActions: "play none none reverse",
          },
          delay: i * 0.2, // stagger effect
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroWithSlider />

      <NormalMarquee />

      {/* Charity */}
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <CharityCards />
      </div>

      {/* Fundraising Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="pb-32 sm:mx-6 lg:mx-16 rounded-xl flex-col flex justify-center items-center"
      >
        <div className="container mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            Where we utilize funds
          </div>
          <p className="text-gray-600 mb-16 w-2/3 text-2xl mx-auto">
            With our simple and user-friendly platform, you can create a
            campaign, share your story, and start receiving support in no time.
          </p>
        </div>

        <div className="container w-full rounded-xl text-center p-24 bg-lime-400 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "😊", title: "Give Happiness", text: "Giving happiness to those who need it, also makes our hearts happy every day." },
            { icon: "💝", title: "Share Love", text: "When you share love with those around you, you share a better world." },
            { icon: "🏗️", title: "Build Society", text: "Building a solid, respectful and compassionate caring society for all of us." },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[2 + i] = el)}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BentoGrid */}
      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <BentoGrid />
      </div>

      {/* Scrolling Banner */}
      <MarqueeScroll rotation={0} textColor="#fff" bgColor="#14532d" />
      <div className="relative bottom-[3rem] w-full h-24 ">
        <MarqueeScroll rotation={-3.2} textColor="#14532d" bgColor="#a3e635" />
      </div>

      {/* Meet Our Team */}
      <section
        ref={(el) => (sectionsRef.current[6] = el)}
        className="py-16 flex flex-col items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="container mb-16 mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </div>
          <p className="text-gray-600 mb-4 w-2/3 text-2xl mx-auto">
            Behind every meal served, child supported, and community
            uplifted—stands a passionate team dedicated to making a difference.
          </p>
        </div>

        <img
          src={Team}
          alt="Team Member 1"
          className="w-11/12 h-[24rem] bg-cover bg-center rounded-lg mx-auto mb-4 object-cover"
        />
      </section>

      {/* FAQ Section */}
      <section
        ref={(el) => (sectionsRef.current[7] = el)}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="container mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </div>
          <p className="text-gray-600 mb-16 w-2/3 text-2xl mx-auto">
            Everything you need to know
          </p>
        </div>

        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent>
                danapaani is free, danapaani Charity has free...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent>
                All features are included in our free platform access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent>
                All features are included in our free platform access.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Is there a limit to the duration of the free trial?
              </AccordionTrigger>
              <AccordionContent>
                There is no time limit on our free access.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Index;
