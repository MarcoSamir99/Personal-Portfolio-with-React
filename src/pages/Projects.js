import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../seeds/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1></h1>
      <div className='projectList'>
       {ProjectList.map((project) => {
        return <ProjectItem name={project.name} image={project.image} id={project.id} />
       })}
      </div>
    </div>
  )
}

export default Projects