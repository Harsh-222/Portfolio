import React from 'react'
import ProjectCard from './projectcard'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl font-bold text-white'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-6'>
            <ProjectCard title="sdcfgggggg" main="dffghjk"/>
             <ProjectCard title="sdcfgggggg" main="dffghjk"/>
        </div>
    </div>
  )
}

export default Projects