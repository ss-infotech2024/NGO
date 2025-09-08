import React from 'react';
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


const BentoGrid = () => {
  const gridItems = [
    {
      id: 1,
      title: 'Slum Food Distribution Drive',
      description: 'Majestic peaks at golden hour',
      className: 'col-span-1 md:col-span-2 row-span-2',
      image: localImage1,
    },
    {
      id: 2,
      title: 'Health Support for the Underprivileged',
      description: 'Neon-lit urban landscape',
      className: 'col-span-1 row-span-1',
      image: localImage2,
    },
    {
      id: 3,
      title: 'Empowering Women Through Ration Kits',
      description: 'Artistic culinary presentation',
      className: 'col-span-1 row-span-1',
      image: localImage3,
    },
    {
      id: 4,
      title: 'Winter Blanket Distribution',
      description: 'Serene waters in arid lands',
      className: 'col-span-1 row-span-2',
      image: localImage4,
    },
    {
      id: 5,
      title: 'School Kit Distribution',
      description: 'Young minds with brighter futures',
      className: 'col-span-1 row-span-1',
      image: localImage5,
    },
    {
      id: 6,
      title: 'Blood Donation Camp',
      description: 'Saving lives one drop at a time',
      className: 'col-span-1 row-span-1',
      image: localImage6,
    },
    {
      id: 7,
      title: 'Community Hygiene Awareness',
      description: 'Clean habits for healthy lives',
      className: 'col-span-1 sm:col-span-2 row-span-1',
      image: localImage7,
    },

   

    {
      id: 10,
      title: 'Food Distribution on Independence Day',
      description: 'Food Distribution on Independence Day',
      className: 'col-span-1 sm:col-span-1 row-span-2',
      image: localImage20,
    },

    {
      id: 12,
      title: 'Food Distribution on Independence Day',
      description: 'Food Distribution on Independence Day',
      className: 'col-span-1 sm:col-span-2 row-span-2',
      image: localImage21,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16">
      <div className="text-center">
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
            className={`relative rounded-2xl overflow-hidden group ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={index < 3 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition-colors shadow-lg">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
