import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './mainRouter'
import Header from './header.js'
import React, { useState } from "react";
import SearchAndCategory from './searchAndCategory';
const UserContext = React.createContext(null)


function App() {
  const [loggedUser, setLoggedUser] = useState('')

  const setUser = (user) => {
    setLoggedUser(user);
  }
  return (
    <>
      <UserContext.Provider value={loggedUser}>
        <BrowserRouter>
          <Header setUser={setUser} loggedUser={loggedUser}/>
          <MainRouter />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export {App,UserContext} ;
