import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StockCompanyInfoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oneStock: [] 
        };
    }

    componentDidMount() {
        // axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.match.params.stockId}/company?token=pk_3d70698b98244ac68901d1cda3a83c2d`)
        axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/company?token=pk_3d70698b98244ac68901d1cda3a83c2d`)
        // axios.get(`https://cloud.iexapis.com/stable/stock/aapl/company?token=pk_3d70698b98244ac68901d1cda3a83c2d`)
        .then(response => {
            this.setState({oneStock: response.data});
            // console.log(response);
        })
        .catch((error)=> {
            console.log(error);
		});
    }

    render() {
        const aStock = this.state.oneStock;

        return (
            <div className="stock-detail-component">
                <h1>{aStock.companyName} ({aStock.symbol})</h1>
                <br/>
                <p><b>Stock Exchange:</b> {aStock.exchange}</p>
                <p><b>Industry:</b> {aStock.industry}</p>
                <p><b>Website:</b> <Link to={aStock.website}>{aStock.website}</Link></p>
                <br/>
                <p>{aStock.description}</p>               
            </div>
        )
    }
}

export default StockCompanyInfoComponent
