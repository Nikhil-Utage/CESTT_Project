import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <section className='max-w-screen-xl mx-auto py-8 md:py-16 px-4'>
      {/* About Us Section */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-2xl relative font-rubik md:text-[42px] font-semibold after:content-[''] after:h-2 after:w-32  after:-bottom-0  md:pb-8 after:left-6 after:hidden    md:after:block  after:rounded-full after:bg-btnColor after:absolute">About Us</h2>
        <p className="text-gray-500 mt-7 text-sm  md:text-base lg:text-[20px] text-center ">
        CESTT offers comprehensive solutions for the construction industry in the UK through its online consultancy platform. CESTT (Construction Educational Skills Training Team) provides accurate information on a wide range of construction courses, health, safety and environmental testing, qualifications and construction cards relating to certification schemes that ensure people working on construction sites gain construction industry knowledge of processes, necessary skills, qualifications and training to carry out their work safely and effectively. 
        </p>
      </div>

      {/* Images Section */}
      <div className="flex gap-6  md:gap-24 mb-12">
      
          <Image 
            src="/images/cons1.jpg" 
            alt="Workers 1"
            width={450}
            height={340}
           layout="responsive"
            className="rounded-xl w-full h-auto max-w-full"
          />
       
      
          <Image 
            src="/images/cons2.jpg" 
            alt="Workers 2"
            width={450}
            height={340}
           
            className="rounded-xl w-full max-w-full h-auto object-cover"
          />
      
      </div>

      {/* What We Do Section */}
      <div className="flex flex-col md:flex-row gap-6  mt-8  md:mt-24 mb-11">
        <h3 className="text-2xl mb-5 md:mb-0  md:text-start w-full md:w-4/12 relative font-rubik md:text-[42px] font-semibold after:content-[''] after:h-2 after:w-32   inline-block  md:after:bottom-1/4 after:block   after:-bottom-4 text-center md:after:left-0 md:right-0 after:right-1/2 transform after:translate-x-1/2 after:translate-y-1/2 after:rounded-full after:bg-btnColor after:absolute">What we do</h3>


        <p className="w-full md:w-8/12 font-rubik text-center md:text-start text-[#636363] md:text-[#272727] text-sm md:text-base lg:text-lg  mx-auto">
        At CESTT, we specialize in providing comprehensive support and services for obtaining Construction Skills Certification Scheme (CSCS) cards. Our expertise lies in guiding construction professionals through the entire process, from understanding the requirements to successfully passing the necessary tests.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
