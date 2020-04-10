import React from 'react';
import LoggedInNavBar from '../components/LoggedInNavBar';
import Footer from '../components/Footer';

function DefaultLayout(props) {
    return (
        <div>
            <LoggedInNavBar/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default DefaultLayout;
