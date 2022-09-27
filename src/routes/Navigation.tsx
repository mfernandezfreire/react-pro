// React Router DOM V6
// Is mandatory do npm add react-router-dom@6

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';

import logo from '../logo.svg';

export const NavigationReactRouterDOM6 = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Route Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="lazy3" element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to="lazy1" replace />} />
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
