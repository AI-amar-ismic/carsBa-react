import React, { useEffect, useState, useContext } from "react";
import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import Button from '@material-ui/core/Button';
import './home.css'
import Card from '@material-ui/core/Card';
import carPhoto from './imgs/carPhoto.jpg'
import mileageIcon from './imgs/mileage.png'
import fuelIcon from './imgs/fuel.png'
import gearIcon from './imgs/gearbox.png'
import AddDialog from './dialog.js'
import getAllItems from './api/getAllItems.js'
import addNewItem from './api/addNewItem.js'
import ItemDialog from "./itemDialog.js";


export default function Home() {
    const [items, setItems] = useState([
        {
            brand: "Skoda",
            model: "Superb",
            price: 16000,
            year: 2013
        },
        {
            brand: "Mitsubishi",
            model: "Galant",
            price: 5000,
            year: 2001
        },
        {
            brand: "Cadillac",
            model: "Escalade",
            price: 70000,
            year: 2014
        },
        {
            brand: "Lexus",
            model: "LFA",
            price: 300000,
            year: 2017
        }
    ]);
    const [openedItem, setOpenedItem] = useState({
        brand: "",
        model: "",
        price: 0,
        year: 0
    });
    
    
    const [searchParam, setSearchParam] = useState('')
    const [filteredItems, setFilteredItems] = useState([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [isItemDialogOpen, setIsItemDialogOpen] = useState(false)
    const [loggedUser, setLoggedUser] = useState('amar')
    

    useEffect(()=>{
        refreshItems();
    },[])

    const refreshItems = ()=>{
        getAllItems().then(result=>{
            const itemResult = result.data;
            itemResult.forEach(element => {
                items.push(element);
            });
            setFilteredItems(items);
        })
    }

    useEffect(()=>{
        setFilteredItems(items);
    },[])

    useEffect(()=>{
        if(items.length>0){
            const tempItems = items.filter((x)=> x.brand.includes(searchParam) || x.model.includes(searchParam));
            setFilteredItems(tempItems);
        }
    },[searchParam])

    useEffect(()=>{
        setFilteredItems(items)
    },[items])

    const handleChange = (event) => {
        setSearchParam(event.target.value)
    }

    const handleOpenDialog = ()=>{
        setDialogOpen(true);
    }

    const handleCloseDialog = ()=>{
        setDialogOpen(false);
    }
    const handleCloseItemDialog = ()=>{
        setIsItemDialogOpen(false);
    }


    const handleCloseAndSave =(passedCar)=>{
        addNewItem(passedCar).then(res=>{
            refreshItems();
        })
        // items.push(passedCar);
        setDialogOpen(false);
    }

    const handleOpenItem = (value) => (event) =>{
        setOpenedItem(value);
        setIsItemDialogOpen(true);
    }

    const handleSetLoggedUser = (user) =>{
        setLoggedUser(user);
    }

    return (
        <>
            <SearchAndCategory searchParam={searchParam} handleChange={handleChange} handleSetLoggedUser={handleSetLoggedUser}/>
            <HomeDiv passedName='Home'/>
            <div id='addNewSection'>
                <h2>Recently Added Cars</h2>
                <Button variant="contained" color="secondary" id='sellButton' onClick={handleOpenDialog}>
                    Sell a Car
                </Button>
            </div>
            <div id='itemsSection'>
                {filteredItems.map((row, index) => (
                    <Card className='card' raised={true} key={index} onClick={handleOpenItem(row)}>
                        <div className="imageContainer">
                            <img src={carPhoto} alt='bookImage' className='carImg'/>
                        </div>
                        <div className="contentContainer">
                            <div id='brandYear'>
                            <h3 id='brandModel'>{row.brand} {row.model}</h3>
                            <p>{row.year}</p>
                            </div>
                            <p id='priceInfo'>{row.price} KM</p>
                            <div id='iconsSection'>
                                <img src={mileageIcon} alt='mileageIcon' className='iconsSmall'></img>
                                <img src={gearIcon} alt='gearIcon' className='iconsSmall'></img>
                                <img src={fuelIcon} alt='fuelIcon' className='iconsSmall'></img>
                            </div>
                        </div>
                    </Card>
                ))}

            </div>
            <AddDialog handleCloseDialog={handleCloseDialog} open={dialogOpen} handleCloseAndSave={handleCloseAndSave}/>
            <ItemDialog handleCloseDialog={handleCloseItemDialog} open={isItemDialogOpen} openedItem={openedItem} loggedUser={loggedUser}/>
        </>
    )
}

