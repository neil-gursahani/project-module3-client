import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {createPortfolio} from '../utilities/api';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            stock: {
                name: [],
                description: [],
                stocks: []
            },
            error: null
        };
    }

    formSubmit(event) {
        // debugger
        event.preventDefault();
        createPortfolio(this.state.stock)
        .then((response) => {
            this.setState({
                stock: response.data
            // });
            },
            () => {
                this.props.history.push("/portfolio");
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({error: error.response && error.response.data});
        });
    }

    onChange(event) {
        let stockCopy = {...this.state.stock};

        stockCopy[event.target.name] =  event.target.value;
        this.setState({
            stock: stockCopy
        });
    }

    render() {
        return (
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
                    <h1>{this.state.name}</h1>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }
}

export default PortfolioPage
