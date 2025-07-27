import React from 'react';
import flaticonGif from '../assets/kindness.gif';
import flaticonGif2 from '../assets/happy.gif';

const CharitySection = () => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-16 mt-32 flex flex-col lg:flex-row justify-between gap-4">
      
      {/* Left Column */}
      <div className="grid grid-rows-1 gap-2 h-full flex-2">
        
        {/* Inspiration Card */}
        <div className="bg-white h-[12.6rem] rounded-2xl flex items-center justify-center flex-row shadow-md shadow-gray-400 border-2 border-green-900">
          <img 
            src={flaticonGif}
            alt="Kindness GIF" 
            className="w-36 h-36 mr-3"
          />
          <h3 className="text-green-900 font-extrabold text-3xl text-center">
            Every Voice<br />Matters
          </h3>
        </div>

        {/* Campaign Image */}
        <div 
          className="relative rounded-2xl h-80 bg-cover bg-center text-white overflow-hidden"
          style={{ backgroundImage: "url('https://3.imimg.com/data3/FF/PB/MY-5047481/capture-500x500.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="relative z-10 p-4 flex flex-col justify-end h-full">
            <span className="text-sm uppercase">Education Drive</span>
            <h3 className="text-lg font-semibold leading-tight">
              Providing learning kits to underprivileged children
            </h3>
          </div>
        </div>
      </div>

      {/* Center Column */}
      <div className="bg-green-900 text-white rounded-2xl flex items-center justify-center flex-col sm:h-[33rem] flex-1 text-center px-4">
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Be the Change<br />Join 5,000+ Supporters
        </h2>
        <p className="text-lg mb-6">
          Your small contribution can light up lives. Join hands with us to build a better tomorrow.
        </p>
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-24 py-4 rounded-full transition-colors duration-300">
          Join Our Mission
        </button>
      </div>

      {/* Right Column */}
      <div className="grid grid-rows-2 gap-2 h-full">
        
        {/* Campaign Image */}
        <div 
          className="relative rounded-2xl h-80 bg-cover bg-center text-white overflow-hidden  ring-2 ring-green-900"
          style={{ backgroundImage: "url('https://static.wixstatic.com/media/d5fc3f_e2ef1f5c27bf4572ab409e4e5a45845b.jpg/v1/fill/w_930,h_419,al_c,q_85,enc_avif,quality_auto/d5fc3f_e2ef1f5c27bf4572ab409e4e5a45845b.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="relative z-10 p-4 flex flex-col justify-end h-full">
            <span className="text-sm uppercase">Community Upliftment</span>
            <h3 className="text-lg font-semibold leading-tight">
              Supporting families with essentials and education
            </h3>
          </div>
        </div>

        {/* Motivation Card */}
        <div className="bg-white h-[12.6rem] rounded-2xl flex items-center justify-center flex-row shadow-md shadow-gray-400 border-2 border-green-900">
          <img 
            src={flaticonGif2}
            alt="Happiness GIF" 
            className="w-28 h-28 mr-4"
          />
          <h3 className="text-green-900 font-extrabold text-3xl text-center">
            Spread<br />Hope & Smiles
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CharitySection;
