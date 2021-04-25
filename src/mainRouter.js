import { Route, Switch } from "react-router-dom";
import Home from "./homeScreen.js";


export default function MainRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/'><Home /></Route>
            </Switch>
        </div>
    )
}