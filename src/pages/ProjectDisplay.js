import React from 'react';
import { useParams } from 'react-router-dom';
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from 'react-router-dom';
import '../styles/ProjectDisplay.css'
import { ProjectList } from '../seeds/ProjectList';


function ProjectDisplay() {
    const { id } = useParams(); 
    const idi = parseInt(id) - 1 ; 
    const project = ProjectList[idi]
  return (
    <div className='project'> 
        <h1>{project.name}</h1>
        <img src={project.image} alt='' />
        <Link to={`${project.url}`} target="_blank"> <GithubIcon /> </Link> 
        
        <p>
            <b>Description: </b>{project.description}
        </p>
        <p>
            <b>Skills: </b>{project.skills}
        </p>
            
    </div>
  )
}

export default ProjectDisplay