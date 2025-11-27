import React from "react";
import { motion } from "framer-motion";


const Hero3 = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut"  }}
        
    >
      {/* Line */}
      <div className="border-[#C4C4C4] h-0 w-full border-[1px] mt-0"></div>

      {/* Text Section */}
      <motion.div
      
       className="text-center mt-[70px] sm:mt-[115px] mx-6">
        <h1
          
          className="font-poppins font-semibold sm:text-[33px] leading-[160%] text-[24px] text-center sm:w-full"
        >
          Lorem ipsum is simply dummy text of the printing
        </h1>

        <p className="mt-[32px] max-w-[692px] text-[#868686] font-normal sm:text-[18px] text-[14px] leading-[175%] justify-center mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero3;