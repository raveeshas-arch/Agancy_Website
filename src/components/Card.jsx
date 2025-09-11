import React from 'react'
import Bell from '../assets/Bell.png'

const Card = () => {
  return (
    <section className="w-full mt-[100px]  sm:px-0 px-6">



  <div className=" relative max-w-[1194px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[50px]">


     <div className="absolute  top-[-80px] left-[1000px]">
            <img src={Bell} />{" "}
          </div>
    
    {/* Left */}
    <div className="w-full max-w-[572px]  bg-[#F4F4F4] rounded-[20px] flex flex-col items-center justify-center text-center mx-auto">
      <h1 className="sm:text-[25px]  text-[24px] leading-[170%] mt-[64px] font-semibold max-w-[365px]">Lorem ipsum is simply dummy text</h1>
      <p className="sm:text-[16px] text-[14px] mt-[36px] font-normal text-[#545454] leading-[170%] max-w-[476px] p-4">
         KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
      </p>

       <button className="max-w-[153px] mt-[36px] h-[49px] bg-[#1090CB] text-white rounded-[10px] px-[35px] mb-[49px] hover:bg-[#279bd0] cursor-pointer">
        View More
      </button>
    
     
    </div>

    {/* Right */}
     <div className="w-full max-w-[572px]  bg-[#1090CB] text-white rounded-[20px] flex flex-col items-center justify-center text-center mx-auto">
      <h1 className="sm:text-[25px]  text-[24px]  leading-[170%] mt-[64px] font-semibold max-w-[365px]">Lorem ipsum is simply dummy text</h1>
      <p className="sm:text-[16px] text-[14px]  mt-[36px] font-normal text-white leading-[170%] max-w-[476px] p-4">
         KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
      </p>

       <button className="max-w-[153px] mt-[36px] h-[49px] bg-[white] text-[#1090CB] rounded-[10px] px-[35px] mb-[49px] cursor-pointer">
        View More
      </button>
    
     
    </div>
    
  </div>
</section>

  )
}

export default Card