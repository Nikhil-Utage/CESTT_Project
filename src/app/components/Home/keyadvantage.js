import Link from 'next/link'
import React from 'react'

const Keyadvantage = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <section className='my-8 px-5'>
        <div className='flex justify-center items-center'>
          <h2 className='font-rubik font-medium text-[35px] text-center after:bottom-0 after:right-24 relative after:content-[""] after:absolute after:h-1 after:w-28 md:after:left-0 after:rounded md:after:-bottom-5 after:bg-[#437FC7]'>Key advantages of CSCS card ownership</h2>
        </div>
        <div className='mt-24 px-2 md:px-5 '>
          <div className='flex gap-7 items-center flex-col-reverse md:flex-row '>
            <div className='w-full md:6/12 p-10'>
              <h3 className='font-mont font-medium text-center md:text-right text-2xl mb-4'>Widely Recognized</h3>
              <p className='font-mont text-base  md:text-right text-center leading-8'>The The CSCS Card is the industry benchmark in the UK construction sector, providing a standardized method to verify workers' skills and qualifications, streamlining the hiring process for employers.
               <Link href="/registerform" className='font-mont font-bold text-[#F39C12]'> Apply Now</Link></p>
            </div>
            <div className='w-full md:6/12 flex items-center flex-col md:flex-row '>

              <span className='hidden md:block h-10 w-10  rounded-full bg-[#437FC7]'></span>


              <span className='h-2 w-full hidden md:block relative -z-10 bg-[#437FC7]'></span>

              <div>
                <span className='w-[140px] border-4 h-[140px] bg-white flex flex-col justify-center relative before:absolute items-center font-mont font-bold rounded-full before:content-[""] before:h-[180px] before:w-[180px] before:rounded-full before:bg-[#437FC7] before:-z-10'>01
                  <img src='/images/Artificial Intelligence 2.png' alt='Artificial Intelligence 2.png' /></span>
              </div>
            </div>
          </div>
          <div className='flex gap-7 items-center md:flex-row-reverse flex-col-reverse '>
            <div className='w-full md:w-5/12 p-10'>
              <h3 className='font-mont font-medium text-center md:text-start  text-2xl mb-4'>Access To Construction Sites</h3>
              <p className='font-mont text-base  text-center md:text-start'>Access to construction sites is restricted to individuals possessing a valid CSCS Card. As a mandatory requirement, workers must present their CSCS Card as proof of qualification and identity before being granted site entry. <Link href="/" className='font-mont font-bold text-[#F39C12]'>Call Now</Link></p>
            </div>
            <div className='w-7/12 md:w-7/12 flex items-center flex-col md:flex-row-reverse'>

              <span className=' h-10 w-10 hidden md:block rounded-full bg-[#437FC7]'></span>


              <span className='h-2 w-full hidden md:block relative -z-10 bg-[#437FC7]'></span>

              <div>
                <span className='w-[140px] border-4 h-[140px] bg-white flex flex-col justify-center relative before:absolute items-center font-mont font-bold rounded-full before:content-[""] before:h-[180px] before:w-[180px] before:rounded-full before:bg-[#437FC7] before:-z-10'>02
                  <img src='/images/Robot 1.png' alt='Artificial Intelligence 2.png' /></span>
              </div>
            </div>
          </div>
          <div className='flex gap-7 items-center flex-col-reverse md:flex-row '>
            <div className='w-full md:6/12 p-10'>
              <h3 className='font-mont font-medium text-center md:text-right text-2xl mb-4'>Client satisfaction</h3>
              <p className='font-mont text-base  md:text-right text-center leading-8'>The presence of CSCS-qualified workers on construction projects enhances client and stakeholder confidence. This assurance stems from the knowledge that the workforce is adequately trained and prepared to manage unforeseen challenges. Such a skilled and certified team fosters stronger client relationships, increased trust, and ultimately, more successful project outcomes.
              <Link href='/registerform' className='font-mont font-bold text-[#F39C12]'> Apply Online</Link></p>
            </div>
            <div className='w-full md:6/12 flex items-center flex-col md:flex-row'>

              <span className=' h-10 w-10 hidden md:block  rounded-full bg-[#437FC7]'></span>


              <span className='h-2 w-full hidden md:block relative -z-10 bg-[#437FC7]'></span>

              <div>
                <span className='w-[140px] border-4 h-[140px] bg-white flex flex-col justify-center relative before:absolute items-center font-mont font-bold rounded-full before:content-[""] before:h-[180px] before:w-[180px] before:rounded-full before:bg-[#437FC7] before:-z-10'>03
                  <img src='/images/51932164 1.png' alt='Artificial Intelligence 2.png' /></span>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Keyadvantage