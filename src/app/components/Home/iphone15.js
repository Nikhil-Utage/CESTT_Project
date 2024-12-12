import Image from 'next/image'
import Link from 'next/link'
import { IoIosCheckmarkCircle } from "react-icons/io"
import PopupModal from '../popup'

const Iphone15 = () => {
    return (
        <div className=' bg-[#E4F5FB] p-5'>
            <div className=' flex max-w-screen-2xl mx-auto items-center flex-col md:flex-row'>
                <figure className='mr-10 flex-grow w-full md:w-6/12'>
                    <Image src='/images/iPhone 15 Pro 2.png' alt='Iphone15pro' width="800" height="550"  className='max-w-full h-auto' />
                </figure>
                <div className='flex-shrink w-full md:w-6/12'>
                    <p className='font-rubik font-medium text-2xl text-[#437FC7] text-center tracking-widest mb-4 md:text-right'>PROCEDURE</p>
                    <h3 className='font-rubik font-medium text-4xl text-center md:text-right mb-8'>Steps To Book With CESTT !!</h3>
                    <div className='flex items-center py-6 px-8 bg-white rounded-2xl gap-5 mb-5'>
                        <span className='text-6xl text-[#003E78]'><IoIosCheckmarkCircle /></span>
                        <p className='font-poppins text-sm md:text-xl'>Fill in the online application and share your details or <br/> <span className='font-semibold text-[#F39C12]'>Call us at 02080994324 </span></p>
                    </div>
                    <div className='flex items-center py-6 px-8 bg-white rounded-2xl gap-5 mb-5'>
                        <span className='text-6xl text-[#003E78]'><IoIosCheckmarkCircle /></span>
                        <p className='font-poppins text-sm md:text-xl'>Get expert advice on CSCS Cards, CITB Tests, NVQs, and Health & Safety training.</p>
                    </div>
                    <div className='flex items-center py-6 px-8 bg-white rounded-2xl gap-5 mb-5'>
                        <span className='text-6xl text-[#003E78]'><IoIosCheckmarkCircle /></span>
                        <p className='font-poppins text-sm md:text-xl'>Pay and finalize your purchase.</p>
                    </div>
                    <div className='flex items-center py-6 px-8 bg-white rounded-2xl gap-5 mb-5'>
                        <span className='text-6xl text-[#003E78]'><IoIosCheckmarkCircle /></span>
                        <p className='font-poppins text-sm md:text-xl'>Provide required paperwork, wait a short period, and receive your CSCS Card at your address.</p>
                    </div>

                </div>
            </div>
            <div className='text-center mt-5 mb-6'>
            <PopupModal buttontext="Apply online" />
            </div>
        </div>
    )
}

export default Iphone15