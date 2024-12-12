

import Image from "next/image";

export default function MobileHeroSection() {
    return (
      <div className="flex flex-col items-center bg-[#e6f7fd] pb-4">
   
        <div className="relative w-full max-w-md text-center">
            <div className="relative min-h-[240px] w-full">
            <Image
            src="/images/mobileHero.jpg"
            fill
            alt="Construction worker"
            className="max-w-full h-auto  object-cover"
          />
            </div>
          <div className="absolute inset-0 flex flex-col gap-8 justify-center px-16 items-center bg-black bg-opacity-5 text-white p-4">
            <h1 className="text-[26px] font-inter">Hassle-Free Method For Securing Your CSCS Card</h1>
            <button className=" text-white py-2 px-10 rounded-lg bg-btnColor">
              Apply Now
            </button>
          </div>
        </div>
  
     
    
     <div className="grid grid-cols-3  gap-3 mt-8 px-4">
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-4 group hover:bg-btnColor hover:text-white">
            <div className="bg-[#E6F7FD] p-2 rounded-full group-hover:bg-white">
              <img src="/images/icn resize icn-md.png" alt="Instant Booking" className="w-4 h-4"/>
            </div>
            <p className="mt-2 font-mont text-[10.45px] font-bold tracking-wider">Instant Booking</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-4 group hover:bg-btnColor hover:text-white">
            <div className="bg-[#E6F7FD] p-2 rounded-full">
              <img src="/images/Frame.png" alt="7 Days Fulfillment" className="w-4 h-4"/>
            </div>
            <p className="mt-2 font-mont  text-[10.45px] font-bold tracking-wider">7 Days Fulfillment</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white rounded-3xl p-4 group hover:bg-btnColor hover:text-white">
            <div className="bg-[#E6F7FD] p-2 rounded-full">
              <img src="/images/Frame (4).png" alt="1000+ Happy Customers" className="w-4 h-4"/>
            </div>
            <p className="mt-2 font-mont  text-[10.45px] font-bold tracking-wider">1000+ Happy Customers</p>
          </div>
        </div>
     

  
      
        <div className="mt-8">
          <img
            src="/images/mobihero.png"
            alt="Worker"
            className="w-[284px] h-[225px] rounded-full object-cover"
          />
        </div>
      </div>
    );
  }
  