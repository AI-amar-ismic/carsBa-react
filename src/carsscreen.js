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
import ItemDialog from "./itemDialog.js";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';





export default function CarsScreen() {

    const [searchParam, setSearchParam] = useState('')
    const [loggedUser, setLoggedUser] = useState('amar')
    const [items, setItems] = useState([
        {
            brand: "Audi",
            model: "A6",
            price: 16000,
            year: 2013
        },
        {
            brand: "Ford",
            model: "Focus",
            price: 5000,
            year: 2001
        },
        {
            brand: "BMW",
            model: "5",
            price: 30000,
            year: 2014
        },
        {
            brand: "Audi",
            model: "A8",
            price: 40000,
            year: 2017
        },
        {
            brand: "Mercedes",
            model: "S-Class",
            price: 40000,
            year: 2015
        },
        {
            brand: "Ford",
            model: "Fiesta",
            price: 3000,
            year: 2001
        },
        {
            brand: "Volkswagen",
            model: "Golf",
            price: 20000,
            year: 2010
        },
        {
            brand: "Volkswagen",
            model: "Passat",
            price: 25000,
            year: 2011
        },
        {
            brand: "BMW",
            model: "3",
            price: 18000,
            year: 2009
        },
        {
            brand: "BMW",
            model: "3",
            price: 23000,
            year: 2012
        },
        {
            brand: "Mercedes",
            model: "E-Class",
            price: 18000,
            year: 2009
        },
        {
            brand: "Volkswagen",
            model: "Golf",
            price: 5000,
            year: 2002
        }
    ]);
    const [modelList, setModelList] = useState([])

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
    const [priceRangeFilter, setPriceRangeFilter] = useState([0, 500000])
    const [yearRangeFilter, setYearRangeFilter] = useState([2000, 2021])



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

    const handleBrandFilterChange = (event) => {
        setBrandFilter(event.target.value);
    }
    const handleModelFilterChange = (event) => {
        setModelFilter(event.target.value)
    }
    useEffect(() => {
        if (items.length > 0) {
            let tempItems = [];
            items.forEach(element => {

                let tempName = element.brand + ' ' + element.model;
                tempName.includes(searchParam) && tempItems.push(element);
            });
            setFilteredItems(tempItems)
            // const tempItems = items.filter((x)=> x.brand+' '+x.model.includes(searchParam));
            // setFilteredItems(tempItems);
        }
    }, [searchParam])

    useEffect(() => {
        setSearchParam(brandFilter)
    }, [brandFilter])

    useEffect(() => {
        setSearchParam(brandFilter + ' ' + modelFilter)
    }, [modelFilter])

    useEffect(() => {
        brandFilter === 'Audi' && setModelList(['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'])
        brandFilter === 'BMW' && setModelList(['1', '3', '4', '5', '7'])
        brandFilter === 'Ford' && setModelList(['Focus','Mondeo','Fiesta'])
        brandFilter === 'Skoda' && setModelList(['Octavia','Fabia','Superb','Kodiaq','Karoq'])
        brandFilter === 'Mercedes' && setModelList(['A-Class','B-Class','C-Class','E-Class','S-Class'])
        brandFilter === 'Volkswagen' && setModelList(['Golf','Passat','Polo','Touareg','Tiguan'])

    }, [brandFilter])

    const handleCloseItemDialog = () => {
        setIsItemDialogOpen(false);
    }

    const clearFilter = () => {
        setSearchParam('')
        setBrandFilter('')
        setModelList([])
    }

    const handleChangePriceFilter = (event, newValue) =>{
        setPriceRangeFilter(newValue)
    }

    const handleChangeYearFilter = (event,newValue) =>{
        setYearRangeFilter(newValue)
    }


    useEffect(() => {
        if(items.length>0){
            let tempItems = [];
            items.forEach(element => {
                if(element.price>=priceRangeFilter[0]&&element.price<=priceRangeFilter[1]){
                    tempItems.push(element);
                }
            });
            setFilteredItems(tempItems)
        }
    }, [priceRangeFilter])

    useEffect(() => {
        if(items.length>0){
            let tempItems = [];
            items.forEach(element => {
                if(element.year>=yearRangeFilter[0]&&element.year<=yearRangeFilter[1]){
                    tempItems.push(element);
                }
            });
            setFilteredItems(tempItems)
        }
    }, [yearRangeFilter])

    return (
        <>
            <SearchAndCategory searchParam={searchParam} handleChange={handleChange} handleSetLoggedUser={handleSetLoggedUser} />
            <HomeDiv passedName='Cars' />
            <div className='carsAndFilterContainer'>
                <div className='filterContainer'>
                    <Card className='filterCard'>
                        <CardContent>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Brand</FormLabel>
                                <RadioGroup aria-label="brand" name="brand" value={brandFilter} onChange={handleBrandFilterChange}>
                                    <FormControlLabel value="Ford" control={<Radio />} label="Ford" />
                                    <FormControlLabel value="Audi" control={<Radio />} label="Audi" />
                                    <FormControlLabel value="BMW" control={<Radio />} label="BMW" />
                                    <FormControlLabel value="Mercedes" control={<Radio />} label="Mercedes" />
                                    <FormControlLabel value="Volkswagen" control={<Radio />} label="Volkswagen" />
                                </RadioGroup>
                            </FormControl>
                            <Button id='sellButton' onClick={clearFilter}>
                                Clear
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className='filterCard' >
                        <CardContent>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Model</FormLabel>
                                <RadioGroup aria-label="model" name="model" value={modelFilter} onChange={handleModelFilterChange}>
                                    {modelList.map((row, index) => (
                                        <FormControlLabel value={row} control={<Radio />} label={row} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>
                    <Card className='filterCard' id='priceRangeFilterContainer'>
                        <CardContent>
                            <h4>Price</h4>
                            <Slider
                                value={priceRangeFilter}
                                onChange={handleChangePriceFilter}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                id='sliderItself'
                                color='secondary'
                                min={1000}
                                max={50000}
                            />
                            <div className='minMaxTextContainer'>
                                <p className='minMaxText'>{priceRangeFilter[0]}</p>
                                <p className='minMaxText'>{priceRangeFilter[1]}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='filterCard' id='priceRangeFilterContainer'>
                        <CardContent>
                            <h4>Year</h4>
                            <Slider
                                value={yearRangeFilter}
                                onChange={handleChangeYearFilter}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                id='sliderItself'
                                color='secondary'
                                min={2000}
                                max={2021}
                            />
                            <div className='minMaxTextContainer'>
                                <p className='minMaxText'>{yearRangeFilter[0]}</p>
                                <p className='minMaxText'>{yearRangeFilter[1]}</p>
                            </div>
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
                                    <h4 id='brandModel'>{row.brand} {row.model}</h4>
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
            <ItemDialog handleCloseDialog={handleCloseItemDialog} open={isItemDialogOpen} openedItem={openedItem} loggedUser={loggedUser} />

        </>
    )
}