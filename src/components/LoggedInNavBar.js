import React from 'react';
import {Link} from "react-router-dom";

function LoggedInNavBar() {
    return (
        <nav className="logged-in-nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    )
}

export default LoggedInNavBar;
