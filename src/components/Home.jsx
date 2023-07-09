import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, we are </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        RECRUIT+
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Your hiring buddies.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        With Recruit+, companies can enjoy a seamless and efficient hiring experience, leveraging the power of technology to attract, assess, and hire top talent.
        </p>
      </div>
      
    </div>
  );
};

export default Home;
