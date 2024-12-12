// components/CITBForm.js
import Image from 'next/image';
import FormUi from '../Services/formUi';

export default function CITBForm() {
  return (
    <div className="bg-white">
      <h1 className="text-[44px] font-medium text-gray-800 font-rubik text-center mb-12 mt-8">
        Fill Your Details to <span className="text-orange-500">Apply Online</span> For CITB Test
      </h1>
      <div className="flex flex-col md:flex-row items-center max-w-screen-2xl ml-auto px-9 py-7">
        <div className="md:w-4/12 w-full">
          {/* <form className="space-y-6 flex flex-col gap-7">
            <div>
              <label htmlFor="name" className="block font-poppins text-blackmb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-poppins text-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"

                className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-poppins text-black mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
             
                className="w-full border-b border-gray-400 focus:outline-none focus:border-black"
              />
            </div>
            <button
              type="submit"
              className="bg-btnColor text-white rounded-[20px] text-[20px] font-medium font-poppins py-6   transition"
            >
              Apply Online Now
            </button>
          </form> */}
          <FormUi />
        </div>
        <div className="md:w-8/12  mt-6 md:mt-0 justify-end hidden md:flex">
          <Image
            src="/images/cibt2.png"
            alt="Construction Worker"
            width={654} 
            height={542}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
