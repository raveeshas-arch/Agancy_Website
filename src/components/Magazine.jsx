import React from 'react'
import img8 from '../assets/img8.png'
import img20 from "../assets/img20.png";
const Magazine = () => {
  return (
    <div id='blog'>
         <div className="flex flex-col lg:flex-row gap-[114px]  mt-[55px] lg:mr-[123px] mx-6 justify-center items-center ">


           {/* Image  */}
           <div className=" flex mt-[-55px]  ">
             <img src={img8} alt="mobile" className="w-[681px] h-[521px] " />
           </div>


           {/* right */}
   
           <div>
             {/* Lorem text */}
             <div className="flex gap-[25px] mt-[160px]">
               <div className="max-w-[60px] bg-[#1090CB] rounded-full p-[16px]">
                 <img src={img20} alt="image" className="w-[26px] h-[26px]   " />
               </div>
               <div className="max-w-[308px] h-[55px]">
                 <h1 className="font-medium text-[17px] leading-[175%] ">
                   Lorem ipsum is simply dummy text
                 </h1>
                 <p className="font-normal text-[#868686] leading-[175%]">
                   Lorem ipsum is simply dummy text
                 </p>
               </div>
             </div>


             <div className=" font-bold max-w-[516px] h-[389px] mt-[43px]">
               <h1 className=" font-semibold text-[30px] leading-[170%]">
                 <span className="text-[#1090CB]">Lorem Ipsum</span> is simply
                 dummy
                 <br /> text of the printing.
               </h1>
               <p className="text-[#545454] max-w-[476px] mt-6 text-[16px] leading-[170%] font-semibold">
                 KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                 applications and website builders measuring dozens of completed
                 projects. We build and develop mobile applications for several top
                 platforms, including Android & IOS.
               </p>
             </div>
           </div>
   
          
         </div>
       </div>
  )
}

export default Magazine