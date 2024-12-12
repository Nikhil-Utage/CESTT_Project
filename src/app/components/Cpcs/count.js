import React from 'react'

const Count = () => {
  return (
   <section className="bg-[url('/images/Patterns.png')] bg-[#094B72] text-white">
    <div className='max-w-screen-2xl mx-auto py-14 flex flex-col'>
        <div className='text-center mb-12'>
            <h2 className='font-rubik font-bold text-5xl mb-3'>Some count that matters</h2>
            <p className='font-poppins font-normal text-lg tracking-[0.5px]'>Our achievement in the journey depicted in numbers</p>
            
        </div>
<div className='flex justify-center gap-24'>
    <div className='flex flex-col items-center'>
        <span className='font-poppins font-extrabold text-5xl mb-1'>30</span>
        <span className='font-poppins font-normal text-lg tracking-[0.3%]'>Seconds Instant Booking</span>
    </div>
    <span className='h-20 w-[1px] bg-white bg-opacity-50'></span>
    <div className='flex flex-col items-center '>
        <span className='font-poppins font-extrabold text-5xl mb-1'>1000+</span>
        <span className='font-poppins font-normal text-lg tracking-[0.3%]'>Happy Customers</span>
    </div>
    <span className='h-20 w-[1px] bg-white bg-opacity-50'></span>
    <div className='flex flex-col items-center'>
        <span className='font-poppins font-extrabold text-5xl mb-1'>7</span>
        <span className='font-poppins font-normal text-lg tracking-[0.3%]'>Days Fulfillment</span>
    </div>
</div>
    </div>
   </section>
  )
}

export default Count