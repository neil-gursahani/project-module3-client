import React, { Component } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <DefaultLayout>
                <h1>Hello</h1>
            </DefaultLayout>
        )
    }
}

export default Homepage
