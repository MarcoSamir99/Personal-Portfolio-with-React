import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Navbar() {
  
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation(); //this location state used to get data about which url i am in

  useEffect(() => {
    setExpandNavbar(false)   //this mean if the location changes we set expandNavbarto false
  }, [location]);

  return (
  <div className='navbar' id={expandNavbar ? "open" : "close"}>
    <div className='toggleButton'>
      <button onClick={()=> {
        setExpandNavbar(!expandNavbar);
        }}
        ><ReorderIcon/> </button>
    </div>
    <div className='links'>
      <Link className='route' id={ location.pathname === '/' ? 'active': ''} to='/'> Home </Link>
      <Link className='route' id={ location.pathname === '/projects' ? 'active': ''} to='/projects'> Projects </Link>
      <Link className='route' id={ location.pathname === '/experience' ? 'active': ''} to='/experience'> Experience </Link>
    </div>
  </div>
  );  
}
