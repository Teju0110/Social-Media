import React from 'react'
import {Search, Person, Chat, Notifications} from '@material-ui/icons';
import './NavBar.css'
import profile from '../Images/Profile.jpg'
import { Link } from 'react-router-dom';


const NavBar = () => { 
    
  return (
    <div className='navBar'>
        <div className='navBar_Left'>
            <span className='logo'>MYBook</span>
        </div>
        <div className='navBar_Center'>
            <div className='searchBar'>
                <Search className='searchIcon'/>
                <input  placeholder='Search For Friend, Post and Video' className='searchInput'/>
            </div>
        </div>
        <div className='navBar_Right'>
            <div className='navBarLinks'>
                <Link to='/home'>
                <span className='navBarLink'>HomePage</span>
                </Link>
                <span className='navBarLink'>Timeline</span>
            </div>
            <div className='navbarIcons'>
                <div className='navBarIconItem'>
                <Person/>
                <span className='navBarIconBadge'>1</span>
                </div>
                <div className='navBarIconItem'>
                <Chat/>
                <span className='navBarIconBadge'>1</span>
                </div>
                <div className='navBarIconItem'>
                <Notifications/>
                <span className='navBarIconBadge'>1</span>
                </div>
            </div>
            <Link to='/profile'>
            <img src={profile} alt="" className='navBarImg'/>
            </Link>
            <Link to='/login'>
                <button className='logOut'>Log Out</button>
            </Link>
        </div>

    </div>
  )
}

export default NavBar