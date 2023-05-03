import React from 'react'
import  GitHubIcon  from '@material-ui/icons/GitHub';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <Link target="_blank" to={"https://github.com/MarcoSamir99"}> <GitHubIcon/> </Link>
            <Link target="_blank" to={'https://www.linkedin.com/in/marco-rizk-8a020b270/'}> <LinkedInIcon/> </Link>
            <Link target="_blank" to={'https://www.facebook.com/koko.messi.357/'}> <FacebookIcon/> </Link>
            <Link target="_blank" to={'https://twitter.com/koka2012s'}> <TwitterIcon/></Link>
        </div>
        <div className='info'>
        <p> &copy; 2023 Marco Rizk</p>
        <p> <CallIcon /> (+20) 128 0989 955</p>
        </div>
    </div>
  )
}

export default Footer;