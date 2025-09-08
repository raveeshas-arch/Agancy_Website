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
    <div id ="services" className="max-w-[1536px] mx-auto  mt-[100px] mb-[100px] ">

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[29px] mt-[43px] lg:ml-[123px]  ">
        {services.map((service, index) => (
          <div key={index} className="flex gap-3">
            <div
              className={`${service.bgColor} rounded-xl p-4 justify-center items-center flex `}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[34px] h-[34px] "
              />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold ">{service.title}</h1>
              <p className="text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>


      {/* 
Line */}

      <div className="border-[#C7C7C7]  h-0 w-full  border-[0.5px] mt-[43px]  "></div>

      {/* Text Section */}
      <div className="text-center mt-[115px] mx-6">
        <h1 className="font-poppins font-semibold text-[33px] leading-[160%]  text-center sm:w-full">
          Lorem ipsum is simply dummy text of the printing{" "}
        </h1>
        <p className="mt-[32px] text-[#868686] font-normal text-[18px] leading-[175%] text-center">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className='text-gray-500 class=" font-normal text-[18px] leading-[175%] text-center"'>
          lorem ipsum has been the industry's
        </p>
      </div>
    </div>
  );
};

export default Hero2;
