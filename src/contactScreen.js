import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import React, { useEffect, useState, useContext } from "react";
import "./contactScreen.css"








export default function ContactScreen() {





    const [loggedUser, setLoggedUser] = useState('amar')








    const handleSetLoggedUser = (user) => {
        setLoggedUser(user);
    }

    return ( 
        <>
        <SearchAndCategory handleSetLoggedUser = { handleSetLoggedUser }/> 
        <HomeDiv passedName = 'Contact Us' />

        <div class = "formContainer" >
        <form >
        <span >
        <input type = "text"
        id = "inputBox"
        placeholder = "Full Name" />
        </span> 
        <span id = "span" >
        <input id = "inputBox"
        type = "number"
        placeholder = "Phone" />
        </span>

        <span >
        <input type = "email"
        id = "inputBox"
        placeholder = "Email" />
        </span>

        <br />
        <h3 > Enter your message: </h3> 
        <input className = "messageBox"
        type = "text"
        placeholder = "" />
        <br />
        <div>
        <input type = "button"
        name = "submit"
        id = "submitButton"
        value = "Submit"
        onclick = "signup(); return false;" />
        </div> 
        </form> 
        </div>  
        </>
    )
}