import { Route, Switch } from "react-router-dom";
import Home from "./homeScreen.js";
import CarsScreen from "./carsscreen.js"

export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route path='/cars'><CarsScreen/></Route>
                <Route exact path='/'><Home /></Route>
            </Switch>
        </div>
    )
}