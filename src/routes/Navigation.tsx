// React Router DOM V5
// Is mandatory do npm add react-router-dom@5
// When installation is done install react-router-dom @types

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import logo from '../logo.svg';

export const NavigationReactRouterDOM5 = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="nav-active" exact>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1>
                    </Route>
                    <Route path="/">
                        <ShoppingPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
