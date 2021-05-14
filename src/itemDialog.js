import React, { useState, useEffect } from 'react'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './itemDialog.css'
import picture from './imgs/carPhoto.jpg'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import CommuteIcon from '@material-ui/icons/Commute';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DetailsIcon from '@material-ui/icons/Details';
import TodayIcon from '@material-ui/icons/Today';
import LeakAddIcon from '@material-ui/icons/LeakAdd';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CancelIcon from '@material-ui/icons/Cancel';
import DehazeIcon from '@material-ui/icons/Dehaze';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemText from '@material-ui/core/ListItemText';
import { Table } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import EcoIcon from '@material-ui/icons/Eco';
import { Person } from '@material-ui/icons';



export default function ItemDialog({ handleCloseDialog, open, openedItem, loggedUser }) {
    const [car, setCar] = useState({
        brand: "",
        model: "",
        price: "",
        year: ""
    })

    return (
        <Dialog fullWidth={true} maxWidth='md' scroll='body' onClose={handleCloseDialog} open={open} className="itemDialog">
            <DialogTitle >
                <div className='titleContainer'>
                    <h2 id='itemTitle'>{openedItem.brand} {openedItem.model} {openedItem.year}</h2>
                    <CancelIcon id='closeDialogIcon' onClick={handleCloseDialog} />
                </div>
            </DialogTitle>
            <DialogContent className="itemDialogContent">
                <div className='picNamePrice'>
                    <div>
                        <Paper elevation={3} id='imgPaper'>
                            <img id='itemPhoto' src={picture} alt='carPicture'></img>
                        </Paper>
                        {loggedUser!=='' && <div>
                        <p className='miniText'><ChatIcon /> Contact Seller</p>
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter your message here"
                                multiline
                                rows={7}
                                variant="outlined"
                            />
                            <Button id='buttonSubmit' variant="contained">Send message</Button>
                        </div>
                            
                        }
                        
                    </div>
                    <div className='allInfoSection'>
                        <div id='basicInfoSection'>
                            <p className='miniText'><AssessmentIcon /> Basic Info</p>
                            <section className='brandModelInfoSection '>
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                    <div className='cardBorder'>
                                    <CardMedia className='itemQuestion '>
                                        <CommuteIcon />
                                        <p className='miniText'>Brand</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>{openedItem.brand}</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                <div className='cardBorder'>
                                    <CardMedia className='itemQuestion'>
                                        <DriveEtaIcon />
                                        <p className='miniText'>Model</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>{openedItem.model}</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                <div className='cardBorder'>
                                    <CardMedia className='itemQuestion '>
                                        <TodayIcon />
                                        <p className='miniText'>Year</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>{openedItem.year}</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard ' variant='elevation' elevation={3}>
                                    <div className='cardBorder'>
                                    <CardMedia className='itemQuestion '>
                                        <Person />
                                        <p className='miniText'>Seller</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>Amar</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                            </section>
                        </div>
                        <div id='basicInfoSection'>
                            <p className='miniText'><DetailsIcon /> More Info</p>
                            <section className='brandModelInfoSection '>
                                
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                <div className='cardBorder'>
                                    <CardMedia className='itemQuestion'>
                                        <LeakAddIcon />
                                        <p className='miniText'>Mileage</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>250.000km</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                <div className='cardBorder'>
                                    <CardMedia className='itemQuestion'>
                                        <LocalOfferIcon />
                                        <p className='miniText'>Condition</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>Used</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard firstInfoCard' variant='elevation' elevation={3}>
                                <div className='cardBorder'>
                                    <CardMedia className='itemQuestion'>
                                        <PinDropIcon />
                                        <p className='miniText'>Location</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>Sarajevo</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                                <Card className='singleInfoCard priceCard' variant='elevation' elevation={3}>
                                    <div className='cardBorder'>
                                    <CardMedia className='itemQuestion' id='priceQuestion'>
                                        <LocalAtmIcon id='priceIcon' />
                                        <p className='miniText' id='priceIcon'>Price</p>
                                    </CardMedia>
                                    <CardContent>
                                        <h3 className='itemAnswer'>{openedItem.price} KM</h3>
                                    </CardContent>
                                    </div>
                                </Card>
                            </section>
                        </div>
                        <div id='basicInfoSection'>
                            <p className='miniText'><DehazeIcon /> Detailed Info</p>
                            <TableContainer>
                                <Table aria-label="simple table" className='detailedInfoTable'>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell >
                                                <div className='listIcons'>
                                                    <LocalGasStationIcon />
                                                    <p className='smallText'>Fuel</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <h4>Diesel</h4>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className='listIcons'>
                                                    <BatteryChargingFullIcon />
                                                    <p className='smallText'>Power(kW)</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <h4>100</h4>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className='listIcons'>
                                                    <UnfoldMoreIcon />
                                                    <p className='smallText'>Displacement</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <h4>2.0l</h4>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <div className='listIcons'>
                                                    <EcoIcon />
                                                    <p className='smallText'>Emissions</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <h4>Euro 6</h4>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>

                    </div>

                </div>


            </DialogContent>
            <DialogActions className='dialogActions'>

            </DialogActions>
        </Dialog>
    )
}