import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class StockNewsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stockNews: [] 
        };
    }

    componentDidMount() {
        axios.get(`https://cloud.iexapis.com/stable/stock/${this.props.match.params.stockId}/news/last/3?token=pk_3d70698b98244ac68901d1cda3a83c2d `)
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
                {this.state.stockNews.map((stock, index) => 
                <Card style={{ width: '100%' }}>
                <Card.Img src={stock.image}/>
                <Card.Body>
                  <Card.Title>{stock.headline}</Card.Title>
                  <Card.Text><b>Source:</b> {stock.source}</Card.Text>
                  <Card.Text>{stock.summary}</Card.Text>
                  <Link to={stock.url}><Button>Read more!</Button></Link>
                </Card.Body>
              </Card>
                //     <div className="column is-half">
                //     <div className="card">
                //         <div className="card-image">
                //             <figure className="image is-3by2">
                //                 <img src={stock.image} alt="Placeholder image"/>
                //             </figure>
                //         </div>
                //         <div className="card-content">
                //             <div className="media">
                //                 <div className="media-content">
                //                     <Link to={stock.url}>
                //                         <p className="title is-4">{stock.headline}</p>
                //                     </Link>
                //                     <br/>
                //                     <p className="subtitle is-6"><b>Source:</b> {stock.source}</p>
                //                 </div>
                //             </div>
                //             <div class="content news-summary">{stock.summary}
                //             </div>
                //         </div>
                //     </div>
                // </div>
                )}
            </div>
        )
    }

    
}

export default StockNewsPage
