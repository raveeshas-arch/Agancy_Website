import React from "react";
import img7 from "../assets/mobile.png";
import img20 from "../assets/img20.png";
import * as motion from "motion/react-client"

// Data for each section
const sectionsData = [
  {
    id: 1,
    icon: img20,
    smallTitle: "Lorem ipsum is simply dummy text",
    smallDesc: "Lorem ipsum is simply dummy text",
    mainTitle: "Lorem Ipsum is simply dummy text of the printing.",
    blue: "Lorem Ipsum",
    mainDesc:
      "KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.",
    image: img7,
  }
]


const Mobile1 = () => {
  return (
    <div>
      {sectionsData.map((section) => (

        <section
          key={section.id}
          id= "about"
          className="flex flex-col lg:flex-row lg:mt-[55px] lg:ml-[123px] md:text-left text-center justify-center items-center mt-[-90px] px-6 sm:px-0">
         
          {/* Left */}
          <div>
            {/* Small lorem text */}
            <div className="flex sm:gap-[25px] gap-[10px] mt-[160px] text-left justify-center lg:justify-start">
              <div className="max-w-[60px] bg-[#08D3BB] rounded-full p-[16px] ease-out hover:scale-110">
                <img src={section.icon} alt="icon" className="w-[26px] h-[26px]" />
              </div>
              <div className="max-w-[308px]">
                <h1 className="font-medium sm:text-[17px] text-[14px] leading-[175%]">
                  {section.smallTitle}
                </h1>
                <p className="font-normal text-[#868686] sm:text-[14px] text-[11px] leading-[175%]">
                  {section.smallDesc}
                </p>
              </div>
            </div>


            {/* Main Text Section */}
            <div className="font-bold max-w-[516px] h-[389px] sm:mt-[45px] mt-[30px]">
              <h1 className="font-semibold md:text-[30px] text-[24px] leading-[170%]">
                <span className="text-[#1090CB]">{section.blue}</span>{" "}
                {section.mainTitle.replace(section.blue, "")}
              </h1>
              <p className="text-[#545454] max-w-[476px] sm:mt-[56px] mt-[30px] sm:text-[16px] text-[14px] leading-[170%] font-normal">
                {section.mainDesc}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <motion.div 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          className="relative flex lg:mt-[55px] mt-[-120px]">
            <img src={section.image} alt="mobile" className="sm:w-[803px]" />
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default Mobile1;