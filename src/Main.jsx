import React from 'react';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";
import Settings from "./components/Header/Settings/Settings";


const Main = () => {
    return (
<Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/'>
                <App/>
            </Route>
        </Switch>
        <Route path="/settings">
            <Settings />
        </Route>
    </BrowserRouter>
</Provider>


    );
};

export default Main