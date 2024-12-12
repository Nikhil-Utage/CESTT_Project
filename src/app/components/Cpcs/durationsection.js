// components/DurationSection.js

import Image from 'next/image';

const DurationSection = () => {
  return (
    <section>
<h2 className=" font-medium text-gray-800 text-center mb-4 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:mt-2 font-rubik text-5xl">
          Duration of CPCS Cards
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
    
    <div className="relative flex items-center justify-center md:w-1/2">
   
      <div className="absolute transform  -translate-x-[84px] -translate-y-10">
        <Image
          src="/yellow-card.png"
          alt="Yellow Card"
          width={200}
          height={120}
          className="rounded-md bg-yellow-400 shadow-lg"
        />
      </div>

      <div className="absolute transform translate-x-4 -translate-y-2">
        <Image
          src="/green-card.png" 
          alt="Green Card"
          width={200}
          height={120}
          className="rounded-md bg-green-300 shadow-lg"
        />
      </div>

      <div className="relative z-20">
        <Image
          src="/blue-card.png" 
          alt="Blue Card"
          width={220}
          height={130}
          className="rounded-md bg-blue-500 shadow-lg"
        />
      </div>
    </div>

    {/* Right Side - Text Section */}
    <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
      
      <ul className="list-disc text-gray-700 pl-5 space-y-3" style={{ fontFamily: 'Rubik', fontSize: '26px', lineHeight: '37px' }}>
        <li>CPCS Cards are widely recognised in the UK in plant machinery operations and are valid for 2 to 5 years, depending on the category and type of card obtained (e.g., red and blue cards).</li>
        <li>For renewal and re-assessment, staying skilled and updated when it expires is required.</li>
        <li>Want to know more? <a href="#" className="text-blue-500 underline">Click Here</a></li>
      </ul>
    </div>
  </div>
    </section>
  
  );
};

export default DurationSection;
