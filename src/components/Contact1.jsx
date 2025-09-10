import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Contact1 = () => {
  return (
    <section id="contact" className="w-full mb-[53px] max-w-[1536px] mx-auto ">
      <div className="lg:flex justify-around grid grid-cols-1  items-center">
        {/* Logo  */}
        <div className="flex justify-center lg:justify-start">
          <div className="max-w-[372px] text-center lg:text-left mt-[87px]">
            <h1 className="text-[16px] font-bold text-[#00329B]">LOGO</h1>
            <p className="mt-[27px] text-[#515151]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-[25px] text-[#515151]">@Lorem</p>
          </div>
        </div>

    {/* About Us */}
        <div className="sm:mt-[87px] mt-[50px] flex justify-center lg:justify-start">
          <div className="max-w-[372px] text-center lg:text-left">
            <h2 className="text-[17px] font-semibold">About us</h2>
            <p className="mt-[15px] text-[#515151] leading-[186%]">
              Lorem
              <br />
              Portfolio
              <br />
              Careers
              <br />
              Contact us
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex justify-center lg:justify-start">
          <div className="max-w-[282px] text-center lg:text-left sm:mt-[87px] mt-[50px]">
            <h2 className="text-[17px] font-semibold">Contact us</h2>
            <p className="mt-[20px] text-[#515151]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-[11px] text-[#515151]">+908 87987 908</p>
          </div>
        </div>

        {/* Social icons */}

        <div className="flex justify-center sm:mt-[200px] mt-[60px]">
          <div className="flex gap-[16px]">
            <div className="bg-white p-[11px] rounded-full shadow-lg">
              <img
                src={facebook}
                alt="Facebook"
                className="w-[12px] h-[12px]"
              />
            </div>
            <div className="bg-white p-[11px] rounded-full shadow-lg">
              <img src={twitter} alt="Twitter" className="w-[13px] h-[13px]" />
            </div>
            <div className="bg-white p-[11px] rounded-full shadow-lg">
              <img
                src={instagram}
                alt="Instagram"
                className="w-[13px] h-[13px]"
              />
            </div>
            <div className="bg-white p-[11.8px] rounded-full shadow-lg">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-[11px] h-[11px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
