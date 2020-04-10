import React, { Component } from 'react';
import {signup} from '../utilities/auth';

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            user: {
                username: '',
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                dateOfBirth: ''
                // investingExperience: '' 
            }, 
            error: null    
        }
    }

   
    formSubmit(event) {
        event.preventDefault();
        signup(this.state.user)
        .then((response) => {
            this.setState({
                error: null
        },

        () => {
            debugger
            this.props.history.push("/stocks");
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

    // why does this not work??
    // onChange(event) {
    //     debugger
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }


    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>

                <div class="field">
                    <div class="control">
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.username} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Username"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input 
                            type="text" 
                            name="firstname" 
                            value={this.state.firstname} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="First Name"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input 
                            type="text" 
                            name="lastname" 
                            value={this.state.lastname} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Last Name"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input 
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Email"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Password"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input 
                            type="date" 
                            name="dateOfBirth" 
                            value={this.state.dateOfBirth} 
                            onChange={(event) => this.onChange(event)} 
                            placeholder="Date of Birth"/>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <input 
                            type="submit" 
                            value="Submit"/>
                    </div>
                </div>
                </form>
                
            </div>
        )
    }
}

export default SignupPage
