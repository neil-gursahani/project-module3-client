import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {createPortfolio} from '../utilities/api';

class AllStocksPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: '',
            description: ''

        };
    }

    // componentDidMount(){
    //     axios
    //         .get('https://cloud.iexapis.com/stable/stock/aapl/chart/date/20200409?sort=desc&token=pk_3d70698b98244ac68901d1cda3a83c2d')
    //         .then(response => {
    //             console.log(response.data[0]);
    //             this.setState({stockData: response.data});
    //             console.log(response.data[0]);
    //         });
    //     }

    formSubmit(event) {
        event.preventDefault()
        .then((response) => {
            this.setState({
                error: null
        },

        () => {
            this.props.history.push("/portfolio");
        });
    })
        .catch((error) => {
            this.setState({error: error.response && error.response.data});
        });
    }

    render() {
        return (
            <div className="portfolio-page">
                <div>
                    <h1>Portfolio</h1>
                    <button>+</button>
                </div>
                <div>
                    <form onSubmit={(event) => this.formSubmit(event)}>
                        <input type="text" value="name" placeholder="Portfolio Name"></input>
                        <input type="text" value="description" placeholder="Portfolio Description"></input>
                        <submit>Create portfolio</submit>
                    </form>
                </div>
                <div>

                </div>
               
        
            </div>
        )
    }
}

export default AllStocksPage
