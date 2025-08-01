import { useEffect, useRef } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Heart, Users, Target, Globe, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);



  return (
    <div ref={aboutRef} className="min-h-screen bg-white">
      {/* Header */}
     

      {/* Hero */}

      <section className="mt-14 sm:mx-14 mx-0  sm:rounded-xl rounded-none  bg-green-600 py-20 sm:px-6 lg:px-8">

        <div className="container mx-auto text-center max-w-4xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About danapaani</h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            At Danapaani, we unite compassion with action — creating real change, one meal, one life at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To eliminate hunger and empower lives by making food, education, and support accessible to all. We believe in building a better world — one act of kindness at a time.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  ">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-gray-900  text-center mb-12 fade-in">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              { icon: <Heart />, title: "Compassion", desc: "Every effort we make begins with empathy and love for others." },
              { icon: <Shield />, title: "Transparency", desc: "Your contributions are visible, trackable, and impactful." },
              { icon: <Users />, title: "Community", desc: "We thrive by bringing people together with shared purpose." },
              { icon: <Target />, title: "Impact", desc: "We focus on results that truly change lives." },
              { icon: <Globe />, title: "Global Reach", desc: "Connecting hearts across borders and cultures." },
              { icon: <Award />, title: "Excellence", desc: "We’re committed to the highest standards in everything we do." },
            ].map((val, i) => (
              <Card key={i}  className="text-center p-6 fade-in peer-[card] hover:bg-lime-300 transition-colors duration-500">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-900   mb-3">{val.title}</h3>
                  <p className="text-gray-900">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>In 2020, we set out with a single vision — to bring dignity through food and hope through connection.</p>
              <p>From humble beginnings, our mission expanded globally, helping thousands in need through meals, support, and community projects.</p>
              <p>We now serve 120+ people and continue to grow as a beacon of kindness and human connection.</p>
            </div>
          </div>
          <div  className="bg-gray-200 rounded-lg h-64 lg:h-80 fade-in">

          <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team Member 1"
          className=" rounded-lg mx-auto mb-4 object-cover"
        />

          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="container mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold mb-12">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1200+", label: "Active Donors" },
              { number: "₹50k+", label: "Funds Raised" },
              { number: "50+", label: "Projects Completed" },
              { number: "12+", label: "Cities Reached" },
            ].map((stat, i) => (
              <div key={i} className="fade-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you donate, volunteer, or spread awareness — every action helps us nourish lives and restore hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About;
