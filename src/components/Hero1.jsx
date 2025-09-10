import React from "react";
import Navbar from "./Navbar";
import img2 from "../assets/img2.png";
// import Frame21 from '../assets/Frame21.png'

const Hero1 = () => {
  return (
    
   

      <section id="home" className=" bg-[#1090CB1A] ">

        <div className=" mt-[75px] ">
          {/* <img src={Frame21} className=' absolute ml-[1393px] w-[47px] h-[366px] mt-[170px]'/> */}

          <div className=" grid lg:grid-cols-2 gap-[25px] justify-center items-center max-w-[1536px] mx-auto min-h-screen ">
            {/* Left side */}
            <div className="mt-[128px] mx-4 order-2 lg:order-1 text-center md:text-left  ">
              <h1 className="w-full max-w-[630px] font-semibold sm:text-[40px]  text-[#000] lg:ml-[123px] text-[25px]">
                Experienced{" "}
                <span className="text-[#1090CB]">mobile and web</span>{" "}
                applications and website builders measuring.
              </h1>

              <p className=" max-w-[613px]  mt-[16px]  leading-[204%] sm:text-[16px]  text-[#5C5C5C] font-normal lg:ml-[123px] text-[12px]">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>

              <div className="flex justify-center lg:justify-start lg:ml-[123px] ">
                <div className="grid sm:grid-cols-2 gap-3 max-w-[401px] h-[51px] mt-[65px] lg:mt-[65px] mb-[165px] ">
                  <button className=" w-[193px] h-[51px] rounded-[10px] bg-[#1090CB]  text-white cursor-pointer hover:text-[#1090CB] hover:border hover:bg-white transition duration-300">
                    Contact us
                  </button>
                  <button className="w-[193px] h-[51px] rounded-[10px] text-[#1090CB] border bg-white hover:bg-[#1090CB] hover:text-white cursor-pointer transition duration-300">
                    View more
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="mt-[-60px]  mx-auto w-full order-1 lg:order-2">
              <img src={img2} alt="img" className=" w-[400px]  sm:w-[597px]  " />
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Hero1;
