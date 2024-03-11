import { motion, useAnimate } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap/all'
function Featured() {

  return (

    <div
     data-scroll data-scroll-section className='w-full py-20 '>
      <div className='w-full px-20 border-b-[1px] border-zinc-500 pb-20'>
        <h1 className='text-6xl tracking-tight text-black'>Featured Project</h1>
      </div>

<div className='px-20' >

<div className='cards w-full flex gap-10 mt-16 '>


<motion.div onHoverStart={() => {handleHover(0)}} className='cardcontainer relative rounded-xl w-1/2 h-[80vh]   bg-[#CDCDCE]'>

                 <div className='card w-full h-full   rounded-xl overflow-hidden'>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div> 


</motion.div>



            <div    className='cardcontainer relative rounded-xl w-1/2 h-[80vh]   '>


  

              <div className='card w-full h-full   rounded-xl overflow-hidden'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                
                </div>  
            </div>

        </div>

</div>
      
    </div>
  )
}

export default Featured



