import Image from 'next/image'
import React from 'react'

const Healthsafety = () => {
  return (
    <section className='py-10'>
      <div className='max-w-screen-2xl mx-auto px-2'>
        <h2 className='text-center mb-7 font-rubik font-medium text-5xl'>
          Health Safety Awareness course
        </h2>
        <p className='text-center font-rubik text-sm md:text-xl leading-8 mb-20'>
          The CITB Health Safety Awareness course, also known as the one-day Health Safety Awareness course, provides a comprehensive understanding of construction site safety and work practices with risk-free workplaces. This informative course is a first step to accident-free workplaces and construction sites. It provides essential health, safety and environmental knowledge of the industry and helps employees and employers understand the potential hazards they face in their work. This course is called ''CITB Health and Safety Awareness(HSA) and is part of the Site Safety Plus (SSP) courses called ''CITB HSA''. Moreover, the course addresses the responsibilities and legal duties individuals must adhere to in construction and civil engineering.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='relative flex items-center justify-center'>
            <img
              src="/images/iPhone-13-Pro-Front 2.png" alt='CESST' height={724} width={357} className="object-contain"  />
            <Image
              src='/images/bgsplash.png' width={630} height={404} alt='CESTT' className='object-cover left-0 right-0  absolute -z-10' />
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col '>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/star-05.png' className='h-auto max-w-full object-contain' /> How to prevent accidents</h3>
              <p className='font-rubik font-normal text-lg'>This course has a complete guide for people willing to join the construction industry as a career, with the latest knowledge in avoiding accidents on construction sites by adopting proactive methods and safety approaches with efficient workflow and reducing the risk of accidents.</p>
            </div>
            <div>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/cube-02.png' className='h-auto max-w-full object-contain' /> Learning Health and Safety Law</h3>
              <p className='font-rubik font-normal text-lg'>The course equips you with a deep understanding of health and safety law's effectively set guidelines in the UK, which outline the legal requirements for risk assessment on construction sites. It covers laws related to health and safety for employees and employers, empowering you to make the site risk-free.</p>
            </div>
            <div>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/cube-04.png' className='h-auto max-w-full object-contain' />Your Role and responsibility in control and management</h3>
              <p className='font-rubik font-normal text-lg'>This includes responsibility for managing roles on the construction site, which include quality control, effective communication, adaptability, material handling, cooperation and management, and ensuring the successful completion of construction projects.</p>
            </div>
            <div>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/star-05.png' className='h-auto max-w-full object-contain' />Learn about Risk assessment and method statements</h3>
              <p className='font-rubik font-normal text-lg'> In this course, you will gain practical skills on how to evaluate risk, implement control measures, and document for communication and compliance process and method statements. This includes a description and sequence of work, health and safety information, wearing PPE, emergency procedures, and the review and approval process.</p>
            </div>
            <div>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/cube-02.png' className='h-auto max-w-full object-contain' /> Executing tasks with safety in mind and seeking guidance when needed</h3>
              <p className='font-rubik font-normal text-lg'> In this course, you will learn about task execution and the importance of seeking guidance on various aspects to ensure safety, efficiency, equipment operations, work-site layout, regulatory compliance and reporting procedures with standards. This emphasis on seeking guidance will provide you with the support and reassurance you need.     </p>
            </div>
            <div>
              <h3 className='mb-4 font-rubik font-medium text-lg flex gap-2'><img src='/images/cube-04.png' className='h-auto max-w-full object-contain' height={24} /> To prevent accidents, one should report any observed unsafe actions promptly</h3>
              <p className='font-rubik font-normal text-lg'>This course also covers when and how to write dangerous acts to prevent accidents on construction sites, which helps identify unsafe acts, gather information, use the correct reporting channels, provide suggestion solutions and promote a positive reporting culture on the construction site.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Healthsafety