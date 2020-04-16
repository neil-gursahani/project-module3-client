import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

class AllStocksPage extends Component {
    constructor(props) {
        super(props)
        this.filterStocks = this.filterStocks.bind(this);

        this.state = {
            stockNames: []
        };
    }

    filterStocks = (event) => {
        let filteredStockName = this.state.stockNames.filter(stock => {
            return stock.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
            stockNames: filteredStockName
        })

      }

    componentDidMount(){
        axios
            .get('https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_3d70698b98244ac68901d1cda3a83c2d')
            .then(response => {
                console.log(response.data);
                this.setState({
                    stockNames: response.data
                });
            });
        }

    render() {
        return (
            <DefaultLayout>
            <div >
                <table className="all-stocks-table table">
                    <thead>
                        <tr>

                        <th><abbr title="Stock Name">Stock Name</abbr></th>
                        <th><abbr title="Stock Symbol">Stock Symbol</abbr></th>
                        <th><abbr title="Stock Exchange">Stock Exchange</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.stockNames.map((stock, index) => 
                        <tr key={index}>
                            <Link to={`/stocks/detail/${stock.symbol}`} className="stock-name-link">
                            <td >{stock.name}</td>
                            </Link>
                            <td>{stock.symbol}</td>

                            
                            <td>{stock.exchange}</td>
                        </tr>
                        )} 
                    </tbody>
                </table>             





            </div>
            </DefaultLayout>

        )
    }
}

export default AllStocksPage
