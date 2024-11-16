import React from 'react'
import bannerImg from "../../assets/img/03.webp"

const ProjectsCard = ({title,main}) => {
return (
<div id='ProjectsCard' className='p-3 md:p-6 flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-lg'>
<img className='p-4 rounded-lg' src={bannerImg}alt="banner" title='banner Img' />
<h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
      {title}
</h3>
<p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
<div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 ">
      <button className="md:mt-4 text-white py-2 px-3 md:px-lg md:py-2 text-sm md:text-lg md:px-4 hover:bg-opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-[#465697">
            Demo
            </button>
      <button className="md:mt-4 text-white py-2 px-3 md:px-lg md:py-2 text-sm md:text-lg md:px-4 hover:bg-opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-[#465697">
            Source Code
            </button>
</div>
</div>
)
}

export default ProjectsCard