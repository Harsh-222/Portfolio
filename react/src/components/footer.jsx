import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div 
    id="Footer" 
    className='flex justify-around  bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='  text-2xl md:text-6xl font-bold'>Contact </h1>
            <h3 className='  text-sm md:text-2xl font-normal'>Feel free to reach out to me via email or connect with me on social media.</h3>
            </div>
            <ul className=' text-sm md:text-lg '>
            <li className='flex items-center gap-1'>
                <IoMdMail size={20} />
                <a href='mailto:yourname@example.com' className='hover:underline'>
              yourname@example.com
            </a>
            </li>
            <li className='flex items-center gap-1'>
                <FaGithub/>
                <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              github.com/yourusername
            </a>
            </li>
            <li className='flex items-center gap-2'>
                <FaLinkedin/>
               <a href='https://linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              linkedin.com/in/yourusername
            </a>
            </li>
            </ul>
            
    </div>
    
  )
}

export default Footer