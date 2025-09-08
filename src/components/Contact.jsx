import React from 'react'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

const Contact = () => {
  return (
 

   <div className="w-full" id="contact">
      <div className="lg:flex justify-around sm:grid grid-cols-1  text-center items-center md:text-left">
        
        {/* Logo  */}
        <div className='lg:ml-[101px] '>
          <h1 className="text-[16px] mt-[87px] font-bold text-[#00329B] ">LOGO</h1>
          <p className="mt-[27px] text-[#515151] max-w-[372px]">
            Lorem ipsum is simply dummy text of the
             printing and typesetting industry.
          </p>
          <p className="mt-[25px] text-[#515151]">@Lorem</p>
        </div>

        {/* About */}
        <div className='mt-[87px] lg:ml[140px] max-w-[372px] '>
          <h2 className="text-[17px] font-semibold">About us</h2>
          <p className="mt-[15px] text-[#515151] leading-[186%]">Lorem</p>
          <p className='mt-[15px] text-[#515151]   leading-[186%]'>Portfolio</p>
          <p className='mt-[15px] text-[#515151]  leading-[186%]'>Careers</p>
          <p className="mt-[15px] text-[#515151]  leading-[186%]">Contact us</p>
        </div>

        {/* Contact */}
        <div className='max-w-[282px]'>
          <h2 className="text-[17px] font-semibold mt-[87px]">Contact us</h2>
          <p className="mt-[20px] max-w-[282px]  text-[#515151]">
            Lorem ipsum is simply dummy text 
            of the printing and typesetting 
            industry.
          </p>
          <p className=" text-[#515151] mt-[11px]">+908 87987 908</p>
        </div>

        {/* Social icons */}

       

           <div className='flex gap-[16px] mt-[87px]  '>
            <div className=' bg-white p-[11px] rounded-full shadow-lg'>
              <img src={facebook} alt="Facebook" className="w-[12px] h-[12px] text-black" />
            </div>
            <div className=' bg-white p-[11px] rounded-full shadow-lg'>
              <img src={twitter} alt="Twitter" className="w-[13px] h-[13px] text-black" />
            </div>
            <div className=' bg-white p-[11px] rounded-full shadow-lg'>
              <img src={instagram} alt="Instagram" className="w-[13px] h-[13px] text-black" />
            </div>
            <div className=' bg-white p-[11.8px] rounded-full shadow-lg'>
              <img src={linkedin} alt="LinkedIn" className="w-[11px] h-[11px] text-black" />
            </div>


        </div>
      </div>
    </div>
  )
}

export default Contact