import React from 'react'

const Navbar = () => {
  return (
    <div>
       
    <div className='bg-white font-poppins'>
      
       <nav className=" fixed w-full top-0  flex items-center justify-between px-6 py-4  bg-white z-1000  ">

        <div className=' flex justify-between  w-full max-w-[1536px] mx-auto '>
            {/* Logo */}
      <div className= "w-[82px] h-[44px] rotate-0 opacity-100 top-[31px] left-[32px]">
       <h1 className="font-bold  text-[29px] text-[#1090CB] ">LOGO</h1>
      </div>

      {/* Navigation Links */}
      <div className="md:flex  items-center space-x-[61px] text-[16px] font-normal hidden  ">
        <a href="#home" className=" hover:text-[#1090CB] ">Home</a>
        <a href="#about" className='hover:text-[#1090CB]'>About us</a>
        <a href="#services" className='hover:text-[#1090CB]'>Services</a>
        <a href="#blog" className='hover:text-[#1090CB]'>Blog</a>
        <button className="bg-[#1090CB] w-[125px] h-[41px] rounded-[6px] cursor-pointer hover:bg-sky-400  ">
          <h1 className=' text-white  text-[13px]'> Contact Us</h1>
        </button>

      </div>
        </div>
    

      {/* mobile menu icon */}
      <div className="md:hidden">
        <button className="text-[#1090CB] ">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor" //use current color [#1090CB]
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
</nav>
    </div>


    {/* line */}
    {/* <div className='fixed border-[#C7C7C7] h-0 w-full border-[0.7px] mt-[75px]'></div> */}
    </div>

  )
}

export default Navbar