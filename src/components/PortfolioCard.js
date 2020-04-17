import React, { Component } from 'react'

class PortfolioCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.portfolioName}</h1>
                <p>{this.props.portfolioDescription}</p>
            </div>
        )
    }
}

export default PortfolioCard
