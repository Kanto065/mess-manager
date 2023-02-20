import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/home">Home</a>
                <a href="/req-meal">Request Meal</a>
                <a href="/bazar-expense">Submit Bazar expense</a>
                <a href="/profile">Profile</a>
            </div>
        </nav>
    );
};

export default Header;