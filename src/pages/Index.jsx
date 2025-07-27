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
import Footer from "../components/ui/Footer";
import BentoGrid from "./BentoGrid";
import NormalMarquee from "../components/ui/NormalMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroWithSlider />
      <NormalMarquee/>
      {/* Charity*/}

      <CharityCards />


      {/* Fundraising Section */}
      <section className=" pb-32  sm:mx-6 lg:mx-16 rounded-xl flex-col flex justify-center items-center ">

        {/* Text Content */}
        <div className="container mx-auto text-center">
          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            Where we utilize funds
          </div>
          <p className="text-gray-600 mb-16 w-2/3 text-2xl mx-auto">
            With our simple and user-friendly platform, you can create a campaign, share your story, and start receiving support in no time.
          </p>


        </div>


        <div className="container w-full rounded-xl text-center p-24 bg-lime-400 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl">😊</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Give Happiness
            </h3>
            <p className="text-gray-700">
              Giving happiness to those who need it, also makes our hearts
              happy every day.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl">💝</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Share Love
            </h3>
            <p className="text-gray-700">
              When you share love with those around you, you share a better
              world.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-white text-2xl">🏗️</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Build Society
            </h3>
            <p className="text-gray-700">
              Building a solid, respectful and compassionate caring society
              for all of us.
            </p>
          </div>
        </div>
      </section>

      {/* <EventsSection/> */}
      <BentoGrid />




      {/* Scrolling Banner */}
      <MarqueeScroll
        rotation={0}
        textColor="#fff"
        bgColor="#14532d" // blue-800
      />

      <div className="relative bottom-[3rem] w-full h-24 ">
        <MarqueeScroll
          rotation={-3.2}
          textColor="#14532d"
          bgColor="#a3e635"
        />
      </div>






      {/* Meet Our Team */}
      <section className="py-16 flex flex-col items-center px-4 sm:px-6 lg:px-8">


        <div className="container mb-16 mx-auto text-center">


          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Meet Our Team
          </div>

          <p className="text-gray-600 mb-4 w-2/3 text-2xl mx-auto">
            Behind every meal served, child supported, and community uplifted—stands a passionate team dedicated to making a difference.
          </p>


        </div>

        {/* Team  */}
        <img
          src="https://jkewtrust.org.in/public/web/assets/images/bg/volunteer.jpg"
          alt="Team Member 1"
          className="w-11/12 h-[24rem] bg-cover bg-center  rounded-lg mx-auto mb-4 object-cover"
        />
        {/* <h3 className="font-semibold text-gray-900">Rohit Sharma</h3>
        <p className="text-gray-600">Founder & Director</p> */}





      </section>


      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">

        {/* Text Content */}
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
                danapaani is free, danapaani Charity has free. to receive it in the
                form of registrants on your platform and it will get hold of it
                in a few words. Don't miss out on what it...
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

      {/* Footer */}
    </div>
  );
};

export default Index;
