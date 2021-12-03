import React from 'react';

import { Switch, Route } from "react-router-dom";
import { Home,TrackOrder, Search, MyCollections ,MyCollectionList,CheckOut,PlaceOrder, Login} from '../screens';
const Navigation = () => {
    return (
        <Switch>
            <Route path="/track-order">
                <TrackOrder />
            </Route>
           
            <Route path="/checkout">
                <CheckOut />
            </Route>
            <Route path="/order-place">
                <PlaceOrder />
            </Route>
            <Route path="/my-collection">
                <MyCollections />
            </Route>
            <Route path="/my-collection-list">
                <MyCollectionList />
            </Route>
            <Route path="/search/:type/:term">
                <Search />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    );
}

export default Navigation