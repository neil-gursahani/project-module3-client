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
        axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/news/last/3?token=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            this.setState({stockNews: response.data});
        })
        .catch((error)=> {
		});
    }

    render() {
        const stockNews = this.state.stockNews;
        console.log(stockNews.headline);

        return (
            <div className="stock-news-component columns">


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

            </div>
        )
    }

    
}

export default StockNewsComponent
