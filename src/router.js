import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        );
    }
}

export default Router;