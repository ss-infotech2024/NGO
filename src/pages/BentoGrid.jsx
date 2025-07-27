import React from 'react';

const BentoGrid = () => {
  // Curated Unsplash images with specific themes
  const gridItems = [
    { 
      id: 1, 
      title: "Slum Food Distribution Drive",
      description: 'Majestic peaks at golden hour', 
      className: 'col-span-1 md:col-span-2 row-span-2',
      image: 'https://www.bookeventz.com/blog/wp-content/uploads/2021/02/Feeding-India-Donate-Food.png'
    },
    { 
      id: 2, 
      title: "Health Support for the Underprivileged",
      description: 'Neon-lit urban landscape', 
      className: 'col-span-1 row-span-1',
      image: 'https://helplocal.in/blog/wp-content/uploads/2022/12/MaxPixel.net-Girls-Children-Eating-Boys-Meal-Infants-India-306610.jpg'
    },
    { 
      id: 3, 
      title: "Empowering Women Through Ration Kits",
      description: 'Artistic culinary presentation', 
      className: 'col-span-1 row-span-1',
      image: 'https://www.globalgiving.org/pfil/18102/ph_18102_244930.jpg'
    },
    { 
      id: 4, 
      title: "Winter Blanket Distribution",
      description: 'Serene waters in arid lands', 
      className: 'col-span-1 row-span-2',
      image: 'https://www.indiafoodbanking.org/wp-content/uploads/2025/03/IMG-20241002-WA0116.jpg'
    },
    { 
      id: 5, 
      title: 'Abstract Paint', 
      description: 'Colorful creative expression', 
      className: 'col-span-1 row-span-1',
      image: 'https://kosha-foundation.org/wp-content/uploads/2022/07/ghhhh-1-1024x682.png'
    },
   
  ];
  

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16">

      {/* Text Content */}
      <div className="container mx-auto text-center">
   

    <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
      1200+ People
    </div>

    <p className="text-gray-600 mb-4 w-2/3 text-2xl mx-auto">
      Become a part of our mission to bring food, clean water, and dignity to
      the underprivileged. Every small act of kindness counts.
    </p>
    <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 mb-16 transition-colors shadow-md hover:shadow-lg">
          Explore More

        </button>

  </div>
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 mb-12">
        {gridItems.map((item, index) => (
          <div 
            key={item.id}
            className={`relative rounded-2xl overflow-hidden group grid-item ${item.className}`}
          >
            {/* Using next/image for production would be better */}
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={index < 3 ? "eager" : "lazy"} // Lazy load images below the fold
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button  className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition-colors shadow-lg">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
     

        
      </div>

  

      
    </div>
  );
};

export default BentoGrid;