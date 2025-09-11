import React from "react";
import img7 from "../assets/img7.png";
import img20 from "../assets/img20.png";
const Mobile1 = () => {
  return (
    <section
      id="about"
      className="  flex flex-col lg:flex-row  lg:mt-[55px] lg:ml-[123px] md:text-left text-center  justify-center items-center mt-[-90px] px-6 sm:px-0"
    >

      


      {/* Left */}

      <div >
        {/* Lorem text */}
        <div className="flex sm:gap-[25px] gap-[10px] mt-[160px] text-left justify-center lg:justify-start">
          <div className="max-w-[60px]  bg-[#08D3BB] rounded-full p-[16px]">
            <img src={img20} alt="image" className="w-[26px] h-[26px]  " />
          </div>
          <div className="max-w-[308px] ">
            <h1 className="font-medium sm:text-[17px] text-[14px] leading-[175%] ">
              Lorem ipsum is simply dummy text
            </h1>
            <p className="font-normal text-[#868686]  sm:text-[14px] text-[11px] leading-[175%]">
              Lorem ipsum is simply dummy text
            </p>
          </div>
        </div>

        {/* Text-section */}
        <div className=" font-bold max-w-[516px] h-[389px] sm:mt-[45px] mt-[30px]">
          <h1 className=" font-semibold md:text-[30px] text-[24px] leading-[170%]">
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br /> text of the printing.
          </h1>
          <p className="text-[#545454] max-w-[476px] sm:mt-[56px] mt-[30px] sm:text-[16px] text-[14px] leading-[170%] font-normal">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>

      </div>

      {/* Image  */}
     
      <div className=" relative flex lg:mt-[55px]  mt-[-120px] ">

          {/* MObile gradient */}
          {/* <div className=" inset-0 sm:z-10 -z-10 absolute top-[32px]  sm:left-[559px] sm:w-[497px] w-[200px] h-[504px] opacity-100 rounded-full blur-[60px] bg-[radial-gradient(circle_at_center,#DED9FF_90%,rgba(222,217,255,0)_100%)] in"></div>  */}
      
        <img src={img7} alt="mobile" className="sm:w-[803px] " />
      </div>
    </section>
  );
};

export default Mobile1;
