import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import React, { useEffect, useState, useContext } from "react";








export default function AboutScreen() {

    
    const [loggedUser, setLoggedUser] = useState('amar')

    

  

    const handleSetLoggedUser = (user) => {
        setLoggedUser(user);
    }

 
  

    
    return (
        <>
            <SearchAndCategory   handleSetLoggedUser={handleSetLoggedUser} />
            <HomeDiv passedName='Siiiidje' />
            {/* 
            P.S. probaj u Cars tabu filtere sa strane sto smo pravili, povezo sam ih sinoc
             */}
        </>
    )
}