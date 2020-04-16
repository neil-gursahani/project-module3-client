//Import dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

//Import pages and components
import Homepage from './pages/Homepage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PortfolioPage from './pages/PortfolioPage';
import AllStocksPage from './pages/AllStocksPage';
import StockCompanyInfoComponent from './components/StockCompanyInfoComponent';
import StockNewsComponent from './components/StockNewsComponent';
import StockGraphComponent from './components/StockGraphComponent';
import StockDetailPage from './pages/StockDetailPage';
// import DefaultLayout from './layouts/DefaultLayout';

//Import styling
import './App.css';
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route exact path='/portfolio' component={PortfolioPage}/>
        <Route exact path='/stocks' component={AllStocksPage}/>
        <Route exact path='/stocks/detail/:stockId' component={StockDetailPage}/>
        <Route exact path='/company-info' component={StockCompanyInfoComponent}/>
        <Route exact path='/news' component={StockNewsComponent}/>
        <Route exact path='/graph' component={StockGraphComponent}/>
      </div>
    )
  }
}

export default App