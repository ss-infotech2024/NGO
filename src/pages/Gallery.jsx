import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { 
      image: 'https://www.bookeventz.com/blog/wp-content/uploads/2021/02/Feeding-India-Donate-Food.png',
      title: "Slum Food Distribution Drive",
        className: "md:col-span-2 md:row-span-2" 
      },
      { 
        image: 'https://helplocal.in/blog/wp-content/uploads/2022/12/MaxPixel.net-Girls-Children-Eating-Boys-Meal-Infants-India-306610.jpg',
        title: "Food Distribution",
        className: "md:col-span-1 md:row-span-1" 
      },
      { 
        image: 'https://kosha-foundation.org/wp-content/uploads/2022/07/ghhhh-1-1024x682.png',
        title: "Children's Education",
        className: "md:col-span-1 md:row-span-1" 
      },
      { 
        image: 'https://www.indiafoodbanking.org/wp-content/uploads/2025/03/IMG-20241002-WA0116.jpg',
        title: "Health Check-up Camp",
        className: "md:col-span-1 md:row-span-2" 
      },
      { 
        image: "https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg", 
        title: "Community Cleanup Drive",
        className: "md:col-span-1 md:row-span-1" 
      },
      { 
        image: "https://www.csrmandate.org/wp-content/uploads/2024/05/Listicle-NGOs-for-Women-Empowerment.jpeg",
        className: "md:col-span-2 md:row-span-1" 
      },
      { 
        image: "https://thecsrjournal.in/wp-content/uploads/2024/04/SNEHA-NGO-organizes-immunisation-camps-in-Mumbai-slums-to-raise-awareness.jpg", 
        title: "Elderly Care Program",
        className: "md:col-span-1 md:row-span-1" 
      },
    
      
   
    ]);
  }, []);

  const handleImageError = (e) => {
    e.target.src = "https://thecsrjournal.in/wp-content/uploads/2024/04/SNEHA-NGO-organizes-immunisation-camps-in-Mumbai-slums-to-raise-awareness.jpg";
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
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-xl overflow-hidden group ${item.className || ''} hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={item.image}
                alt={item.title}
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