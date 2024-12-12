// components/CITBSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function CITBSection() {
  return (
    <div className="flex flex-col md:flex-row py-5 max-w-screen-2xl gap-16  bg-white">
      <div className="md:w-1/2 w-full hidden md:block">
        <Image
          src="/images/cibt1.png"
          alt="Construction Worker"
          height={660}
          width={775}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-8 px-8">
        <h2 className="text-[44px] text-gray-800 mb-4 font-rubik font-medium text-center md:text-start">What is CITB Test?</h2>
        <p className="text-gray-400 leading-9 mb-4 font-inter text-lg text-center md:text-start">
          The CITB Health, Safety, and Environment (HS&E) Test is a compulsory computer-based assessment
          for construction workers. Commonly known as the CITB Touch Screen Test, it evaluates knowledge
          of health, safety, and environmental regulations. Passing this 45-minute, 50-question exam is
          essential for acquiring a CSCS card. The test is divided into three tiers based on job roles.
        </p>
        <div className="space-y-4">
          <div className='p-8'>
            <Link href="/registerform" className="text-[#191825] font-rubik font-medium text-[23px]">
              Health, safety & environment test for operatives. <span className="text-linkColor font-bold">Apply Now</span>
            </Link>
          </div>
          <div className='p-8 border rounded-[32px]'>
            <Link href="/registerform" className="text-[#191825] font-rubik font-medium text-[23px]">
              Health, safety & environment test for managers and professionals. <span className="text-linkColor font-bold">Apply Now</span>
            </Link>
          </div>
          <div className='p-8'>
            <Link href="/registerform" className="text-[#191825] font-rubik font-medium text-[23px]">
              Health, safety & environment test for specialists. <span className="text-linkColor font-bold">Apply Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
