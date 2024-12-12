import Image from 'next/image';
import React from 'react';

const Origin = () => {
    return (
        <section className='max-w-screen-xl mx-auto py-16 px-8'>
            <div className=' grid-cols-1 gap-44 hidden md:grid'>

                {/* First Column: Image + Text */}
                <div className='flex gap-20 text-center md:text-start md:gap-44 flex-col md:flex-row'>
                    <div className='md:w-1/2 '>
                        <h2 className="text-[40px] font-extrabold font-inter text-[#242331] mb-10 relative after:left-0 after:bottom-0 after:rounded-full after:content-[''] after:h-1 after:w-32 after:absolute after:bg-btnColor pb-5">
                            Our Origin
                        </h2>
                        <p className="text-gray-600 font-rubik font-normal text-[20px]">
                        CESTT was founded with a mission to simplify the process of obtaining CSCS cards for construction professionals across the UK. Recognizing the challenges and complexities involved, our founders, who have extensive experience in the construction industry, set out to create a service that would provide clear, straightforward guidance and support.

From our humble beginnings, we have grown into a trusted resource for thousands of construction workers, helping them achieve their certification goals and advance their careers. Our commitment to excellence and customer satisfaction has been the driving force behind our success, and we continue to innovate and improve our services to meet the evolving needs of our clients.
                        </p>
                    </div>
                    <div className=" w-full md:w-1/2 rounded-[60px] overflow-hidden">
                        <Image
                            src="/images/aboutcard2.jpg"
                            alt="Workers at site"
                            layout="responsive"
                            height={365}
                            width={457}

                        />
                    </div>
                </div>

                {/* Second Column: Image + Text */}
                <div className='flex gap-20 text-center md:text-start md:gap-44  flex-col-reverse md:flex-row'>
                    <div className=' w-full md:w-1/2 mb-8 md:mb-0 rounded-[60px] overflow-hidden'>
                        <Image
                            src="/images/aboutcard1.jpg"
                            alt="Worker showing card"
                            height={365}
                            width={457}
                            layout="responsive"

                        />
                    </div>
                    <div className='md:w-1/2 '>
                        <h2 className="text-[40px] font-extrabold font-inter text-[#242331] mb-10 relative after:left-0 after:bottom-0 after:rounded-full after:content-[''] after:h-1 after:w-32 after:absolute after:bg-btnColor pb-5">
                            Our Expertise
                        </h2>
                        <p className="text-[#272727] font-rubik font-normal text-[20px]">
                        We offer construction management courses, CSCS construction certificates, CITB health and safety awareness exams, NVQ training certificates and site assessments. Our commitment is more than just the plastic cards you hold in your hand. We make sure you have the knowledge and procedures to enter construction sites. We are a leading advisor on construction certificates, exams, NVQ training exams and courses in the UK, and we go beyond just providing information; we are building a community of experts committed to higher standards and improved safety. </p>
                    </div>
                </div>


            </div>


            {/* {Mobile View} */}
            <div className='grid grid-cols-1 gap-16 md:hidden'>
                {/* First Section: Our Origin */}
                <div className='flex flex-col items-center md:items-start md:flex-row md:gap-16'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <h2 className="text-[25px] text-center font-extrabold font-inter text-[#242331] mb-6 relative after:content-[''] after:h-1 after:w-20 after:absolute after:bg-btnColor after:right-1/2 transform after:translate-x-1/4 after:bottom-0 after:rounded-full pb-3">
                            Our Origin
                        </h2>
                        <div className=" md:h-[365px] rounded-[60px] overflow-hidden mb-6">
                            <Image
                                src="/images/aboutcard2.jpg"
                                alt="Workers at site"
                                layout="responsive"
                                height={365}
                                width={457}
                                className='h-auto max-w-full'
                            />
                        </div>
                        <p className="text-gray-600 font-rubik font-normal text-sm text-center">
                            Lorem ipsum dolor sit amet consectetur. Velit aliquet sed eu varius ut dictum quis blandit nunc. Curabitur velit pretium sed turpis condimentum. Tellus convallis fames et elementum quam a. Et eu egestas lectus vulputate lobortis a suspendisse dignissim eget. Nullam eleifend tincidunt dolor ultrices etiam lacus. Lorem ipsum dolor sit amet consectetur. Velit aliquet sed eu varius ut dictum quis blandit nunc. Curabitur velit pretium sed turpis condimentum.
                        </p>
                    </div>
                </div>

                {/* Second Section: Our Expertise */}
                <div className='flex flex-col items-center md:items-start md:flex-row md:gap-16'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <h2 className="text-[25px] font-extrabold font-inter text-[#242331] mb-6 text-center relative after:content-[''] after:h-1 after:w-20 after:absolute after:bg-btnColor after:right-2/4 transform after:translate-x-1/4 after:bottom-0 after:rounded-full pb-3">
                            Our Expertise
                        </h2>
                        <div className=" md:h-[365px] rounded-[60px] overflow-hidden mb-6">
                            <Image
                                src="/images/aboutcard1.jpg"
                                alt="Worker showing card"
                                height={365}
                                width={457}
                                layout="responsive"
                                className='h-auto max-w-full'
                            />
                        </div>
                        <p className="text-[#272727] font-rubik font-normal text-center text-sm">
                            Lorem ipsum dolor sit amet consectetur. Velit aliquet sed eu varius ut dictum quis blandit nunc. Curabitur velit pretium sed turpis condimentum. Tellus convallis fames et elementum quam a. Et eu egestas lectus vulputate lobortis a suspendisse dignissim eget. Nullam eleifend tincidunt dolor ultrices etiam lacus. Lorem ipsum dolor sit amet consectetur. Velit aliquet sed eu varius ut dictum quis blandit nunc. Curabitur velit pretium sed turpis condimentum. Tellus convallis fames et elementum quam a.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Origin;
