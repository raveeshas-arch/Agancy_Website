import star from '../assets/Star.png'
import Piechart from '../assets/PaiChart.png'
import * as motion from "motion/react-client"

const Newslettr = () => {
  return (
    <section className="relative bg-[#e3ebf7] py-[148px] sm:px-0 px-6">

      {/* Text */}

      <h1 className="font-semibold sm:text-[25px] text-[20px] md:text-[33px] leading-[160%] text-center w-full max-w-[516px] mx-auto overflow-hidden">

        {/* Star */}
      <motion.div 
       animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
      className="absolute top-[-30px] left-[167px] "><img src={star} className="w-[66px] h-[66px]"/> </motion.div>

      {/* Circle */}
      <motion.div
       animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
      className="absolute top-[94px] left-[989px]"><img src={Piechart} className="w-[54px] h-[54px] "/> </motion.div>

        Lorem ipsum is simply dummy text of the printing.
      </h1>

      {/* input */}
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[80px]">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full  sm:max-w-[532px] h-[60px] sm:h-[67px] px-4 py-2  bg-white rounded-[10px]"
        />

        <motion.button
         whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
          type="submit"
          className="  w-full sm:max-w-[173px]  h-[60px] sm:h-[67px] text-[16px] bg-black cursor-pointer text-white rounded-md transition  sm:py-2 sm:px-4"
        >
          SUBSCRIBE
        </motion.button>
      </form>
    </section>
  );
};

export default Newslettr;
