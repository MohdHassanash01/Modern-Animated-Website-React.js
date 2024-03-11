import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-white
    flex gap-5 justify-center items-center px-20  border-gray-300 border-t-2'>

      <div className='cardContainer w-1/2 h-[60vh]'> 
      <div className='card w-full h-full  bg-[#004D43] rounded-2xl flex items-center justify-center relative'>
<img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

<button className='absolute left-10 bottom-10 px-5 py-3 border-2 border-green-400 rounded-full'>&copy;2019-2022</button>
      </div>
      </div>

      <div className='cardContainer w-1/2 h-[60vh] flex gap-5'> 


      <div className='card w-1/2 h-full  bg-[#192826] rounded-2xl flex items-center justify-center relative'>

        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

        <button className='absolute left-10 bottom-10 px-5 py-3 border-2 border-green-400 rounded-full'>
            RATING 5.0 ON CLUTCH
        </button>
      </div>


      <div className='card w-1/2 h-full  bg-[#212121] rounded-2xl flex items-center justify-center relative'>

        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

        <button className='absolute left-10 bottom-10 px-5 py-3 border-2 border-green-400 rounded-full'>
            BUSINESS BOOTCAMP ALUMNI
        </button>

      </div>


      </div>
      


    </div>
  )
}

export default Cards
