import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import React, { useEffect, useState, useContext } from "react";








export default function ContactScreen() {

    
    const [loggedUser, setLoggedUser] = useState('amar')
    
    
    

    

  

    const handleSetLoggedUser = (user) => {
        setLoggedUser(user);
    }

 
  

    
    return (
        <>
            <SearchAndCategory  handleSetLoggedUser={handleSetLoggedUser} />
            <HomeDiv passedName='Siiiiidje' />
            
        </>
    )
}