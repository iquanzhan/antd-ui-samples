import React, { Component } from 'react';
import {HashRouter,Link,Route,Switch} from "react-router-dom";

import Admin from '../../admin';
 import Index from '../../pages/home';

class RouterDemo extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact={true} component={Admin}></Route>
                        <Route path="/about" component={Index}></Route>
                        <Route render={()=>
                            <div>404 page</div>
                        }/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default RouterDemo;