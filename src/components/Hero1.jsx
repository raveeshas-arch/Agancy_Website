import React from 'react'
import Navbar from './Navbar'
import img2 from '../assets/img2.png'
import Hero2 from './Hero2'


const Hero1 = () => {
  return (

  
   <div className="relative ">


   <Navbar/>



 <div id='home' className=' bg-[#e3ebf7] '>

       <div className=" mt-[75px] ">

         {/* <img src={frame1} className=' absolute ml-[1393px] w-[47px] h-[366px] mt-[170px]'/> */}

            <div className=" relative grid lg:grid-cols-2 gap-[25px] justify-center items-center max-w-[1536px] mx-auto ">

               

                {/* Left side */}
                <div className="mt-[128px] mx-4   ">
                  <h1 className="w-full max-w-[600px] font-semibold text-[40px]  text-[#000] lg:ml-[123px]">
                    Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
                    applications and website builders measuring.
                  </h1>
      
                  <p className=" max-w-[613px] max-h-[125px] mt-[30px] leading-[204%] text-[16px]  text-[#5C5C5C] font-normal lg:ml-[123px] ">
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                    applications and website builders measuring dozens of completed
                    projects. We build and develop mobile applications for several top
                    platforms, including Android & IOS.
                  </p>
      
                  <div className="grid md:grid-cols-2 max-w-[401px] h-[51px] gap-3 lg:mt-[65px] mt-[100px] lg:ml-[123px] justify-center mb-[165px] ">
                    <button className=" h-[51px] max-w-[193px] rounded-[10px]  bg-[#1090CB] text-white cursor-pointer hover:text-[#1090CB] hover:border-[1px] hover:bg-white transition duration-300 ">
                      Contact us
                    </button>
                    <button className="h-[51px] w-[193px] rounded-[10px]  text-[#1090CB] border-[1px] bg-white hover:bg-[#1090CB] hover:text-white cursor-pointer transition duration-300 ">
                      View more
                    </button>
                  </div>
                </div>
      
                {/* Right Side */}
                <div className="mt-[-60px] mr-[65px] mx-auto w-full">
                  <img src={img2} alt="img" className="w-[597px]  h-[763px] " />
                </div>

                
              
              </div>

    
    
        
       </div>
  
   </div>


   
   </div>




  )
}

export default Hero1