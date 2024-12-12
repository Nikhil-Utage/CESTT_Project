'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Cardsslider = () => {
  return (
    <div className='bg-[#E6F7FD]'>
      <section className='max-w-[1400px] mx-auto py-14 px-6 relative'>
        <div className='flex items-center justify-between'>
          <div>
            <span className='font-rubik font-medium  md:text-[23px] text-[#437FC7] tracking-widest hidden md:block'>YOUR TOP CHOICE</span>
            <h2 className='font-rubik font-medium text-[35px] text-[#191825] text-center md:text-start'>Your Shortcut to CSCS and Construction Training!</h2>
          </div>
          <div className=" gap-8 hidden md:flex">
            <div className="swiper-button-prev-custom md:w-24 w-16 h-16 flex justify-center items-center md:h-24 cursor-pointer text-black bg-white hover:text-white hover:bg-[#437FC7] rounded-full">
              <HiOutlineArrowNarrowLeft className="h-6 w-6" />
            </div>
            <div className="swiper-button-next-custom md:w-24 w-16 h-16 flex justify-center items-center md:h-24 cursor-pointer text-black bg-white hover:text-white hover:bg-[#437FC7] rounded-full">
              <HiOutlineArrowNarrowRight className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col gap-6 mt-10 items-center">
          <div className="bg-base-100 rounded-[32px] overflow-hidden">
            <figure className=' relative w-full h-[350px] transform transition duration-300 hover:scale-105'>
              <Image
               fill 
               className='object-cover'
                src="/images/card1.jpg"
                alt="Cestt"
              />
            </figure>
            <div className='p-8'>
              <p className='font-rubik font-medium text-[23px]'>Get Expert Advice on CSCS Cards <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
            </div>
          </div>

          <div className="card card-compact bg-base-100 rounded-[32px] overflow-hidden">
            <figure className='relative w-full h-[350px] transform transition duration-300 hover:scale-105'>
              <Image
               fill
              className='object-cover'
                src="/images/card2.jpg"
                alt="Cestt"
                
              />
            </figure>
            <div className='p-8'>
              <p className='font-rubik font-medium text-[23px]'>Desired CITB Test Date and Location <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
            </div>
          </div>

          <div className="card card-compact bg-base-100 rounded-[32px] overflow-hidden">
            <figure className='relative w-full h-[350px] transform transition duration-300 hover:scale-105'>
              <Image
                src="/images/card3.jpg"
                alt="Cestt"
               fill
               className='object-cover'
                
              />
            </figure>
            <div className='p-8'>
              <p className='font-rubik font-medium text-[23px]'>Obtain a Construction Qualification <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
            </div>
          </div>
        </div>

        <div className="cards mt-10 hidden md:flex max-w-6xl mx-auto px-5 items-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
        
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Navigation]}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 10,
              
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
               
              },
            }}
          >

            <SwiperSlide>
              <div className="card card-compact bg-base-100  rounded-[32px] overflow-hidden max-w-[350px]">
                <figure className='transform transition duration-300 hover:scale-105'>
                  <Image
                    height='350'
                    width='350'
                    src="/images/card1.jpg"
                    alt="Cestt"

                  />
                </figure>
                <div className='p-8'>
                  <p className='font-rubik font-medium text-[23px]'>Get Expert Advice on CSCS Cards <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
                </div>


              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card-compact bg-base-100  rounded-[32px] overflow-hidden max-w-[350px]">
                <figure className='transform transition duration-300 hover:scale-105'>
                  <Image
                    height='350'
                    width='350'
                    src="/images/card2.jpg"
                    alt="Cestt"
                  />
                </figure>
                <div className='p-8'>
                  <p className='font-rubik font-medium text-[23px]'>Desired CITB Test Date and Location <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card-compact bg-base-100  rounded-[32px] overflow-hidden max-w-[350px]">
                <figure className='transform transition duration-300 hover:scale-105'>
                  <Image
                    src="/images/card3.jpg"
                    alt="Cestt"
                    height='350'
                    width='350'
                  />
                </figure>
                <div className='p-8'>
                  <p className='font-rubik font-medium text-[23px]'>Obtain a Construction Qualification <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card card-compact bg-base-100  rounded-[32px] overflow-hidden max-w-[350px]">
                <figure className='transform transition duration-300 hover:scale-105'>
                  <Image
                    src="/images/card3.jpg"
                    alt="Cestt"
                    height='350'
                    width='350'
                  />
                </figure>
                <div className='p-8'>
                  <p className='font-rubik font-medium text-[23px]'>Get Expert Advice on CSCS Cards <Link href='/registerform' className="text-[#FF9C00] font-semibold">Apply Now</Link></p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <img src="/images/OBJECTS.png" alt='cestt' className='absolute right-8 top-48 hidden md:block' />
      </section>
    </div>
  )
}

export default Cardsslider;
