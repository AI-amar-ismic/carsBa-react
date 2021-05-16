import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import logo from './imgs/logo.jpeg'
import { UserContext } from "./App.js";
import Popover from '@material-ui/core/Popover';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import { AlarmAddRounded } from "@material-ui/icons";



export default function Header(props) {
    const [loggedUser, setLoggedUser] = useState('')
    const [anchorEl, setAnchorEl] = useState();
    let logoutPop = anchorEl ? Boolean(anchorEl) : undefined;

    useEffect(()=>{
        console.log(loggedUser)
    },[])

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
        console.log(loggedUser)
        props.setUser(loggedUser);

        handleCloseLogin();
    }

    const logout = () =>{
        props.setUser(null);
        handleCloseLogin();
    }
    return (
        <div id='navBar'>
            <div id='logoContainer'>
                <Link to='/' ><img id='logo' src={logo} alt='logo'></img></Link>
            </div>
            <div id='mainButtons'>
                <Link to='/' className='navItem'>Home</Link>
                <Link to='/cars' className='navItem'>Cars</Link>
                <Link to='/about' className='navItem'>About Us</Link>
                <Link to='/contact' className='navItem'>Contact Us</Link>
            </div>
            <div id='loginButton'>
                {loggedUser==='' ? (
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
                                        value={loggedUser}
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