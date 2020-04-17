import React, { Component } from 'react';
import {login} from '../utilities/auth';
import Footer from '../components/Footer';
import LoggedOutNavBar from '../components/LoggedOutNavBar';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            // user: {
                email: '',
                password: '',
            // }, 

            error: null 
        };
    }

    formSubmit(event) {
        event.preventDefault();
        login(this.state)
        .then((response) => {
            this.setState({
                error: null
        },

        () => {
            this.props.history.push("/stocks");
            });
        })
        .catch((error) => {
            console.log(error.response.data);
        });
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <LoggedOutNavBar/>
                <div className="authentication">
                    <form className="authentication-login"onSubmit={(event) => this.formSubmit(event)}> 
                    <div className="field">
                        <div className="control">
                            <input type="email" name="email" required value={this.state.email} onChange={(event) => this.onChange(event)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="password" name="password" required value={this.state.password} onChange={(event) => this.onChange(event)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="field">
                            <p className="control">
                                <button className="button is-success">
                                Login
                                </button>
                            </p>
                        </div>
                    <p>Don't have an account? <a href="/signup">Sign up!</a></p>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage
