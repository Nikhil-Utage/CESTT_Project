import Image from 'next/image'
import React from 'react'

const Instantbook = () => {
  return (
    <div className='max-w-full bg-[#E2EFFF] p-10 md:p-24'>
<div className='boxes grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
    <div className='py-6 px-7 bg-white hover:bg-[#437FC7] group'>
        <Image src='/images/icn resize icn-md.png' className='mb-2 group-hover:brightness-0 group-hover:invert' alt='Instant Booking' width="24" height={24}/>
        <span className='text-[#252B42] font-mont text-base md:text-lg  font-bold group-hover:text-white'>Instant Booking</span>
    </div>
    <div className='py-6 px-7 bg-white hover:bg-[#437FC7] group'>
        <Image src='/images/Frame.png' className='mb-2 group-hover:brightness-0 group-hover:invert' alt='7 Days Fulfillment'  width="24" height={24}/>
        <span className='text-[#252B42] font-mont text-base md:text-lg font-bold group-hover:text-white'>7 Days Fulfillment</span>
    </div>
    <div className='py-6 px-7 bg-white hover:bg-[#437FC7] group'>
        <Image src='/images/Frame (4).png' className='mb-2 group-hover:brightness-0 group-hover:invert' alt='1000’s of Happy Customers' width="24" height={24}/>
        <span className='text-[#252B42] font-mont text-base md:text-lg   font-bold group-hover:text-white' >1000’s of Happy Customers</span>
    </div>
    <div className='py-6 px-7 bg-white hover:bg-[#437FC7] group'>
        <Image src='/images/icn resize icn-md.png' className='mb-2 group-hover:brightness-0 group-hover:invert' alt='Market Understanding' width="24" height={24}/>
        <span className='text-[#252B42] font-mont text-base md:text-lg  font-bold group-hover:text-white'>Market Understanding</span>
    </div>

</div>
    </div>
  )
}

export default Instantbook