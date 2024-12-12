import React from "react";
import Link from "next/link";
import Image from "next/image";

const CSCSCardLayout = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">

<div className="py-14">
      <div className="text-center mb-8 px-5">
        <h1 className="text-[44px] font-rubik font-medium">CSCS Card Overview and Eligibility</h1>
        <button className="mt-6 px-8 py-4 bg-[#437FC7] text-white text-[22px] font-medium font-rubik rounded-full">Book Now</button>
        <p className="text-[#191825] font-rubik text-[25px] font-normal mt-6">
          Discover the perfect CSCS card to propel your construction career forward. Our experts will guide you through eligibility and help you choose the right card. Contact us today to unlock your potential: <Link className="text-[#FCB500] font-semibold" href="tel: 0123456789">0123456789 </Link> 
        </p>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5">
       
        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs1.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Apprentice Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
            <li className="">Card Name: CSCS Black Manager Card</li>
            <li className="">Validity: 5 Years</li>
            <li className="">Eligibility: CITB MAP Test & NVQ Level 6 and Above</li>
            <li>How To Apply?: <Link href="/registerform" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>
       

        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs2.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Gold Supervisor Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Black Manager Card</li>
    <li>Validity: 5 Years</li>
    <li>Eligibility: CITB MAP Test & NVQ Level 6 and Above</li>
            <li>How To Apply?: <Link href="/registerform" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>
       

        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs3.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Green Labourer Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Labourer Card</li>
    <li>Validity: 5 Years</li>
    <li>Eligibility: CITB Test & 1 Day Course</li>
            <li>How To Apply?: <Link href="/registerform" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>
       

        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs4.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Red Provisional Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Provisional Card</li>
    <li>Validity: 6 Months</li>
    <li>Eligibility: CITB Test</li>
            <li>How To Apply?: <Link href="/registerform" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>
       

        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs5.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS AQP Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS AQP Card</li>
    <li>Validity: 5 Years</li>
    <li>Eligibility: CITB MAP Test & Qualification (Degree)</li>
            <li>How To Apply?: <Link href="/registerform" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs6.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS PQP Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS PQP Card</li>
  <li>Validity: 5 Years</li>
  <li>Eligibility: CITB MAP Test & Qualification</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs7.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Experienced Worker Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Experience Worker Card</li>
  <li>Validity: 1 Year</li>
  <li>Eligibility: CITB Test & NVQ Registration</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs8.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS TSM Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Technical Supervisor Or Manager Card</li>
  <li>Validity: 3 Years</li>
  <li>Eligibility: CITB MAP Test & NVQ Level 3 Registration (Supervisor) Or NVQ Level</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs9.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Blue Skilled Worker Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Blue Skilled Worker Card</li>
  <li>Validity: 5 Years</li>
  <li>Eligibility: CITB Test & NVQ/SVQ Level 2</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs10.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Black Manager Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
            <li className="">Card Name: CSCS Black Manager Card</li>
            <li className="">Validity: 5 Years</li>
            <li className="">Eligibility: CITB MAP Test & NVQ Level 6 and Above</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>


        <div className="py-8 px-9 text-black rounded-xl shadow-custom-card">
          <Image src="/images/cscs11.jpg" alt="CSCS Apprentice Card" width={300} height={200} className="rounded-t-lg object-cover" layout="responsive" />
          <h2 className="text-[25px] mt-4 text-center font-rubik font-medium ">CSCS Gold Advance Craft Card</h2>
          <ul className="mt-2 text-[21px] font-rubik font-normal list-disc">
          <li>Card Name: CSCS Gold Advance Craft Card</li>
  <li>Validity: 5 Years</li>
  <li>Eligibility: CITB Test & Qualification</li>
            <li>How To Apply?: <Link href="/book-online" className="text-linkColor ">
            Book Online
          </Link></li>
          </ul>
        </div>
               



      </div>
    </div>
    </section>

  );
};

export default CSCSCardLayout;
