import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Payment from "./payment/payment";
import Card from "./card/card"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Notfound from "./notfound/notFound";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import KpRequest from "./kp-request/kpRequest";

const routing = (
    <Router>
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">FooBank</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/payment">Payment</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "/kpRequest">Simulate KP request</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/card/:url" component={Card}/>
                <Route payh="/kpRequest" component={KpRequest}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
