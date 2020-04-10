import React, { Component } from 'react';
import axios from 'axios';

class StockName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            symbol: ""
        };
    }

    componentDidMount(){
        axios
            .get('https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_3d70698b98244ac68901d1cda3a83c2d')
            .then(response => {
                console.log(response.data[0]);
                this.setState({
                    stockName: response.data.name,
                    symbol: response.data.symbol
                });
            });
        }

    render() {
        return (
            <div>
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.symbol}</td>
                </tr>
                
            </div>
        )
    }
}

export default StockName
