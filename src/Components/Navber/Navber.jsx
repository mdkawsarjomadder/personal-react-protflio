import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Navber = () => {
      const [menu, openMenu] = useState(false);
      const [showMenu, setShowMenu] = useState(true);
  return (
    <nav id='Navber' className=' flex flex-wrap  justify-between md:items-center text-white px-10 pt-6 md:px-20 mb-5'>
     <span className=' text-3xl font-bold tracking-wide hover:text-slate-500 bg-opacity-40 '>Portfolio</span>
      <ul className={` ${ menu ? "block" :"hidden"}
       mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-lg bg-opacity-30 md:border-none
                text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `} >
           <a href="#About">
            <li className=' text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-500 bg-opacity-45'>About</li>
           </a>
           <a href="#Experience">
           <li className=' text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-500 bg-opacity-45'>Experience</li>
           </a>
           <a href="#Projects">
           <li className=' text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-500 bg-opacity-45'>Projects</li>
           </a>
           <a href="#Footer">
           <li className=' text-md transition-all duration-300 p-1 md:p-0 hover:text-gray-500 bg-opacity-45'>Contact</li>
           </a>
            
      </ul>
      { showMenu ? (
            <RiMenu2Line size={30} className='md:hidden absolute right-10 transition-all duration-300'
            onClick={() =>
                  {openMenu(!menu);
                    setShowMenu(!showMenu);
                  }} />
      ):( <RiCloseLine size={30} className='md:hidden absolute right-10 transition-all duration-300' />)}
    
      </nav>
  )
}

export default Navber