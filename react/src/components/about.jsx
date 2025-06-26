import React from 'react'
import { MdArrowForward } from "react-icons/md";
const About = ()=> {
     const skills=()=>[
    {
      title: 'Web Developer',
      description:
        'I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have experience in various technologies including React, Node.js, and Tailwind CSS.',
    },
    {
      title: 'UI/UX Designer',
      description:
        'I create user-friendly and visually appealing designs, focusing on usability and accessibility to deliver seamless digital experiences.',
    },
    {
      title: 'Backend Developer',
      description:
        'Experienced in building scalable backend services using Node.js, Express, and MongoDB, with a focus on RESTful API development.',
    },
    ];
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:justify-center md:flex-wrap bg-black shadow-xl mx-0 md:mx-20 p-12 rounded-lg bg-opacity-30'>
      <div>
            <h2 className='text-2xl md:text-4xl font-bold '>About Me</h2>
            <div className='md:flex flex-wrap md:flex-row items-center '>
                {/* <img className='md:h-80' src='' about=''/> */}
                {skills().map((item,index) => ( 
                    <div key={index} className='flex gap-3 py-4'>
                 <MdArrowForward/>
                 <div>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>{item.title}</h1>
              <p className='text-sm md:text-md'>{item.description}</p>
             </div>
          </div>
                ))} 
            </div>
      </div>
    </div>
            )}
            

export default About