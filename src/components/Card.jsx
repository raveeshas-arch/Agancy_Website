import React from "react";
import { color, motion } from "framer-motion";
import Bell from "../assets/Bell.png";

const Card = () => {
  // Card data
  const cards = [
    {
      id: 1,
      bg: "bg-[#F4F4F4]",
      color:"text-black",
      textColor: "text-[#545454]",
      button: "bg-[#1090CB] text-white hover:bg-[#279bd0]",
    },
    {
      id: 2,
      bg: "bg-[#1090CB]",
      color:"text-white",
      textColor: "text-white",
      button: "bg-white text-[#1090CB]",
    },
  ];

  return (
    <section className="w-full mt-[100px] sm:px-0 px-6">
      <div className="relative max-w-[1194px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[50px]">
        {/* Floating Bell */}
        <motion.div
          className="absolute top-[-80px] left-[1000px]"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={Bell} alt="Bell" />
        </motion.div>

        {/* Cards */}
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: index === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`w-full max-w-[572px] ${card.bg} rounded-[20px] flex flex-col items-center justify-center text-center mx-auto`}
          >
            <h1 className={`sm:text-[25px] text-[24px] leading-[170%] mt-[64px] font-semibold max-w-[365px] ${card.color}` }>
              Lorem ipsum is simply dummy text
            </h1>
            <p
              className={`sm:text-[16px] text-[14px] mt-[36px] font-normal leading-[170%] max-w-[476px] p-4 ${card.textColor}`}
            >
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`max-w-[153px] mt-[36px] h-[49px] rounded-[10px] px-[35px] mb-[49px] cursor-pointer ${card.button}`}
            >
              View More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
