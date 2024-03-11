import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {

  
  return (
    <div 
    data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-white text-black pt-2'>
      <div className='teststructure mt-44 px-20'>

        {["we create","Eye-opening","presentations"].map((item,index)=>{
            return ( <div className='masker'>

<div className='w-fit flex items-center '>
{index === 1 && (

<motion.div
 initial={{width:0}} 
 animate={{width:"9vw"}}
 transition={{ease:[0.76, 0, 0.24, 1],duration:1}}

 className='w-[9vw] h-[5vw] rounded-lg mr-4 overflow-hidden'>

  <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>)}

<h1 className='uppercase text-8xl leading-[5vw]font-["Founders_Grotesk"] tracking-tighter font-bold'>{item}</h1>

</div>
            </div>
            )
        })}
      </div>

<div className='border-t-2 border-zinc-500 mt-24 flex justify-between items-center py-5 px-20'>
  
  {["For public and private companies","From the first pitch to IPO"].map((items,idx) => <p
   className='text-md font-regular tracking-tight leading-none border-[1px] py-1 px-3 rounded-full border-transparent hover:bg-black hover:text-white '
  >{items}</p>)}

  <div className='start flex gap-5'>
    <div className='px-5 py-3 border-[1px]
    font-semibold 
    border-black rounded-full uppercase hover:bg-black hover:text-white hover:font-semibold'>Start the project</div>
    <div className='w-10 h-10 rounded-full border-black border-[1px] flex 
    justify-center items-center hover:animate-ping hover:bg-white hover:text-black hover:border-white'>
<span className='rotate-[45deg]'>    <FaLongArrowAltUp /></span>
    </div>
  </div>

</div>

    </div>
  )
}

export default LandingPage
