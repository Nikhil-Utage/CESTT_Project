import Link from 'next/link'
import React from 'react'
import SearchBarCitb from './citbsearch'


const CitbListOfCenter = () => {
    return (
        <section className='bg-[#E6F7FD] py-16'>
            <div className='max-w-screen-2xl mx-auto px-2'>
                <h2 className='font-rubik font-medium text-[44px] text-center'>List Of CITB Test Centres Across The UK</h2>
                <h3 className='font-rubik text-[27px] text-center'>To book your CIBT Test in you nearest test center. <Link href='/' className='text-linkColor font-bold '>Click Here</Link></h3>
              <SearchBarCitb />
            </div>
        </section>
    )
}

export default CitbListOfCenter