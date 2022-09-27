// React Router DOM V6
// Is mandatory do npm add react-router-dom@6

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';

export const NavigationReactRouterDOM6 = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Route Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="about" element={<h1>About Page</h1>} />
                    <Route path="users" element={<h1>Users Page</h1>} />
                    <Route path="home" element={<h1>Home Page</h1>} />
                    <Route path="/*" element={<Navigate to="home" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
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
