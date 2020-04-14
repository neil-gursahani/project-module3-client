import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StockName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stockNames: []
        };
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
            <div>
                <table>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Exchange</th>
                </tr>
                
                {this.state.stockNames.map((stock, index) => 
                <tr>
                {/* <div key={beer.id}> */}
                    <Link to={`/stock/${stock.iexId}`}>
                        <td>{stock.name}</td>
                        <td>{stock.symbol}</td>
                        <td>{stock.exchange}</td>
                    </Link>
                </tr>
                )}
                    
                
                </table>
            </div>
        )
    }
}

export default StockName
