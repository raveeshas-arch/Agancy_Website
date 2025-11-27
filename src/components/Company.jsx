import React from "react";
import { motion } from "framer-motion";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img14 from "../assets/img14.png";
import img13 from "../assets/img13.png";

const logos = [
  { src: img11, alt: "Company Logo 1" },
  { src: img12, alt: "Company Logo 2" },
  { src: img13, alt: "Company Logo 3" },
  { src: img14, alt: "Company Logo 4" },
];

export const Company = () => {
  return (
    <section
      id="blog"
      className="flex flex-col items-center text-center sm:px-0 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-medium sm:text-[24px] text-[20px] sm:mt-[184px] mt-[100px] leading-[159%]"
      >
        You will be in good Company
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:gap-[115px] sm:mt-[40px] max-w-[1085px] w-full">
        {logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="max-w-[185px] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.2, // stagger effect
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
};
