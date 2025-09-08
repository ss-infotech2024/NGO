import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";
import ContactForm from "../components/ui/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef(null);
  const infoCardsRef = useRef([]);
  const formRef = useRef(null);
  const faqCardsRef = useRef([]);

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

    // Contact info cards
    gsap.fromTo(
      infoCardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoCardsRef.current[0]?.parentNode,
          start: "top 80%",
        },
      }
    );

    // Contact form
    gsap.fromTo(
      formRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      }
    );

    // FAQ cards
    gsap.fromTo(
      faqCardsRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: faqCardsRef.current[0]?.parentNode,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mt-14 sm:mx-14 mx-0 sm:rounded-xl rounded-none bg-green-600 py-20 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="container mx-auto text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Have questions about our platform, need support, or want to
            partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-green-600" />,
                    title: "Email Us",
                    desc: "For general inquiries and support",
                    info: (
                      <a
                        href="mailto:hello@danapaani.org"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        hello@danapaani.org
                      </a>
                    ),
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-green-600" />,
                    title: "Call Us",
                    desc: "Speak with our support team",
                    info: (
                      <a
                        href="tel:+91-9399345989"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        +91 9399345989
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-green-600" />,
                    title: "Visit Us",
                    desc: "Our headquarters location",
                    info: (
                      <address className="text-green-600 not-italic">
                        Khandwekar Villa,
                        <br /> near Lendra Park,
                        <br /> Ramdaspeth, Nagpur, Maharashtra
                      </address>
                    ),
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-green-600" />,
                    title: "Office Hours",
                    desc: "When our team is available",
                    info: (
                      <div className="text-green-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    ref={(el) => (infoCardsRef.current[i] = el)}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{item.desc}</p>
                        {item.info}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quick Help
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Looking for immediate answers? Check out our most frequently
            asked questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "How do I start a fundraiser?",
                desc: "Learn the step-by-step process to create your first fundraising campaign.",
              },
              {
                title: "How are donations processed?",
                desc: "Understand our secure payment processing and fund distribution.",
              },
              {
                title: "What are the fees?",
                desc: "Transparent information about our platform fees and costs.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                ref={(el) => (faqCardsRef.current[i] = el)}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
