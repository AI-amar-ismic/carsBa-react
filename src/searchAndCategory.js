import React, { useEffect, useState, useContext } from "react";
import './search.css'
import menuItem from './imgs/menuIcon.png'
import Popover from '@material-ui/core/Popover';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


export default function SearchAndCategory(props) {


    const [anchorEl, setAnchorEl] = useState();
    let logoutPop = anchorEl ? Boolean(anchorEl) : undefined;

    const [loggedUser, setLoggedUser] = useState('amar')

    const handleCloseLogin = () => {
        setAnchorEl(null);
    }

    const handleOpenLogin = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleUsernameChange = () => (event) => {
        setLoggedUser(event.target.value);
    }

    const login = () => {
        
        props.handleSetLoggedUser(loggedUser);
        handleCloseLogin();
    }

    const logout = () =>{
        props.handleSetLoggedUser('');
        handleCloseLogin();
    }

    return (
        <div id='searchBar'>
            <div id='category'>
                <img src={menuItem} alt='menuItem' id='menuItem'></img>
                <p>Cars by Category</p>
            </div>
            <div id='searchBox'>
                <input type="text" id="searchField" placeholder='Search Cars' value={props.searchParam} onChange={props.handleChange}></input>
            </div>
            <div id='loginButton'>
                {loggedUser === '' ? (
                    <>
                        <p className='SearchB' onClick={handleOpenLogin}>Login</p>
                        <p className='SearchB'>Sign Up</p>
                    </>
                ) : (
                    <p className='SearchB' onClick={handleOpenLogin}>{loggedUser}</p>
                )}
                <Popover
                    id='logout-popover'
                    open={logoutPop}
                    anchorEl={anchorEl}
                    onClose={handleCloseLogin}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    
                        <div className='loginCredentialsContainer'>
                            
                            {loggedUser === '' ? (
                                <>
                                    <h4>Log In</h4>
                                    <TextField
                                        id='username'
                                        className='nameandpass'
                                        value={loggedUser.username}
                                        handleChange={handleUsernameChange}
                                        label='Username'
                                        variant='outlined'
                                    />
                                    <TextField
                                        id='password'
                                        className='nameandpass'
                                        label='Password'
                                        type='password'
                                        variant='outlined'
                                    />
                                    <Button variant="contained" color="secondary" id='sellButton' onClick={login}>
                                        Log in
                                    </Button>
                                </>
                            ) : (
                                <>
                                <h4>Log Out</h4>
                                <p>Hello {loggedUser}</p>
                                <Button variant="contained" color="secondary" id='sellButton' onClick={logout}>
                                        Log out
                                </Button>
                                </>
                            )}
                        </div>
                    
                </Popover>

            </div>
        </div>
    )
}

