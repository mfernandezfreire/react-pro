// React Router DOM V6
// Is mandatory do npm add react-router-dom@6
import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';


export const NavigationReactRouterDOM6 = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Route Logo" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />}
                                />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}

// React Router DOM V5
// Is mandatory do npm add react-router-dom@5
// When installation is done install react-router-dom @types

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink
// } from "react-router-dom";

// import logo from '../logo.svg';

// export const NavigationReactRouterDOM5 = () => {
//     return (
//         <Router>
//             <div className="main-layout">
//                 <nav>
//                     <img src={logo} alt="React Logo" />
//                     <ul>
//                         <li>
//                             <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/about">
//                         <h1>About</h1>
//                     </Route>
//                     <Route path="/users">
//                         <h1>Users</h1>
//                     </Route>
//                     <Route path="/">
//                         <h1>Home</h1>
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
