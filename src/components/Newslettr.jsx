import React from "react";

const Newslettr = () => {
  return (
    <section className="bg-[#e3ebf7] py-[148px] sm:px-0 px-6">
      {/* Text */}

      <h1 className="font-semibold sm:text-[25px] text-[20px] md:text-[33px] leading-[160%] text-center w-full max-w-[516px] mx-auto">
        Lorem ipsum is simply dummy text of the printing.
      </h1>

      {/* input */}
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[80px]">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full  sm:max-w-[532px] h-[60px] sm:h-[67px] px-4 py-2  bg-white rounded-[10px]"
        />

        <button
          type="submit"
          className="w-full sm:max-w-[173px]  h-[60px] sm:h-[67px] text-[16px] bg-black text-white rounded-md transition hover:bg-gray-700 sm:py-2 sm:px-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default Newslettr;
