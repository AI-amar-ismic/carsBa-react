import React, { useEffect, useState, useContext } from "react";
import './search.css'
import menuItem from './imgs/menuIcon.png'


export default function SearchAndCategory(props) {


    const [anchorEl, setAnchorEl] = useState();
    let logoutPop = anchorEl ? Boolean(anchorEl) : undefined;


   

    

    return (
        <div id='searchBar'>
            <div id='category'>
                <img src={menuItem} alt='menuItem' id='menuItem'></img>
                <p>Cars by Category</p>
            </div>
            <div id='searchBox'>
                <input type="text" id="searchField" placeholder='Search Cars' value={props.searchParam} onChange={props.handleChange}></input>
            </div>
            <div id='lang'>
                <p className='langSwitch'>EN</p>
                <p className='langSwitch'>BS</p>
            </div>
            
        </div>
    )
}

