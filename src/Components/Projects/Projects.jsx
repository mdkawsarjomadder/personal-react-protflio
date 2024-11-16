import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-semibold'>Projects</h1>
      <div className="py-12 px-10 flex flex-wrap gap-5">
            <ProjectsCard 
            title="Blogging WebSite"
             main="This Is A Blogging Website created in the next js ans used some component library" 
             />
            <ProjectsCard 
            title="ToyTube WebSite"
             main="This Is A Blogging Website created in the next js ans used some component library" 
             />
            <ProjectsCard 
            title="NetFlix WebSite"
             main="This Is A Blogging Website created in the next js ans used some component library"
             />
      </div>
    </div>
  )
}

export default Projects