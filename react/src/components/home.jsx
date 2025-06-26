import React from 'react'

const Home = () => {
  return (
    <div className='flex w-full justify-between items-start p-10 md:p-20'>
        <div className=' md:w-1/2 md:pt-10'>
       
            <h1 className='text-white text-3xl md:text-6xl flex font-bold leading-normal tracking-tighter'>Welcome to Our Website</h1>
            <p className=' text-white text-sm md:text-2xl tracking-tighter'>This is a simple home page built with React and Tailwind CSS.</p>
        <a href='#Footer'>  <button className=' text-white px-3 py-2 mt-5 text-sm md:py-2 md:px-4 md:text-lg  md:md-10  hover:opacity-85 hover:scale-105 duration-300
           font-semibold rounded-3xl bg-[#465697]'>
          
           Contact Me
            </button>
            </a> 
            {/* <div><image className='w-2/5' src={} alt={}/></div> */}
    </div>
    </div>
  )
}

export default Home