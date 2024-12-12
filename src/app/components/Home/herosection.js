import { Modak } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PopupModal from '../popup';

const Herosection = () => {
  return (
    <div className='max-w-screen-2xl mx-auto py-10 px-4'>
      <div className='flex flex-col  lg:flex-col xl:flex-row items-center  md:gap-5 xl:gap-14 px-5 md:px-10'>
        <div className='text flex flex-col gap-6 lg:gap-11 md:w-5/12 lg:w-6/12 items-center md:items-start'>
          <h2 className='font-rubik font-semibold text-[32px] text-center md:text-start md:text-[40px] lg:text-[50px] leading-[40px] md:leading-[55px] lg:leading-[70px]'>
            Streamlined Guides to Securing Your{' '}
            <span className='text-[#437FC7]'>CSCS Card</span>
          </h2>
          <p className='font-inter text-sm md:text-base text-center md:text-start lg:text-lg text-[#8C8B92] leading-[25px] md:leading-[30px] lg:leading-[35px] w-full md:w-10/12'>
            Unlocking your potential in the construction industry begins with a CSCS card, a universally recognized credential that validates your skills and commitment to safety, granting you access to a world of opportunities.
          </p>

          <PopupModal buttontext="Get Started" />

        </div>
        <div className='image flex-col md:flex-row justify-center items-center lg:gap-8 md:w-7/12 lg:w-6/12 hidden md:flex '>
          <div className='imagesleft flex flex-col gap-8'>
            <div className='w-[200px] md:h-[250px] rounded-[32px] relative'>
              <Image
                src='/images/image1.jpg'
                className='rounded-[32px]'
                fill
                alt='Image 1'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 272px"
              />
              <span className='py-4 px-8 font-rubik font-bold text-sm bg-white rounded-full absolute z-10 top-4 -right-[6.5rem] border text-[#393E46] hover:bg-[#437FC7] hover:text-white hover:border-[#437FC7]'>
                7 Days Fulfillment
              </span>
            </div>
            <div className='md:w-[200px] md:h-[250px] rounded-[32px] relative'>
              <Image
                src='/images/image2.jpg'
                className='rounded-[32px]'
                fill
                alt='Image 2'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 272px"
              />
              <span className='py-4 px-8 font-rubik font-bold text-sm bg-white rounded-full absolute z-10 top-0 -right-36 border text-[#393E46] hover:bg-[#437FC7] hover:text-white hover:border-[#437FC7]'>
                1000+ Happy Customers
              </span>
            </div>
          </div>
          <div className='imageright flex'>
            <div className='md:h-[30px] max-w-full max-h-[370px] md:w-[220px] rounded-[32px] relative'>
              <img
                src='/images/image3.jpg'
                className='rounded-[32px]'
                fill
                alt='Image 3'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 272px"
              />
              <span className='py-4 px-8 font-rubik font-bold text-sm bg-white rounded-full absolute z-10 lg: md:-bottom-52 md:-right-10 border text-[#393E46] hover:bg-[#437FC7] hover:text-white hover:border-[#437FC7]'>
                Instant Booking
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
