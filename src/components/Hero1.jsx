import React from "react";
import Navbar from "./Navbar";
import img2 from "../assets/img2.png";
// import Frame21 from '../assets/Frame21.png'

const Hero1 = () => {
  return (
    
  
      <section id="home" className=" bg-[#1090CB1A] ">

        
 

        <div className=" sm:mt-[75px] mt-[55px] ">
          {/* <img src={Frame21} className=' absolute ml-[1393px] w-[47px] h-[366px] mt-[170px]'/> */}

          <div className=" grid lg:grid-cols-2 sm:gap-[25px] justify-center items-center max-w-[1536px] mx-auto min-h-screen  ">
            {/* Left side */}
            <div className="  mx-4 order-2 lg:order-1 text-center md:text-left  ">
              <h1 className="w-full max-w-[630px] font-semibold sm:text-[40px]  text-[#000] lg:ml-[123px] text-[24px]">
                Experienced{" "}
                <span className="text-[#1090CB]">mobile and web</span>{" "}
                applications and website builders measuring.
              </h1>

              <p className=" max-w-[613px]  mt-[16px]  leading-[204%] sm:text-[16px]  text-[#5C5C5C] font-normal lg:ml-[123px] text-[14px] ">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>

            <div className="flex justify-center lg:justify-start lg:ml-[123px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[400px] mt-[30px] sm:mt-[65px] mb-16">
                <button className="w-full sm:h-[51px] h-[49px] rounded-[10px] bg-[#1090CB] text-white cursor-pointer hover:text-white hover:border hover:bg-sky-800 transition duration-300">
                  Contact us
                </button>
                <button className="w-full sm:h-[51px] h-[49px]  rounded-[10px] text-[#1090CB] border bg-white hover:bg-[#1090CB] hover:text-white cursor-pointer transition duration-300">
                  View more
                </button>
              </div>
            </div>
          </div>

            {/* Right Side */}
            <div className=" mt-[-60px] mx-auto w-full order-1 lg:order-2 ">
              <img src={img2} alt="img" className=" w-[400px]  sm:w-[597px]   " />
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Hero1;
