import React, { Component } from 'react';
import Footer from '../components/Footer';
import LoggedOutNavBar from '../components/LoggedOutNavBar';
import {Link} from 'react-router-dom';

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <LoggedOutNavBar/>
                <div className="homepage-content">
                    <div className="homepage-text">
                        <h1>Stock Tracker</h1>
                        <p>Track all of today's most important stocks in a seamless and simple way.</p>
                        <Link to="/signup">Sign up today!</Link>
                    </div>
                </div>


                <Footer/>
            </div>
            
        )
    }
}

export default Homepage
