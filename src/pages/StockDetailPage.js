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
    }

    // componentDidMount() {
    //     axios
    //     .get(`https://cloud.iexapis.com/stable/stock/${this.props.match.params.stockId}/chart/${this.state.timeInterval}?sort=asc&token=pk_3d70698b98244ac68901d1cda3a83c2d`)
    //     .then((apiResponse) => {
    //         console.log(apiResponse);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    favoriteStockMethod() {
        let portfolioCopy = {...this.state.portfolio};
        let portfolioCopy.stocks = 
        this.setState({
            stocks:
        })
    }


    render() {
        debugger
        return (
            <div>
                <DefaultLayout>
                    <div className="stock-detail-page-top">
                        <StockCompanyInfoComponent favoriteStock={this.favoriteStockMethod} symbol={this.props.match.params.stockId}/>
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
