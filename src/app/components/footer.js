import Image from 'next/image'
import Link from 'next/link'
import BackToTopButton from './backToTop';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
         <div className='bg-black'>
            <div className='max-w-screen-xl mx-auto pt-14 pb-28 grid grid-cols-1 gap-16 md:grid-cols-4  md:gap-20 lg:gap-24 px-4'>
                <div className='flex flex-col gap-8'>
                    <Image src="/images/logofoot.png" height="30" width="90"  quality={100} alt='CBIT'/>
                    <p className='text-white font-rubik font-normal text-base md:text-xl lg:text-2xl leading-10 max-w-9/12'>CESTT offers comprehensive solutions for the construction industry in the UK through its online consultancy platform</p>
                    <div className='flex gap-4 text-white text-xl'>
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />

                    </div>
                </div>
                <div className='flex flex-col text-white gap-8'>
                    <h4 className='font-rubik font-medium text-2xl'>Company</h4>
                    <Link href='/' className='font-inter text-lg font-normal'>About</Link>
                    <Link href="/" className='font-inter text-lg font-normal'>Contact us</Link>
                    <Link href="/" className='font-inter text-lg font-normal'>Career</Link>
                    <Link href="/" className='font-inter text-lg font-normal'>Culture</Link>
                </div>
                <div className='flex flex-col text-white gap-8'>
                    <h4 className='font-rubik font-medium text-2xl'>Support</h4>
                    <Link href="/termsandcondition" className=''>Terms and Conditions</Link>
                    <Link href="/privacypolicy" className=''>Privacy Policy</Link>
                    <Link href="/" className='font-inter text-lg font-normal'>Disclaimer </Link>
                    <Link href="/" className='font-inter text-lg font-normal'>Cancellation Policy </Link>
                </div>
                <div className='flex flex-col text-white gap-8' >
                    <h4 className='font-rubik font-medium text-2xl'>Meet Us</h4>
                    <Link href='/' className='font-inter text-lg font-normal flex items-center gap-3'><BsTelephone /> +1234567890</Link>
                    <Link href="/" className='font-inter text-lg font-normal flex items-center gap-3'><MdOutlineForwardToInbox /> info@cestt.com</Link>
                    <Link href="/" className='font-inter text-lg font-normal flex items-center gap-3'><CiLocationOn /> 205. R Street, New York
                        BD23200</Link>
                        <BackToTopButton />
                </div>


            </div>
            <div className='max-w-screen-xl mx-auto text-white flex flex-col md:flex-row justify-between py-5 border-t'>
                <p>Copyright © 2024 CESTT </p>
                <p>All Rights Reserved</p>
            </div>
        </div>
        </>
    )
}

export default Footer