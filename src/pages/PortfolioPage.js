import React, { Component } from 'react';
import {createPortfolio} from '../utilities/api';
import 'bulma/css/bulma.css';
import DefaultLayout from '../layouts/DefaultLayout';
// import {Button} from 'react-bootstrap';
// import {Modal} from 'react-bootstrap';
// import Example from '../components/Example';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

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

    
    formSubmit(event) {
        debugger
        event.preventDefault();
        createPortfolio(this.state.portfolio)
        .then((response) => {
            this.setState({
                portfolio: response.data
            })
        })
        .catch((error) => {
            console.log(error);
            this.setState({error: error.response && error.response.data});
        });
    }

    onChange(event) {
        let portfolioCopy = {...this.state.portfolio};

        portfolioCopy[event.target.name] =  event.target.value;
        this.setState({
            portfolio: portfolioCopy
        });
    }

    render() {
        return (
            <DefaultLayout>

            
            <div className="portfolio-page">
                <div>
                    <h1>Portfolio</h1>
                </div>
                <div>
                    <button>+</button>
                </div>



                <div>
                    <form onSubmit={(event) => this.formSubmit(event)}>
                        <input 
                            type="text" 
                            name="name"
                            value={this.state.name} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Portfolio Name"/>
                        <input 
                            type="text" 
                            name="description"
                            value={this.state.description} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Portfolio Description"/>
                        <button>Create portfolio</button>             
                    </form>
                </div>
                <div>
                    {this.state.portfolio.map((stock, index) => 
                        <div key={index}>
                            <h1>{this.state.portfolio.name}</h1>
                            <p>{this.state.portfolio.description}</p>
                        </div>
                    )}           
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

export default PortfolioPage
