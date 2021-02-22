import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from '../../resources';
import { Store } from '../../types';
import { colors } from '../../styles';

const Nav = () => {
    const user = useSelector(({ user } : Store) => user);

    return <nav>
        <ul>
            <li> <NavLink to={routes.HOME} exact activeClassName="selected">Home</NavLink> </li>
            <li> <NavLink to={routes.STORE} exact activeClassName="selected">Store</NavLink> </li>

            {user &&
                <li> <NavLink to={routes.ORDERS} exact activeClassName="selected">{!user.admin && 'My '}Orders</NavLink> </li>
            }
            
            {user?.admin &&
                <li> <NavLink to={routes.USERS} exact activeClassName="selected">Users</NavLink> </li>
            }
            <li> <NavLink to={routes.ABOUT} exact activeClassName="selected">About</NavLink> </li>
            <li> <NavLink to={routes.CONTACT} exact activeClassName="selected">Contact</NavLink> </li>
        </ul>

        <style>{`
            nav a {
                color: ${colors.GRAYSCALE[5]};
                outline: none;
                user-select: none;
                font-size: 1.25rem;
            }

            nav .selected {
                color: ${colors.LIGHTEST};
            }

            nav a:hover, nav a:focus {
                color: ${colors.LIGHTER};
            }

            nav a:active {
                color: ${colors.DARKER};
            }
        `}</style>
    </nav>
}

export default Nav;
