import React from "react";
import img8 from "../assets/img8.png";
import img20 from "../assets/img20.png";
const Magazine = () => {
  return (
    
      <section className="flex flex-col lg:flex-row gap-[114px]  mt-[55px] lg:mr-[123px] p-2 justify-center items-center md:text-left text-center ">
        {/* Image  */}
        <div className=" flex mt-[-55px] order-2 lg:order-1 ">
          <img src={img8} alt="mobile" className=" w-[681px] h-[521px] " />
        </div>

        {/* right */}

        <div className="order-1 lg:order-2 ">
          {/* Lorem text */}
          <div className="flex gap-[25px] mt-[160px] text-left justify-center lg:justify-start">
            <div className="max-w-[60px] bg-[#1090CB] rounded-full p-[16px]">
              <img src={img20} alt="image" className="w-[26px] h-[26px]   " />
            </div>
            <div className="max-w-[308px] ">
              <h1 className="font-medium text-[17px] leading-[175%] ">
                Lorem ipsum is simply dummy text
              </h1>
              <p className="font-normal text-[#868686] leading-[175%]">
                Lorem ipsum is simply dummy text
              </p>
            </div>
          </div>

          {/* Text-section */}
          <div className=" font-bold max-w-[516px] h-[389px] mt-[45px]">
            <h1 className=" font-semibold text-[30px] leading-[170%]">
              <span className="text-[#1090CB]">Lorem Ipsum</span> is simply
              dummy
              <br /> text of the printing.
            </h1>
            <p className="text-[#545454] max-w-[476px] mt-[56px] text-[16px] leading-[170%] font-normal">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
          </div>
        </div>
      </section>
    
  );
};

export default Magazine;
