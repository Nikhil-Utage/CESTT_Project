'use client'


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';


export default function CitbTestCarousel() {
  return (
    <section className='bg-[#E4F5FB] '>
      <div className="max-w-screen-xl mx-auto px-10 py-12 relative">
        <h2 className="text-[42px] font-inter font-semibold text-center mb-6">CITB Test</h2>
        <p className="text-center text-gray-600 mb-8 w-full md:max-w-4xl mx-auto font-rubik text-lg">
          Enhance your construction career with a CSCS card. Demonstrate your commitment to safety, professionalism, and expertise, opening doors to higher-paying roles and prestigious projects. <Link href="/registerform" className="text-linkColor font-semibold">APPLY NOW</Link>
        </p>


        <Swiper
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}

          modules={[Navigation]}

          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          <SwiperSlide>
            <div className="relative  min-h-96 overflow-hidden rounded-lg">
              <div className='relative h-72'>
                <Image
                  fill
                  src="/images/citbtestimg1.png"
                  alt="Managers & Professionals Test"
                  className="max-w-full h-auto"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw '
                />
              </div>

              <div className="absolute bottom-0 max-w-80 md:max-w-[360px] flex flex-col items-center rounded-lg right-0 left-0 mx-auto bg-white py-4">
                <div className='px-6'>
                  <h3 className="text-xl mb-2 font-rubik font-medium ">Managers & Professionals Test</h3>
                  <p className="text-xs font-rubik  text-gray-700 mb-2">
                    This test is conducted by the Construction Industry Training Board covering the section around Legal & Management, Health & Welfare, General Safety, High-risk activities, Environmental-Specialist activities. The pass score for the test is 92%. Candidates have to answer 46 questions correctly out of 50.
                  </p>
                </div>
                <Link href="/registerform" className=" bg-btnColor text-center  font-rubik font-bold w-full text-white py-1 px-4">Apply Now</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative  min-h-96 overflow-hidden rounded-lg">
              <div className='relative h-72'>
                <Image
                  fill
                  src="/images/citbtestimg2.png"
                  alt="Managers & Professionals Test"
                  className="max-w-full h-auto"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw '
                />
              </div>

              <div className="absolute bottom-0 max-w-80 md:max-w-[360px] flex flex-col items-center rounded-lg right-0 left-0 mx-auto bg-white py-4">
                <div className='px-6'>
                  <h3 className="text-xl mb-2 font-rubik font-medium ">CITB Operative Test</h3>
                  <p className="text-xs font-rubik  text-gray-700 mb-2">
                    The CITB Operatives Test is based on the Health, safety and Environment knowledge conducted by the Construction Industry Training Board (CITB). The test must be completed within 45 minutes. The pass marks are 90%. Candidate has to answer 45 questions correctly out of 50.
                  </p>
                </div>
                <Link href="/registerform" className=" bg-btnColor text-center font-rubik font-bold w-full text-white py-1 px-4">Apply Now</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative  min-h-96 overflow-hidden rounded-lg">
              <div className='relative h-72'>
                <Image
                  fill
                  src="/images/citbtestimg3.png"
                  alt="Managers & Professionals Test"
                  className="max-w-full h-auto"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>

              <div className="absolute bottom-0 max-w-80 md:max-w-[360px] flex flex-col items-center rounded-lg right-0 left-0 mx-auto bg-white py-4">
                <div className='px-6'>
                  <h3 className="text-xl mb-2 font-rubik font-medium ">CITB Specialist Test</h3>
                  <p className="text-xs font-rubik  text-gray-700 mb-2">
                    The CITB specialists test covers topics contained in the Operatives test as well as relevant questions in the chosen specialist area. The pass marks is 90%. The test covers topics such as health and safety regulations, risk assessment, working with others, and the use of tools and equipment.
                  </p>
                </div>
                <Link href="/registerform" className=" bg-btnColor text-center font-rubik font-bold w-full text-white py-1 px-4">Apply Now</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative  min-h-96 overflow-hidden rounded-lg">
              <div className='relative h-72'>
                <Image
                  fill
                  src="/images/citbtestimg3.png"
                  alt="Managers & Professionals Test"
                  className="max-w-full h-auto"
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw '
                />
              </div>

              <div className="absolute bottom-0 max-w-80 md:max-w-[360px] flex flex-col items-center rounded-lg right-0 left-0 mx-auto bg-white py-4">
                <div className='px-6'>
                  <h3 className="text-xl mb-2 font-rubik font-medium ">Managers & Professionals Test</h3>
                  <p className="text-xs font-rubik  text-gray-700 mb-2">
                    This test is conducted by the Construction Industry Training Board covering the section around Legal & Management, Health & Welfare, General Safety, High-risk activities, Environmental-Specialist activities. The pass score for the test is 92%. Candidates have to answer 46 questions correctly out of 50.
                  </p>
                </div>
                <Link href="/registerform" className=" bg-btnColor text-center font-rubik font-bold w-full text-white py-1 px-4">Apply Now</Link>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <button className='swiper-button-prev-custom bg-white rounded-full text-black absolute text-md md:text-xl lg:text-2xl py-2 px-2 transform translate-y-2/4  md:py-5 lg:px-5 md:top-1/2 top-[60%] left-0 md:-left-10'>
          <RiArrowLeftSLine />
        </button>
        <button className='swiper-button-next-custom text-black right-0 md:-right-10 absolute text-md md:text-2xl py-2 px-2 transform translate-y-2/4  md:py-5 md:px-5 bg-white rounded-full md:top-1/2 top-[60%]'>
          <RiArrowRightSLine />
        </button>

      </div>


    </section>
  );
}
