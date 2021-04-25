import React, { useEffect, useState, useContext } from "react";
import './search.css'
import menuItem from './imgs/menuIcon.png'

export default function SearchAndCategory({searchParam, handleChange}){

    

    return(
        <div id='searchBar'>
            <div id='category'>
                <img src={menuItem} alt='menuItem' id='menuItem'></img>
                <p>Cars by Category</p>
            </div>
            <div id='searchBox'>
                <input type="text" id="searchField" placeholder='Search Cars' value={searchParam} onChange={handleChange}></input>
            </div>
            <div id='loginButton'>
                <p className='SearchB'>Login</p>
                <p className='SearchB'>Sign Up</p>

            </div>
        </div>
    )
}

