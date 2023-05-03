import React from 'react';
import '../styles/Home.css';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Link } from 'react-router-dom';
import Marco_rizk from '../assets/Marco_rizk.pdf'

function Home() {
  return (
  <div className='home'>
    <div className='about'>
      <h2>Hi, I am Marco Rizk</h2>
      <div className='prompt'>
        <p>
          A Software Developer with high ambitions to learn and create websites and web applications
        </p> 
        <Link target="_blank" to={'https://www.linkedin.com/in/marco-rizk-8a020b270/'}><LinkedInIcon/></Link> 
        <Link target="_blank" to={'https://github.com/MarcoSamir99'}><GithubIcon/></Link> 
        <Link type='mail' target="_blank" to={'mailto:marcosamirrizk@gmail.com'}><EmailIcon/></Link> 
      </div>
      <a href={Marco_rizk} download="Marco_rizk" target='_blank'><CloudDownloadIcon /> My Resume Here </a>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>Front-End</h2>
          <span>
            ReactJs, Angular, Redux, HTML, CSS, NPM, BootStrap, TailwindCSS, Bulma,
            Redux & Hooks Toolkit and Redux Toolkit Query 
          </span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>
            NodeJs, ExpressJS, MongoDB, NestJs, Passport, Helmet, MapBox, Axios, JSON server
          </span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span> JavaScript, TypeScript and ejs</span>
        </li>
      </ol>
    </div>
  </div>
  );
}

export default Home