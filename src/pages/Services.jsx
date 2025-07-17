import React from "react";
import { Heart, Shield, Users, Target, Globe, Award, BookOpen, HeartPulse, UserCheck, Leaf, Baby } from "lucide-react";

// footer 

function Services() {
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

  return (
    <div className="  bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="container mx-auto text-center max-w-4xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Social work
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            At Daanapaani, we strive to uplift communities through education,
            health, empowerment, and sustainability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Contribution Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <div
                key={i}
                className="bg-white  rounded-xl p-6 border hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-4xl">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">{domain.title}</h3>
                <p className="text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <footer className="bg-green-800 text-white py-12 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">danapaani NGO</div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">© 2025danapaani NGO</h4>
              <div className="space-y-2 text-sm">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed">
                Dana Pani is dedicated to fighting hunger and restoring dignity through every meal served. With compassion at our core, we believe that access to food is a basic human right — not a privilege. Join us in our mission to ensure that no one sleeps hungry.
              </p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default Services;
