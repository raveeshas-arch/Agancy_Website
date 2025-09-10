import React from 'react'
import { useState } from 'react'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
       
    <div className='bg-white font-poppins'>
      
       <nav className=" fixed w-full top-0  flex items-center justify-between px-6 py-4  bg-white z-1000  ">

        <div className=' flex justify-between  w-full max-w-[1536px] mx-auto '>
            {/* Logo */}
      <div className= "w-[82px] h-[44px] top-[31px] left-[32px]">
       <h1 className="font-bold text-[29px] text-[#1090CB] ">LOGO</h1>
      </div>

      {/* Navigation Links */}
      <div className="md:flex  items-center space-x-[61px] text-[16px] font-normal hidden ">
        <a href="#home" className=" hover:text-[#1090CB] ">Home</a>
        <a href="#about" className='hover:text-[#1090CB]'>About us</a>
        <a href="#services" className='hover:text-[#1090CB]'>Services</a>
        <a href="#blog" className='hover:text-[#1090CB]'>Blog</a>
        <button  className="bg-[#1090CB] w-[125px] h-[41px] rounded-[6px] cursor-pointer hover:bg-sky-400  ">
          <a href='#contact' className=' text-white  text-[13px]'> Contact Us</a>
        </button>

      </div>
        </div>
    

      {/* mobile menu icon */}
      <div className="md:hidden cursor-pointer " onClick={toggleMenu}>



          {isOpen ? <svg
  className="w-8 h-8 text-[#1090CB]"
  fill="none"
  stroke="#1090CB"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M6 18L18 6M6 6l12 12"
  />
</svg> : <svg
  className="w-8 h-8 text-[#1090CB]"
  fill="none"
  stroke="#1090CB"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg> }
           
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-[80px] left-0 w-full bg-white z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="hover:text-[#1090CB]">Home</a>
          <a href="#about" className='hover:text-[#1090CB]'>About us</a>
          <a href="#services" className='hover:text-[#1090CB]'>Services</a>
          <a href="#blog" className='hover:text-[#1090CB]'>Blog</a>
          <button className="bg-[#1090CB] w-[125px] h-[41px] rounded-[6px] cursor-pointer hover:bg-sky-400">
            <a href='#contact' className=' text-white  text-[13px]'> Contact Us</a>
          </button>
        </div>
      </div>
    </nav>
    </div>


    {/* line */}
    <div className='fixed border-[#C4C4C4] h-0 w-full border-[1px]  mt-0'></div>
    </div>

  )
}

export default Navbar