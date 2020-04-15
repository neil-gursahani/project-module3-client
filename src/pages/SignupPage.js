import React, { Component } from 'react';
import {signup} from '../utilities/auth';
import 'bulma/css/bulma.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        
        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            }, 
            error: null    
        };
    }

    formSubmit(event) {
        event.preventDefault();
        signup(this.state.user)
        .then((response) => {
            this.setState({
                error: null
        },

        () => {
            this.props.history.push("/portfolio");
        });
    })
        .catch((error) => {
            this.setState({error: error.response && error.response.data});
        });
    }

    onChange(event) {
        let userCopy = {...this.state.user};

        userCopy[event.target.name] =  event.target.value;
        this.setState({
            user: userCopy
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.formSubmit(event)}>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input 
                                required
                                pattern="^[A-Za-z]+$" 
                                type="text" 
                                name="firstname" 
                                value={this.state.firstname} 
                                onChange={(event) => this.onChange(event)} 
                                placeholder="First Name"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"/>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"/>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                required
                                pattern="^[A-Za-z]+$" 
                                type="text" 
                                name="lastname" 
                                value={this.state.lastname} 
                                onChange={(event) => this.onChange(event)} 
                                placeholder="Last Name"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                required
                                type="email" 
                                name="email" 
                                value={this.state.email} 
                                onChange={(event) => this.onChange(event)} 
                                placeholder="Email"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input
                                required
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={(event) => this.onChange(event)} 
                                placeholder="Password"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success">
                            Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupPage
