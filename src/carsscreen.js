import SearchAndCategory from './searchAndCategory.js'
import HomeDiv from './homeDiv.js'
import React, { useEffect, useState, useContext } from "react";
import carPhoto from './imgs/carPhoto.jpg'
import mileageIcon from './imgs/mileage.png'
import fuelIcon from './imgs/fuel.png'
import gearIcon from './imgs/gearbox.png'
import Card from '@material-ui/core/Card';
import './carsScreen.css'
import { CardContent } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default function CarsScreen() {

    const [searchParam, setSearchParam] = useState('')
    const [loggedUser, setLoggedUser] = useState('amar')
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
    const [modelList,setModelList] = useState([])
    const [audiModel, setAudiList] = useState(['A1','A3','A4','A5','A6','A7','A8']);
    const [mercedesModel, setMercedesList] = useState(['A','B','C','E','S']);
    const [bmwModel, setBmwList] = useState(['1','3','4','5','7']);
    
    //     {
    //         brand:'Audi',
    //         models:['A1','A3','A4','A5','A6','A7','A8']
    //     },
    //     {
    //         brand:'Mercedes',
    //         models:['A','B','C','E','S']
    //     },
    //     {
    //         brand:'BMW',
    //         models:['1','3','4','5','7']
    //     },
    //     {
    //         brand:'Skoda',
    //         models:['Octavia','Fabia','Superb','Kodiaq','Karoq']
    //     },
    //     {
    //         brand:'Ford',
    //         models:['Focus','Mondeo','Fiesta']
    //     }

    // ])
    const [openedItem, setOpenedItem] = useState({
        brand: "",
        model: "",
        price: 0,
        year: 0
    });
    const [filteredItems, setFilteredItems] = useState([])
    const [isItemDialogOpen, setIsItemDialogOpen] = useState(false)
    const [brandFilter, setBrandFilter] = useState('')
    const [modelFilter, setModelFilter] = useState('')

    useEffect(() => {
        setFilteredItems(items)
    }, [items])

    const handleChange = (event) => {
        setSearchParam(event.target.value)
    }

    const handleSetLoggedUser = (user) => {
        setLoggedUser(user);
    }

    const handleOpenItem = (value) => (event) => {
        setOpenedItem(value);
        setIsItemDialogOpen(true);
    }

    const handleBrandFilterChange = (event) =>{
        setBrandFilter(event.target.value);
    }
    const handleModelFilterChange = (event) =>{
        setModelFilter(event.target.value)
    }

    useEffect(()=>{
        brandFilter==='audi' && setModelList(['A1','A3','A4','A5','A6','A7','A8'])
        brandFilter==='bmw' && setModelList(['1','3','4','5','7'])

    },[brandFilter])
    return (
        <>
            <SearchAndCategory searchParam={searchParam} handleChange={handleChange} handleSetLoggedUser={handleSetLoggedUser} />
            <HomeDiv passedName='Cars' />
            <div className='carsAndFilterContainer'>
                <div className='filterContainer'>
                    <Card className='filterCard' elevation={3}>
                        <CardContent>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Brand</FormLabel>
                                <RadioGroup aria-label="brand" name="brand" value={brandFilter} onChange={handleBrandFilterChange}>
                                    <FormControlLabel value="ford" control={<Radio />} label="Ford" />
                                    <FormControlLabel value="audi" control={<Radio />} label="Audi" />
                                    <FormControlLabel value="bmw" control={<Radio />} label="BMW" />
                                    <FormControlLabel value="mercedes" control={<Radio />} label="Mercedes" />
                                    <FormControlLabel value="volkswagen" control={<Radio />} label="Volkswagen" />
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>
                    
                    <Card className='filterCard' elevation={3}>
                        <CardContent>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Model</FormLabel>
                                <RadioGroup aria-label="model" name="model" value={modelFilter} onChange={handleModelFilterChange}>
                                    {modelList.map((row,index)=>(
                                        <FormControlLabel value={row} control={<Radio />} label={row} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>
                    <div className='filterCard'></div>
                    <div className='filterCard'></div>
                    <div className='filterCard'></div>
                    <div className='filterCard'></div>

                </div>
                <div className='carsContainer'>
                    {filteredItems.map((row, index) => (
                        <Card className='card' raised={true} key={index} onClick={handleOpenItem(row)}>
                            <div className="imageContainer">
                                <img src={carPhoto} alt='bookImage' className='carImg' />
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
            </div>
        </>
    )
}