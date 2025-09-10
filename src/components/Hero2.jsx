import React from "react";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";

const Hero2 = () => {
  const services = [
    {
      title: "Web Application",
      description: "Lorem ipsum is simply",
      image: img18,
      bgColor: " bg-violet-200",
    },
    {
      title: "SEO",
      description: "Lorem ipsum is simply",
      image: img19,
      bgColor: "bg-lime-100",
    },
    {
      title: "AR/VR Solutions",
      description: "Lorem ipsum is simply",
      image: img17,
      bgColor: "bg-blue-100",
    },
    {
      title: "Mobile Applications",
      description: "Lorem ipsum is simply",
      image: img16,
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center  w-full max-w-[1536px] mx-auto px-4 mt-[43px] mb-[80px] ">
      {/* services */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[29px] mt-[43px]">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-[16px] text-left">
            <div
              className={`w-20 h-20 rounded-xl flex items-center justify-center ${service.bgColor}`}
            >
              <img src={service.image} alt={service.title} className="w-10 " />
            </div>
            <div className="ml-4">
              <p className="text-[20px] font-semibold">{service.title}</p>
              <p className="text-[#969696]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero2;
