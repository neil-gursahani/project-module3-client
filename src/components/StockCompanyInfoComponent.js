import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StockCompanyInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oneStock: [],
            favorite: false
        };
        this.favouriteStock = this.favouriteStock.bind(this);
    }

    componentDidMount() {
        axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/company?token=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            this.setState({oneStock: response.data});
        })
        .catch((error)=> {
            console.log(error);
		});
    }

    favouriteStock(){
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/favourites/add/${this.props.symbol}/${this.state.oneStock.companyName}`)
            .then((response)=> {
                this.setState({
                    favorite: true
                })
            })
            .catch((err)=> {
                console.log(err);
            })
    }

    render() {
        const aStock = this.state.oneStock;

        return (
            <div className="stock-detail-component">
                <div className="favorite">
                <h1>{aStock.companyName} ({aStock.symbol})</h1>
                <button   
                    onClick={this.favouriteStock}   
                    className="favorite-button">Favorite &hearts;</button>

                </div>
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
