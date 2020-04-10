import React, { Component } from 'react';
import {api} from '../utilities/api';
import StockName from '../components/StockName';
import axios from 'axios';

class AllStocksPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // name: "",
            // symbol: "",
            date: "",
            minute: "",
            marketOpen: "",
            marketClose: "",
            marketHigh: "",
            marketLow: "",
            marketChangeOverTime: "",
            marketNumberOfTrades: ""
        };
    }

    componentDidMount(){
        axios
            .get('https://cloud.iexapis.com/stable/stock/aapl/chart/date/20200409?sort=desc&token=pk_3d70698b98244ac68901d1cda3a83c2d')
            .then(response => {
                console.log(response.data[0]);
                this.setState({
                    // name: response.data[0].,
                    // symbol: response.data[0].,
                    date: response.data[0].date,
                    minute: response.data[0].minute,
                    marketOpen: response.data[0].marketOpen,
                    marketClose: response.data[0].marketClose,
                    marketHigh: response.data[0].marketHigh,
                    marketLow: response.data[0].marketLow,
                    marketChangeOverTime: response.data[0].marketChangeOverTime,
                    marketNumberOfTrades: response.data[0].marketNumberOfTrades
                });
            });
        }

    render() {
        return (
            <div className="all-stocks-table">
                <h1>Stock Prices</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Date</th> 
                        <th>Minute</th> 
                        <th>Market Open</th> 
                        <th>Market Close</th> 
                        <th>Market High</th> 
                        <th>Market Low</th> 
                        <th>Market Change Over Time</th> 
                        <th>Market Number Of Trades</th> 
                    </tr>
                    <tr>
                       
            
                        <td>{this.state.date}</td>
                        <td>{this.state.minute}</td>
                        <td>{this.state.marketOpen}</td>
                        <td>{this.state.marketClose}</td>
                        <td>{this.state.marketHigh}</td>
                        <td>{this.state.marketLow}</td>
                        <td>{this.state.marketChangeOverTime}</td>
                        <td>{this.state.marketNumberOfTrades}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default AllStocksPage
