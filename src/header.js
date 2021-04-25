import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import logo from './imgs/logo.jpeg'

export default function Header() {
    return (
        <div id='navBar'>
            <div id='logoContainer'>
                <Link to='/' ><img id='logo' src={logo} alt='logo'></img></Link>
            </div>
            <div id='mainButtons'>
                <Link to='/' className='navItem'>Home</Link>
                <Link to='/' className='navItem'>Cars</Link>
                <Link to='/' className='navItem'>About Us</Link>
                <Link to='/' className='navItem'>Contact Us</Link>
            </div>
            <div id='lang'>
                <p className='langSwitch'>EN</p>
                <p className='langSwitch'>BS</p>
            </div>
        </div>

    )
}