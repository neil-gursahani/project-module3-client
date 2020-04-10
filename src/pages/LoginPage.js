import React, { Component } from 'react';
import {login} from '../utilities/auth';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            user: {
                email: '',
                password: ''
            }, 

            error: null
                
        }
    }

    formSubmit(event) {
        // event.preventDefault();
        login(this.state.user)
        .then((response) => {
            this.setState({
                error: null
        },

        () => {
            this.props.history.push("/stocks");
        });
    })
        .catch((error) => {
            console.log(error.response.data)
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
    })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                <div class="field">
                    <div class="control">
                        <input type="email" name="email" value={this.state.email} onChange={(event) => this.onChange(event)} placeholder="Email"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input type="password" name="password" value={this.state.password} onChange={(event) => this.onChange(event)} placeholder="Password"/>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
                </form>
                
            </div>
        )
    }
}

export default LoginPage
