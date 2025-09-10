import React from "react";
import img9 from "../assets/img9.png";
import img20 from "../assets/img20.png";
const Man = () => {
  return (
    <section
      id="services"
      className="flex flex-col lg:flex-row mt-[55px] p-4 justify-center items-center gap-[156px] md:text-left text-center "
    >
      {/* Left */}

      <div>
        {/* Lorem text */}
        <div className="flex gap-[25px] mt-[160px] text-left justify-center lg:justify-start">
          <div className="max-w-[60px] bg-[#9208D3] rounded-full p-[16px]">
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
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
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

      {/* Image  */}
      <div className=" flex mt-[-55px] ml-[-379px]">
        <img src={img9} alt="mobile" className="sm:w-[901px]" />
      </div>
    </section>
  );
};

export default Man;
