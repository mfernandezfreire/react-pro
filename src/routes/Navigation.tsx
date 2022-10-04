// React Router DOM V6
// Is mandatory do npm add react-router-dom@6

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg';

export const NavigationReactRouterDOM6 = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Route Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>RegisterPage </NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="/*" element={<Navigate to="register" replace />} />
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
