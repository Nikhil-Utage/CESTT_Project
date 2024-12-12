// components/CpcsCard.js

import Image from 'next/image';

const CpcsCard = () => {
  return (
    <div className="grid grid-cols-12 mb-16">
      <div className=" col-span-7 w-full bg-[#E6F7FD] rounded-br-[12rem] relative z-10 pr-24 pl-28 pt-10 pb-28">
      <h2 className="text-5xl text-center  font-rubik font-medium mb-10 mt-12" >About CPCS Card</h2>
        <div className='border-l-8 border-[#004DA9] pl-8'>
        <p className="text-lg font-rubik font-normal text-gray-700">
          CPCS stands for Construction Plant Competence Scheme, which issues
          cards to demonstrate that an individual has the skills, knowledge, and
          competence to work safely in the construction plant and machinery
          sector. It was introduced in the UK as the Construction Plant
          Competence Scheme (CPCS) in 2003. You can become certified in around
          64 categories of construction trades. The scheme was set up to ensure
          the health and safety of individuals and site operatives when working
          with heavy or light vehicle machinery on site like forklifts,
          excavator 360, telescopic handlers, dozers, road rollers, and many
          more. Now, the question is, who can get a CPCS Card? Before applying
          for this card, the individual has to complete its requirements. It
          does not matter whether you are applying for the card for the first
          time, already have this card, or have expertise in plant operations.
        </p>
        <button className="bg-btnColor text-white py-5 rounded-full px-14 font-medium font-rubik text-lg">
          Apply Now
        </button>
        </div>
      </div>

   
      <div className="relative mt-8 col-span-5">
        {/* Green Card */}
        <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
          <Image
            src="/images/cpcs/hero.png" 
            alt="Green Card"
            width={160}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>


        <div className="absolute top-4 left-4 transform -translate-x-2 -translate-y-2">
          <Image
            src="/yellow-card.png" 
            alt="Yellow Card"
            width={160}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>

   
        <div className="relative z-20">
          <Image
            src="/blue-card.png" 
            alt="Blue Card"
            width={200}
            height={120}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CpcsCard;
