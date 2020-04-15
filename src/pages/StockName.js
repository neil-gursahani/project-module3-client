import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StockName extends Component {
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
            <div className="all-stocks-table">
                <input className="stock-search" type="text" onChange={this.filterStocks} placeholder='Search Stock'/>
                {this.state.stockNames.map((stock, index) => 
                <div className="single-stock-column" key={index}>
                    <Link to={`/stock/detail/${stock.symbol}`}>
                        <p className="single-stock-info">{stock.name}</p>
                        <p className="single-stock-info">{stock.symbol}</p>
                    </Link>

                    <p className="single-stock-info">{stock.exchange}</p>
                </div>

                )}              



                {/* <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Exchange</th>
                </tr>
                
                {this.state.stockNames.map((stock, index) => 
                <tr> */}
                {/* <div key={beer.id}> */}
                    {/* <Link to={`/stock/${stock.iexId}`}>
                        <td>{stock.name}</td>
                        <td>{stock.symbol}</td>
                        <td>{stock.exchange}</td>
                    </Link>
                </tr>
                )}
                    
                
                </table> */}
            </div>
        )
    }
}

export default StockName
