import React, { Component } from 'react';
import axios from 'axios';
import StockCompanyInfoComponent from '../components/StockCompanyInfoComponent';
import StockGraphComponent from '../components/StockGraphComponent';
import StockNewsComponent from '../components/StockNewsComponent';
import DefaultLayout from '../layouts/DefaultLayout';

class StockDetailPage extends Component {
    
    constructor(props) {
        super(props)
       
        this.state = {
            portfolio: [
                {
                    name: "",
                    description: "",
                    stocks: []
                },

            ],
            error: null
        };
    }


    // componentDidMount() {
    //     axios
    //     .get(`https://cloud.iexapis.com/stable/stock/${this.props.match.params.stockId}/chart/${this.state.timeInterval}?sort=asc&token=${process.env.REACT_APP_API_KEY}`)
    //     .then((apiResponse) => {
    //         console.log(apiResponse);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }




    render() {

        return (
            <div>
                <DefaultLayout>
                    <div className="stock-detail-page-top">
                        {/* <StockCompanyInfoComponent favoriteStock={this.props.favoriteStockMethod} symbol={this.props.match.params.stockId}/> */}
                        <StockCompanyInfoComponent symbol={this.props.match.params.stockId}/>
                        <StockGraphComponent symbol={this.props.match.params.stockId}/>
                        
                    </div>
                    <div className="stock-detail-page-bottom">
                        <StockNewsComponent symbol={this.props.match.params.stockId}/>
                    </div>
                    
                </DefaultLayout>
            </div>
        )
    }
}

export default StockDetailPage
