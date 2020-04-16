import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class StockNewsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stockNews: [] 
        };
    }

    componentDidMount() {
        // axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.match.params.stockId}/news/last/3?token=pk_3d70698b98244ac68901d1cda3a83c2d `)
        axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/news/last/3?token=pk_3d70698b98244ac68901d1cda3a83c2d `)
        // axios.get(`https://cloud.iexapis.com/stable/stock/aapl/news/last/3?token=pk_3d70698b98244ac68901d1cda3a83c2d `)

        .then(response => {
            this.setState({stockNews: response.data});
            // console.log(response.data);
        })
        .catch((error)=> {
            // console.log(error);
		});
    }

    render() {
        const stockNews = this.state.stockNews;
        console.log(stockNews.headline);

        return (
            <div className="stock-news-component columns">
                {/* <div>
                    <h1>Recent News...</h1>
                </div> */}
               {/* <div> */}
                    {this.state.stockNews.map((stock, index) => 
                        <Card style={{ width: '25%'}}>
                            <Card.Img className="news-image"src={stock.image} />
                            <Card.Body>
                                <Card.Title>{stock.headline}</Card.Title>
                                <Card.Text><b>Source:</b> {stock.source}</Card.Text>
                                <Card.Text className="stock-news-summary">{stock.summary}</Card.Text>
                                <Link to={stock.url}><Button>Read more!</Button></Link>
                            </Card.Body>
                        </Card>
                    )}
                {/* </div> */}
            </div>
        )
    }

    
}

export default StockNewsComponent
