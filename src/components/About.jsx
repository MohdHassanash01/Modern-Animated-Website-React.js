import React from 'react'

function About() {
  return (
    <div 
   
    className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[3.6vw] mr-14 leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className='underline underline-offset-4'>raise funds</span>, <span className='underline underline-offset-4'> sell prod­ucts </span>, ex-plain com­plex ideas, and <span className='underline underline-offset-4'>hire great peo­ple</span>.</h1>

<div className='w-full flex gap-5 border-t-[2px] border-[#a1b562] mt-20 pt-10 ' >

    <div className='w-1/2'>
        <h1 className='text-4xl'>Our approach :</h1>
        <button className='px-10 py-4 bg-zinc-900  mt-[35px] rounded-full text-white flex justify-center items-center gap-7'>Read more 
        <div className='w-4 h-4 bg-white rounded-full'></div>
        </button>
    </div>

    <div className='w-1/2 h-[60vh]  rounded-2xl overflow-hidden object-fill'>
        <img className='rounded-2xl object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
    </div>
</div>

    </div>
  )
}

export default About
