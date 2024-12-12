import Link from 'next/link'
import React from 'react'

const ExpectCall = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
        <div className='py-20 flex justify-center px-5'>
            <Link href="tel:+123456789" className='font-rubik font-semibold text-[25px] px-8 py-6 bg-[#437FC7] text-white rounded-xl'>Expect Advice ? Call : 1234567890</Link>
        </div>
    </div>
  )
}

export default ExpectCall