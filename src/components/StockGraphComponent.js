import React, { Component } from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

class StockGraphComponent extends Component {
    
    constructor(props) {
        super(props)
        this.fetchFinancialGraphData = this.fetchFinancialGraphData.bind(this);
        this.state = {
            timeInterval: "dynamic",
            chartData: {
                labels: [], //dates go here
                datasets: [
                    {
                      label: 'Stock Price Performance', 
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: 'rgba(60, 164, 235, 1)',
                      borderWidth: 2,
                      data: [] //prices go here
                    }
                  ],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
                ]
            }   
        };
    }

    componentDidMount() {
        this.fetchFinancialGraphData();
    }

    fetchFinancialGraphData(){
        axios
        .get(`https://cloud.iexapis.com/stable/stock/${this.props.symbol}/chart/${this.state.timeInterval}?sort=asc&token=${process.env.REACT_APP_API_KEY}`)
        .then((apiResponse) => {

            var data = apiResponse.data.map((day)=> day.close);
            let labels = apiResponse.data.map((day)=> day.date);
            let chartDataCopy = {...this.state.chartData};
            chartDataCopy.labels = labels;
            chartDataCopy.datasets[0].data = data;
            this.setState({
                chartData: chartDataCopy
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
                <div className="stock-info-and-graph">
                    <div className="stock-graph">
                        <Line
                            data={this.state.chartData}
                            options={{}}
                        />
                        <div className="stock-buttons">
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "dynamic"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button dynamic">dynamic</button>
                            <button 
                            onClick={()=> {
                                this.setState({timeInterval: "5d"}, ()=> {
                                    this.fetchFinancialGraphData()
                                })
                            }}
                            className="time-button 5days">5d</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "1m"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 1month">1m</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "3m"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 3months">3m</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "6m"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 6months">6m</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "1y"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 1year">1y</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "2y"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 2years">2y</button>
                            <button 
                                onClick={()=> {
                                    this.setState({timeInterval: "5y"}, ()=> {
                                        this.fetchFinancialGraphData()
                                    })
                                }}
                                className="time-button 5years">5y</button>
                        </div>  
                        <br></br>
                        {/* <div className="stock-buttons">
                            <button 
                                  
                                    className="time-button favorite-button">Favorite &hearts;</button>

                        </div>     */}
                    </div>
                </div>
        )
    }
}

export default StockGraphComponent
