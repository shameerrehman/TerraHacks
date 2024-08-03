import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import './Navbar.css'
import logo from './logo.png';  // Import the logo image
import { IconButton } from '@mui/material';


function Navbar() {
  return (
    <div className='header'>
        <IconButton href='/login'>
            <PersonIcon fontSize='large'/>
        </IconButton>
        
        <a href='/items'><img className='logo' 
        src= {logo}
        alt='style swap'
        /></a>
        <IconButton>
            <ForumIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default Navbar