import { Route, Switch } from "react-router-dom";
import Home from "./homeScreen.js";
import CarsScreen from "./carsscreen.js"
import AboutScreen from './aboutScreen.js'
import ContactScreen from './contactScreen.js'
export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route path='/cars'><CarsScreen/></Route>
                <Route path='/about'><AboutScreen/></Route>
                <Route path='/contact'><ContactScreen/></Route>
                <Route exact path='/'><Home /></Route>
            </Switch>
        </div>
    )
}