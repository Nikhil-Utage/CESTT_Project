import Image from "next/image";
import Link from "next/link";
import { TbPhotoFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { HiTicket } from "react-icons/hi2";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-2 md:py-16 mb-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row lg:gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <div className="hidden md:block">
            <h2 className="text-blue-600 text-[23px] tracking-[8px] mb-4 font-rubik font-medium">KEY FEATURES</h2>
            <h3 className="font-medium font-rubik  text-[#191825] mb-8 text-[44px]">We offer best services</h3>
            <p className="text-gray-400 mb-6">
              Enhance your construction career with a CSCS card. Demonstrate your commitment to safety, professionalism,
              and expertise, opening doors to higher-paying roles and prestigious projects.
              <Link href="/registerform" className="text-blue-600 font-semibold ml-1">APPLY NOW</Link>
            </p>
          </div>

          {/* Feature Items */}
          <div className="flex flex-col gap-4 md:gap-0">

            <div className="flex items-center px-[10px] py-3 md:p-8 gap-8 border md:border-none rounded-md">
              <div className="md:w-[100px] w-10 h-10 md:h-[100px] bg-red-500 text-white rounded-full md:rounded-3xl flex items-center justify-center mr-4">
                <IoLocationSharp className="md:h-12 h-4 w-4 md:w-12" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Lorem Ipsum</h4>
                <p className="text-gray-400 text-xs md:text-base font-inter">Lorem Ipsum is not simply random text</p>
              </div>
            </div>

            <div className="flex items-center px-[10px] py-3 md:p-8 gap-8 border rounded-md">
              <div className="md:w-[100px] w-10 h-10 md:h-[100px] bg-yellow-500 text-white rounded-3xl flex items-center justify-center mr-4">
                <MdDateRange className="md:h-12 h-4 w-4 md:w-12" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Instant Booking</h4>
                <p className="text-gray-400 text-xs md:text-base font-inter">It has roots in a piece of classical</p>
              </div>
            </div>

            <div className="flex items-center px-[10px] py-3 md:p-8 gap-8 border md:border-none rounded-md">
              <div className="md:w-[100px] w-10 h-10 md:h-[100px] bg-pink-500 text-white rounded-3xl flex items-center justify-center mr-4">
                <HiTicket className="md:h-12 h-4 w-4 md:w-12" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Get Discounted Coupons</h4>
                <p className="text-gray-400 text-xs md:text-base font-inter">Lorem Ipsum is not simply random text</p>
              </div>
            </div>
            <div className="mt-7 ml-[10px] self-center md:self-start">
              <Link href="/registerform" className="font-rubik py-4 px-8 font-bold rounded-full bg-btnColor text-white inline-block">Apply Now</Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full hidden md:block mt-2 lg:mt-0 relative lg:ml-10">
          <div className="relative max-w-full h-auto rounded-xl z-10">
            {/* Back Image */}
            <Image
              height={845}
              width={800}
              src="/images/contstruction.webp"
              alt="Construction Worker 1"
              className="max-w-full h-auto rounded-full"
            />
          </div>

          <Link
            href="/registerform"
            className="absolute group top-32 left-1/2 bg-white px-8 py-4 rounded-full flex items-center font-rubik font-medium text-[23px] gap-4 shadow z-20 hover:bg-btnColor hover:text-white"
          >
            <TbPhotoFilled className="h-10 w-10 text-[#437FC7] group-hover:text-white" />
            APPLY NOW
          </Link>
        </div>

        {/* {Mobile View} */}
        <div className="w-full mt-12 relative md:hidden px-2">
          <div className="relative w-full h-full overflow-hidden rounded-xl z-10">
            {/* Back Image */}
            <Image
              height={508}
              width={335} 
              src="/images/constructsmall.png"
              alt="Construction Worker 1"
              className="max-w-full h-auto rounded-full"
            />
          </div>

          <Link
            href="registerform"
            className="absolute top-24 left-1/2 bg-white px-5 py-4 md:px-8 md:py-4 rounded-full flex items-center font-rubik font-medium md:text-[23px] text-[10px] md:gap-4 gap-2 shadow z-20 hover:bg-btnColor hover:text-white transform -translate-x-1/2"
          >
            <TbPhotoFilled className="md:h-10 md:w-10 h-4 w-4 text-[#437FC7] group-hover:text-white" />
            APPLY NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
