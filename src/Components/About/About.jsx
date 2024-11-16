import React from 'react'
import aboutImg from '../../assets/img/02.png'
import { IoArrowForward } from "react-icons/io5";

const About = () => {
return (
<div id='About' className=' text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-lg mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
<div className="">
      <h2 className="text-2xl md:text-4xl font-bold hover:text-slate-500 bg-opacity-45">About </h2>

      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img className='md:h-80' src={aboutImg} alt="about" title='About Images' />

            <ul>
            <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className="mt=1" />
                  <span className='w-96'>
                  <h1 className="text-1xl md:text-2xl font-semibold leading-normal">Fontend Developer</h1>
                  <p className=" text-sm md:text-md leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Animi nihil molestiaes.
                  </p>

                  </span>
            </div>
            <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className="mt=1" />
                  <span className='w-96'>
                  <h1 className="text-1xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                  <p className=" text-sm md:text-md leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Animi nihil molestiae.
                  </p>

                  </span>
            </div>
            <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className="mt=1" />
                  <span className='w-96'>
                  <h1 className="text-1xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                  <p className=" text-sm md:text-md leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Animi nihil molestiaes.
                  </p>

                  </span>
            </div>
      </ul>
      </div>
</div>
</div>
)
}

export default About