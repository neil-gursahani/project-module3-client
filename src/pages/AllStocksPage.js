import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import StockCompanyInfoComponent from '../components/StockCompanyInfoComponent';

class AllStocksPage extends Component {
    constructor(props) {
        super(props)
        this.filterStocks = this.filterStocks.bind(this);

        this.state = {
            stockNames: []
        };
    }

    filterStocks(event){
        let filteredStockName = this.state.stockNames.filter((stock) => {
            return stock.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
            stockNames: filteredStockName
        })
    }

    // filterStocks = (event) => {
    //     let filteredStockName = this.state.stockNames.filter(stock => {
    //         return stock.name.toLowerCase().includes(event.target.value.toLowerCase());
    //     });

    //     this.setState({
    //         stockNames: filteredStockName
    //     });

    //   };

    componentDidMount(){
        axios
            .get(`https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.REACT_APP_API_KEY}`)
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
                {/* <div>
                {this.state.stockNames.map((stock, index) => (
                    <StockCompanyInfoComponent
                        index={index.toString()}
                        favoriteStock={this.addStock}
                    />
                    ))}
                </div> */}
                <div className="table-blocker">
                    <div>
                        <input type="search"  onChange={(event) => this.filterStocks(event)} id="searchbar" placeholder="Search"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <table className="all-stocks-table table">
                            
                            <thead>
                                <tr>
                                <th>Stock name</th>
                                <th>Stock Symbol</th>
                                <th>Stock Exchange</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.stockNames.map((stock, index) => 
                                <tr key={index}>
                                    <td><Link to={`/stocks/detail/${stock.symbol}`}>{stock.name}</Link></td>
                                    <td>{stock.symbol}</td>
                                    <td>{stock.exchange}</td>
                                </tr>
                                )} 
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                
                             





            </div>
            </DefaultLayout>

        )
    }
}

export default AllStocksPage
