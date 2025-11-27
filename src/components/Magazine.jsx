import React from "react";
import img8 from "../assets/web.png";
import img20 from "../assets/img20.png";
import * as motion from "motion/react-client"

const Magazine = () => {
  
  const infoBlocks = [
    {
      id: 1,
      icon: img20,
      title: "Lorem ipsum is simply dummy text",
      description: "Lorem ipsum is simply dummy text",
    },
   
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-[114px] lg:mt-[55px] lg:mr-[123px] justify-center items-center md:text-left text-center mt-[-90px] px-6 sm:px-0 ">
     
     {/* left */}
      {/* Image  */}
      <motion.div 
        whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
      className=" flex lg:mt-[0px] mt-[-200px]  order-2 lg:order-1 ">
        <img src={img8} alt="web" className=" sm:w-[600px] " />
      </motion.div>

      {/* right */}
      <div className="order-1 lg:order-2 ">


        {/* infoBlocks */}
        {infoBlocks.map((block) => (
          <div
            key={block.id}
            className="flex sm:gap-[25px] gap-[10px] mt-[160px] text-left justify-center lg:justify-start "
          >

            <div className="max-w-[60px] bg-[#1090CB] rounded-full p-[16px] ease-out hover:scale-110">
              <img
                src={block.icon}
                alt="image"
                className="w-[26px] h-[26px]"
              />

            </div>
            <div className="max-w-[308px]">
              <h1 className="font-medium sm:text-[17px]  text-[14px] leading-[175%] ">
                {block.title}
              </h1>
              <p className="font-normal text-[#868686]  sm:text-[14px] text-[11px] leading-[175%]">
                {block.description}
              </p>
            </div>
          </div>
        ))}


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
    </section>
  );
};

export default Magazine;