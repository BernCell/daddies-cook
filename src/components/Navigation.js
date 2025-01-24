import React from 'react';
//On importe Navlink
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active" : "" )}>
                <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) =>(nav.isActive ? "nav-active" : "" )}>
                <li>à propos</li>
                </NavLink>
                <NavLink to="/cooking" className={(nav) =>(nav.isActive ? "nav-active" : "" )}>
                <li>cooking</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;