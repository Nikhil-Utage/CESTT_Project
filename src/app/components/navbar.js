"use client"
import Link from 'next/link';
import { useState } from 'react';
import { RiHome5Line } from "react-icons/ri";
import { LuPieChart } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  const isActive = (path) => pathname === path


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between items-center">

          <div className="flex-shrink-0">
            <Link href="/" className="flex relative  h-16 w-24 items-center">
              <Image
                src="/images/navlogo.png"
                fill
                alt="CITB"
                className='object-cover'
                quality={100}
                sizes="(max-width: 768px) 100vw, 200px"

              />
            </Link>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`flex items-center space-x-3 text-gray-700 hover:text-gray-90  py-[10px] px-4 rounded-lg ${isActive('/') ? 'bg-[#E9F1FF] !text-[#1F78FF]' : 'text-[#444750]'}`}>
              <RiHome5Line className="h-5 w-5" />
              <span className='font-poppins text-sm'>Home</span>
            </Link>
            <Link href="/citb" className={`flex items-center space-x-3 text-gray-700 hover:text-gray-90  py-[10px] px-4 rounded-lg ${isActive('/citb') ? 'bg-[#E9F1FF] !text-[#1F78FF]' : 'text-[#444750]'}`}>
              <LuPieChart className="h-5 w-5" />
              <span className='font-poppins text-sm'>CITB Test Centers</span>
            </Link>
            <Link href="/services" className={`flex items-center space-x-3 text-gray-700 hover:text-gray-90  py-[10px] px-4 rounded-lg ${isActive('/services') ? 'bg-[#E9F1FF] !text-[#1F78FF]' : 'text-[#444750]'}`}>
              <IoCubeOutline className="h-5 w-5" />
              <span className='font-poppins text-sm'>Services</span>
            </Link>
            <Link href="/courses" className={`flex items-center space-x-3 text-gray-700 hover:text-gray-90  py-[10px] px-4 rounded-lg ${isActive('/courses') ? 'bg-[#E9F1FF] !text-[#1F78FF]' : 'text-[#444750]'}`}>
              <RiHome5Line className="h-5 w-5" />
              <span className='font-poppins text-sm'>Courses</span>
            </Link>
            <Link href="/about" className={`flex items-center space-x-3 text-gray-700 hover:text-gray-90  py-[10px] px-4 rounded-lg ${isActive('/about') ? 'bg-[#E9F1FF] !text-[#1F78FF]' : 'text-[#444750]'}`}>
              <CiUser className="h-5 w-5" />
              <span className='font-poppins text-sm'>About</span>
            </Link>
          </div>

          {/* Right: Button */}
          <div className="hidden md:flex">
            <Link href="/signup">
              <button className=" bg-[#437FC7] text-white rounded-full font-rubik font-medium text-sm py-4 px-8 hover:bg-blue-600">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">
            Home
          </Link>
          <Link href="/citb" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">
            CITB Test Centers
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">
            Services
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">
            About
          </Link>
          <Link href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
