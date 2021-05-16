import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import React, { useEffect, useState, useContext } from "react";
import { Divider } from '@material-ui/core';
import "./aboutScreen.css"
import logo from './imgs/logo.jpeg'








export default function AboutScreen() {


    const [loggedUser, setLoggedUser] = useState('amar')





    const handleSetLoggedUser = (user) => {
        setLoggedUser(user);
    }





    return (
         <>
        <SearchAndCategory handleSetLoggedUser={handleSetLoggedUser}/>
         <HomeDiv passedName='About Us' />
        <div id='aboutUsText' >
            <h2 > About Cars.ba </h2>
             <p >
                    Cars.ba is an online marketplace
                    for car lovers, dealers, buyers, and sellers.Network that helps you to find the best price on a new vehicle, as well as a reliable mechanic and dealer.The core idea behind the system is a platform just
                    for buying and selling cars.We have a wide variety of component stores in one location
        for DIY enthusiasts.This is a website that meet strict guidelines in order to maintain its simplicity and modern appearance.It include automatically created article names, a price that must be specified, and no article promotions. < br />
        Our main aim is to bring together people who are passionate about cars and everything related to them, and to make them happy every time they visit <i> Cars.ba. </i> 
        </p> 
        </div>

        
    </>
    )

}