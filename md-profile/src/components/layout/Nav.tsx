import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {routes} from '../../resources'
const Nav = ()=>{
    return <nav>
        <ul>
            <li>
            <NavLink to={routes.HOME} exact activeClassName="selected">Home</NavLink> 
            </li>
        </ul>
    </nav>
}
export default Nav;