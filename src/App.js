//Import dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

//Import pages and components
import Homepage from './pages/Homepage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AllStocksPage from './pages/AllStocksPage';
// import DefaultLayout from './layouts/DefaultLayout';

//Import styling
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/start")
    .then(response => {
        this.setState({name: response.data.name});
    });
}

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signup' component={SignupPage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/stocks' component={AllStocksPage}/>
        
      </div>
    )
  }
}

export default App