// components/BenefitsSection.js

import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Compliance and Regulations',
      description:
        'The CPCS ensures compliance and regulations matching with the standards of the UK, which provides UK certification recognized in Europe through mutual agreements with national schemes with a commitment to excellence and compliance with optimal methods in machinery handling.',
      icon: '/images/User Arrows.png', 
    },
    {
      title: 'Industry Recognition',
      description:
        'An Individual holding a CPCS Card proves his competence and qualification with knowledge of plant operator machines by recognizing the skills in the industry.',
      icon: '/images/Circle Layer.png',
    },
    {
      title: 'Career Advancement',
      description:
        ' The UK highly recognizes the CPCS card for individuals working or planning to work as plant operators. It can open the door to new opportunities and career progression in the construction industry, which begins for individuals and employers to promote certified and skilled plant operators for construction and related industries',
      icon: '/images/User Arrows.png',
    },
    {
      title: 'Enhanced Safety',
      description:
        'We provide a complete range of services for the continuity of your business activities.',
      icon: '/images/Bag.png',
    },
    {
      title: 'Information and Technology',
      description:
        'If not followed by the existing regulation which might cause legal uncertainty and business uncertainty.',
      icon: '/images/Rocket.png',
    },
    {
      title: 'Information and Technology',
      description:
        'If not followed by the existing regulation which might cause legal uncertainty and business uncertainty.',
      icon: '/images/Rocket.png',
    },
  ];

  return (
    <section className='bg-[#E4F7FD]'>
 <div className=" p-8 md:flex items-center md:justify-between max-w-screen-2xl mx-auto  md:p-16">
      {/* Left Side - Text Section */}
      <div className="mb-8 md:mb-0 md:w-4/12">
        <h2 className=" mb-9 font-rubik font-medium text-5xl">What are the benefits of CPCS Card?</h2>
        <button className="bg-[#004DA9] leading-[18px] text-white py-6 rounded-full px-14 text-[22px] font-rubik font-medium ">
          Apply Now
        </button>
      </div>

      {/* Right Side - Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-8/12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 h-[432px] flex flex-col items-start shadow-md rounded-lg border border-blue-100 hover:shadow-lg transition">
            <div className="">
              <Image
                src={benefit.icon}
                alt={`${benefit.title} icon`}
                width={37}
                height={37}
                className="mr-2"
              />
              <h3 className="font-medium font-rubik text-2xl leading-10 mb-3">{benefit.title}</h3>
            </div>
            <p className="text-sm font-rubik font-light text-[#8B8C8C] mb-4 leading-6">{benefit.description}</p>
            <button className="text-linkColor font-rubik font-medium text-sm leading-6">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default BenefitsSection;
