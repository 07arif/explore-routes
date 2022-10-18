import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className='nav-item'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/Friends">Friends</Link>
                <Link to="/post">Post</Link>
                <Link to="/about">About</Link>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;