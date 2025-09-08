import React from 'react'

const Newslettr = () => {
  return (
    <div >
     <div className='bg-[#e3ebf7] py-[148px] '>


      

        {/* Text */}

        <h1 className="font-semibold text-[33px] leading-[160%] text-center w-full max-w-[516px] mx-auto ">
  Lorem ipsum is simply dummy text of the printing.
</h1>


        {/* input */}
    <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-[80px]">
  <input
    type="email"
    placeholder="Enter Your Email"
    className="w-full sm:w-[532px] h-[67px] px-4 py-2  bg-white rounded-[10px]"
  />
  <button
    type="submit"
    className="w-full sm:w-[173px] h-[67px] bg-black text-white rounded-md transition hover:bg-gray-700"
  >
    SUBSCRIBE
  </button>
     </form>





      
</div>


</div>
    
  )
}

export default Newslettr