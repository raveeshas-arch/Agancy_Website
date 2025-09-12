import React from "react";
import { motion } from "framer-motion";
import Bell from "../assets/Bell.png";

// Reusable CardBox with animation
const CardBox = ({ title, text, btnText, bgColor, textColor, btnBg, btnTextColor, delay }) => {
  return (
    <motion.div
      className="w-full max-w-[572px] rounded-[20px] flex flex-col items-center justify-center text-center mx-auto"
      style={{ backgroundColor: bgColor, color: textColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h1 className="sm:text-[25px] text-[24px] leading-[170%] mt-[64px] font-semibold max-w-[365px]">
        {title}
      </h1>
      <p
        className="sm:text-[16px] text-[14px] mt-[36px] font-normal leading-[170%] max-w-[476px] p-4"
        style={{ color: textColor }}
      >
        {text}
      </p>
      <motion.button
        className="max-w-[153px] mt-[36px] h-[49px] rounded-[10px] px-[35px] mb-[49px] cursor-pointer"
        style={{ backgroundColor: btnBg, color: btnTextColor }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {btnText}
      </motion.button>
    </motion.div>
  );
};

const Card = () => {
  return (
    <section className="w-full mt-[100px] sm:px-0 px-6">
      <div className="relative max-w-[1194px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
        <div className="absolute top-[-80px] left-[1000px]">
          <img src={Bell} alt="Bell" />
        </div>

        {/* Left Card */}
        <CardBox
          title="Lorem ipsum is simply dummy text"
          text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS."
          btnText="View More"
          bgColor="#F4F4F4"
          textColor="#545454"
          btnBg="#1090CB"
          btnTextColor="#fff"
          delay={0.2}
        />

        {/* Right Card */}
        <CardBox
          title="Lorem ipsum is simply dummy text"
          text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS."
          btnText="View More"
          bgColor="#1090CB"
          textColor="#fff"
          btnBg="#fff"
          btnTextColor="#1090CB"
          delay={0.4}
        />
      </div>
    </section>
  );
};

export default Card;
