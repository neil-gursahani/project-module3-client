import React from 'react';
import {Link} from "react-router-dom";

function LoggedInNavBar() {
    return (
        <nav className="logged-out-nav-bar">
            <Link to='/stocks'>
                <h4>StockTrack</h4>   
            </Link>
            
            <ul>
                <li><Link to="/stocks">Stocks</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    )
}

export default LoggedInNavBar;
