import React, { useEffect, useState } from "react";

// Importing local images
import localImage1 from '../assets/Images/IMG_1257.JPG';
import localImage2 from '../assets/Images/IMG_1249.JPG';
import localImage3 from '../assets/Images/IMG_1254.JPG';
import localImage4 from '../assets/Images/IMG_1242.JPG';
import localImage5 from '../assets/Images/IMG_1261.PNG';
import localImage6 from '../assets/Images/IMG_1256.JPG';
import localImage7 from '../assets/Images/IMG_1255.JPG';
import localImage18 from '../assets/Images/IndependenceDay.jpg';
import localImage19 from '../assets/Images/IndependenceDay2.jpg.jpg';
import localImage20 from '../assets/Images/IndependenceDay3.jpg.jpg';
import localImage21 from '../assets/Images/IndependenceDay4.jpg';


const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      {
        image: localImage1,
        title: "Slum Food Distribution Drive",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        image: localImage2,
        title: "Food Distribution",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        image: localImage3,
        title: "Children's Education",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        image: localImage4,
        title: "Health Check-up Camp",
        className: "md:col-span-1 md:row-span-2",
      },
      {
        image: localImage5,
        title: "Community Cleanup Drive",
        className: "md:col-span-1 md:row-span-1",
      },
      {
        image: localImage6,
        title: "Women's Empowerment Workshop",
        className: "md:col-span-2 md:row-span-1",
      },
      {
        image: localImage7,
        title: "Elderly Care Program",
        className: "md:col-span-1 md:row-span-1",
      },

      {
        image: localImage20,
        title: "Food Distribution on Independence Day",
        className: "md:col-span-2 md:row-span-2",
      },
      
      {
        image: localImage18,
        title: "Food Distribution on Independence Day",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        image: localImage19,
        title: "Food Distribution on Independence Day",
        className: "md:col-span-2 md:row-span-1",
      },

      {
        image: localImage21,
        title: "Food Distribution on Independence Day",
        className: "md:col-span-2 md:row-span-1",
      },
      
      
    ]);
  }, []);

  const handleImageError = (e) => {
    e.target.src =
      "https://thecsrjournal.in/wp-content/uploads/2024/04/SNEHA-NGO-organizes-immunisation-camps-in-Mumbai-slums-to-raise-awareness.jpg";
    e.target.alt = "Default NGO activity image";
  };

  return (
    <section className="bg-[#f9f9f9] min-h-screen">
      <section className="mt-14 sm:mx-14 mx-0 sm:rounded-xl rounded-none bg-green-600 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            A glimpse into our recent activities and initiatives.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-14 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group ${item.className || ""
                } hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={item.image}
                alt={item.title || "NGO Event"}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                onError={handleImageError}
                loading={idx < 4 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
