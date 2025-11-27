import React from "react";
import Navbar from "./Navbar";
import img2 from "../assets/img2.png";
import Frame21 from "../assets/Frame21.png";
import Frame22 from "../assets/Frame22.png";
import * as motion from "motion/react-client"



const Hero1 = () => {
  return (
    <section id="home" className="   bg-[#1090CB1A] overflow-x-hidden overflow-y-hidden ">

      

      {/* Orange gradient */}
      <div
        className="
    absolute
    top-[105px]
    xl:left-[918px]
    xl:w-[496px]
    h-[504px]
    opacity-100
    rounded-full
    blur-[60px]
    -z-10
    bg-[radial-gradient(50%_50%_at_50%_50%,#FDFFEA_0%,rgba(196,196,196,0)_100%)]
  "
      ></div>

      {/* Purple gradient */}

      <div className=" inset-0 -z-10 absolute top-[125px] left-[-111px] sm:w-[496px] w-[200px] h-[504px] opacity-100 rounded-full blur-[60px] bg-[radial-gradient(circle_at_center,#DED9FF_90%,rgba(222,217,255,0)_100%)] in"></div>




      {/* Content ----------------------------------------------------------------------------------------------------------------*/}

      <div className=" sm:mt-[75px] mt-[55px] ">

        <div className=" relative grid lg:grid-cols-2 sm:gap-[25px] container justify-center items-center max-w-[1536px] mx-auto min-h-screen  ">


          
{/* Frame */}

        <div className="absolute top-[272px] left-[1393px] ">
        <img src={Frame21} />{" "}
      </div>


          {/* Left side */}
          <motion.div className="  mx-4 order-2 lg:order-1 text-center md:text-left  "
     initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
         
            <h1 className="w-full max-w-[630px] font-semibold sm:text-[40px]  text-[#000] lg:ml-[123px] text-[24px]"

         >

              Experienced <span className="text-[#1090CB]">mobile and web</span>{" "}
              applications and website builders measuring.
            </h1>

            <p className=" max-w-[613px]  mt-[16px]  leading-[204%] sm:text-[16px]  text-[#5C5C5C] font-normal lg:ml-[123px] text-[14px] ">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>

            <div className="flex justify-center lg:justify-start lg:ml-[123px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[400px] mt-[30px] sm:mt-[65px] mb-16">
                <motion.button
                 whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
                className=" w-full sm:h-[51px] h-[49px] rounded-[10px] bg-[#1090CB] text-white cursor-pointer hover:text-white hover:border hover:bg-sky-800 transition duration-300">
                  Contact us
                </motion.button>
                <motion.button
                 whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                 className="w-full sm:h-[51px] h-[49px]  rounded-[10px] text-[#1090CB] border bg-white hover:bg-[#1090CB] hover:text-white cursor-pointer transition duration-300">
                  View more
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
          className=" mt-[-60px] mx-auto w-full order-1 lg:order-2 ">
            <img src={img2} alt="img" className=" w-[400px]  sm:w-[597px]   " />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
