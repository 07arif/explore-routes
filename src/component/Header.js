import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className='nav-item'>
            <nav>
                <NavLink className={({isActive})=>isActive ? 'active': undefined} to='/home'>Home</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/Friends">Friends</NavLink>
                <NavLink to="/post">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;