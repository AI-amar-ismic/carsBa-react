import React, { useState, useEffect } from 'react'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './dialog.css'
import logo from './imgs/logo.jpeg'


export default function AddDialog ({handleCloseDialog, open, handleCloseAndSave}){
    const [car, setCar] = useState({
        brand: "",
        model: "",
        price: "",
        year: ""
    })
    const handleChange=(event)=>{
        setCar({...car, [event.target.name]:event.target.value});
    }

    const handleSubmit = () =>{
        handleCloseAndSave(car);
        setCar({
            brand: "",
            model: "",
            price: '',
            year: ''
        });

    }
    return(
        <Dialog onClose={handleCloseDialog} open={open} className="dialog">
            <DialogTitle id="dialogTitle"> <img id='logoimg' src={logo} alt='logo'></img> <h3 id='title'>Sell your Car</h3></DialogTitle>
            <DialogContent className="addDialogContent">
                <div className="addDialogEntries">
    
                        <TextField className="addDialogEntry" id="name" label="Brand" name="brand" variant="outlined" value={car.brand} onChange={handleChange} />
                        <TextField className="addDialogEntry" label="Model" name="model" variant="outlined" value={car.model} onChange={handleChange} />
                        <TextField className="addDialogEntry" label="Year" name="year" variant="outlined" value={car.year} onChange={handleChange} />
                        <TextField className="addDialogEntry" label="Price" name="price" variant="outlined" value={car.price} onChange={handleChange} />
                    
                </div>
            </DialogContent>
            <DialogActions className='dialogActions'>
                <Button id='buttonClose' onClick={handleCloseDialog} variant="contained" autoFocus>
                    Close
                </Button>
                <Button id='buttonSubmit' onClick={handleSubmit} variant="contained">Submit</Button>
            </DialogActions>
        </Dialog>
    )
}