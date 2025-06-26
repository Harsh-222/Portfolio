import React from 'react'

const ProjectCard =({title,main})=> {
  return (
    <div className='p-3 w-80 flex-col md:p-6 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      {/* <img src='' alt=' ' className='p-4'/> */}
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal
      '>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className='flex  gap-2 p-2 mt-2 md:gap-4 md:p-4'>
      <button className='text-white px-3 py-2 text-sm md:py-2 md:mt-10 md:text-lg  md:px-4  hover:opacity-85 hover:scale-105 duration-300
      font-semibold rounded-3xl bg-[#465697]'>
        View Project</button>
        <button className='text-white px-3 py-2 text-sm md:py-2 md:mt-10 md:text-lg  md:px-4  hover:opacity-85 hover:scale-105 duration-300
      font-semibold rounded-3xl bg-[#465697]'>
        code</button>
    
    </div>
    
    </div>
  )
}

export default ProjectCard