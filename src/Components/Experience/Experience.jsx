import React from 'react'
import { FaCss3,FaFigma,FaHtml5,FaJs  } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRadiopublic } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
return (
  <div id='Experience' className='p-10 md:p-24'>
    <h1 className=" text-2xl md:text-4xl text-white font-semibold">Experience</h1>
    <div className="flex flex-wrap items-center justify-around ">
      <div className="flex flex-wrap gap-8 md:w-2/5 md:p-12 py-10">
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <FaHtml5 color='#E34F26' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <FaCss3 color='#1572b6' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <FaReact color='#61DAFB' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <FaJs color='#F7DF1E' size={50}/>
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <SiMongodb color='#47A248' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <SiRadiopublic color='#FF4438' size={50} />
        </span>
        </div>
       <div>
       <div className="flex gap-4 bg-zinc-950 bg-opacity-45 mt-4 rounded-lg p-4  items-center">
            <FaGoogle color='#4285f4' size={50}/>
            <span className='text-white'>
               <h1 className=" leading-tight">Softward Engineer,Google</h1>
               <p className="text-sm leading-tight font-thin p-1">Noember 2024 Present</p>
               <ul className="text-sm p-2">
                <li className="">-Work As Softward Developer..</li>
                <li className="">-Siner SDE Developer..</li>
               </ul>
            </span>
        </div>
        <div className="flex gap-4 bg-zinc-950 bg-opacity-45 mt-4 rounded-lg p-4  items-center">
            <RiNetflixFill color='#E500914' size={50}/>
            <span className='text-white'>
               <h1 className=" leading-tight">Softward Engineer,Netflix</h1>
               <p className="text-sm leading-tight font-thin p-1">Noember 2024 Present</p>
               <ul className="text-sm p-2">
                <li className="">-Work As Softward Developer..</li>
                <li className="">-Siner SDE Developer..</li>
               </ul>
            </span>
        </div>
        <div className="flex gap-4 bg-zinc-950 bg-opacity-45 mt-4 rounded-lg p-4  items-center">
            <FaAmazon color='#FF9900' size={50}/>
            <span className='text-white'>
               <h1 className=" leading-tight">Softward Engineer,Amazon</h1>
               <p className="text-sm leading-tight font-thin p-1">Noember 2024 Present</p>
               <ul className="text-sm p-2">
                <li className="">-Work As Softward Developer..</li>
                <li className="">-Siner SDE Developer..</li>
               </ul>
            </span>
        </div>
       </div>
     
    </div>

  </div>
)
}

export default Experience