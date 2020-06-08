import React from 'react'
import Search from '../components/Search/Search'
import Login from '../components/Form/Form'
import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/search" component={Search} />
        </Switch>
    );
}

export default Routes;