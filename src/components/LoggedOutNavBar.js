import React from 'react';
import {Link} from "react-router-dom";

function LoggedOutNavBar() {
    return (
        <nav className="logged-out-nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default LoggedOutNavBar;
