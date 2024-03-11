import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate,setrotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove",(e) => {
            const mousex =e.clientX
            const mousey =e.clientY

            let deltaX = mousex - window.innerWidth/2
            let deltay = mousey - window.innerHeight/2

            let angle = Math.atan2(deltay, deltaX) * (180/Math.PI);
            setrotate(angle-180)
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden '>
      
      <div data-scroll data-scroll-speed="-.4" className='relative w-full h-full 
      bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>

        <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>

                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
                <div className='relative w-2/3 h-2/3 rounded-full bg-black '>
                 <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=' line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 '>
                 <div className='w-10 h-10 rounded-full bg-white  '>
                </div>  

                </div>   
                </div>
                </div>

            <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-black '>
                 <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 '>
                 <div className='w-10 h-10 rounded-full bg-white  '>
                </div>  

                </div>   
                </div>
                </div>

        </div>

      </div>

  
 


    </div>
  )
}

export default Eyes
