import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store";


const Main = () => {
    return (
<Provider store={store}>
    <BrowserRouter>
        <Switch>

            <Route path='/'>
                <App/>
            </Route>


        </Switch>

    </BrowserRouter>
</Provider>


    );
};

export default Main