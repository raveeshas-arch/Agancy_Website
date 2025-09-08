import React from 'react'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img14 from '../assets/img14.png'
import img13 from '../assets/img13.png'

export const Company = () => {
  return (


<div id='blog' className="flex flex-col items-center text-center px-4">
  <h1 className="font-semibold text-[24px] mt-[184px] leading-[159%]">
    You will be in good Company
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[115px] mt-[40px] max-w-[1085px] w-full">
    <img src={img11} alt="Company Logo 1" className="max-w-[185px] mx-auto" />
    <img src={img12} alt="Company Logo 2" className="max-w-[185px] mx-auto" />
     <img src={img13} alt="Company Logo 4" className="max-w-[185px] mx-auto" />
    <img src={img14} alt="Company Logo 3" className="max-w-[185px] mx-auto" />
   
  </div>
</div>

  )
}
