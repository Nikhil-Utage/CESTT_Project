import Image from 'next/image';
import React from 'react';
import FormUi from './formUi';

const GetStarted = () => {



  return (
    <section className='bg-[#C9EEFC]'>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto gap-20  md:pt-9 p-7 md:px-3 md:py-0  rounded-md">
   
        <div className="w-full md:w-1/2 max-w-lg mx-auto p-9 bg-white shadow-lg rounded-md">
          <h2 className="text-[32px] font-medium font-poppins">Get Started</h2>
          <p className="text-gray-400 font-poppins font-light mb-8 tracking-wide">Unlock Success with Your CSCS Card Today!</p>
          <FormUi />
        </div>

       
        <div className=" relative w-1/2  min-h-[700px] max-h-[650px] max-w-full  hidden md:flex">
          <Image
            src="/images/man.png"
            alt="Thinking Man"
           fill
          objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
