import React, { Component } from 'react';
import SingleStockDetailPage from './StockCompanyDetail';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import StockNewsPage from './StockNews';

class StockGraphPage extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            chartData: {
                labels: [10,20,30], //dates go here
                datasets: [
                    {
                      label: 'Stock Price Performance', 
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: 'rgba(75,192,192,1)',
                      borderColor: 'rgba(0,0,0,1)',
                      borderWidth: 2,
                      data: [5,6,7] //prices go here
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
        
        // document.addEventListener("click", function() {
            debugger
            // let dateInput = document.querySelector('.time-button').innerText;

            axios
                // .get(`https://cloud.iexapis.com/stable/stock/aapl/chart/${dateInput}?sort=desc&token=pk_3d70698b98244ac68901d1cda3a83c2d `)
                .get(`https://cloud.iexapis.com/stable/stock/aapl/chart/5d?sort=desc&token=pk_3d70698b98244ac68901d1cda3a83c2d`)
                .then((apiResponse) => {
                    console.log(apiResponse);

                    // let chartDatesArray = [...this.state.labels];
                    // let chartPricesArray = [...this.state.data];

                    // for (let i = 0; i < apiResponse.data.length; i++) {
                    //     let chartDatesArray = apiResponse.data.date.concat(this.state.labels)
                    //     this.setState({ labels: chartDatesArray});
                    //     console.log(chartDatesArray);
                    // }

                    // let apiResponseDates = apiResponse.data[0].date;
                    // this.setState({ labels: this.state.chartData.labels.concat(apiResponseDates)});

                    // apiResponseDates.push(chartDatesArray);

                    // let apiResponsePrices = apiResponse.data[0].close;
                    // let pushedPrices = apiResponsePrices.push(chartPricesArray);

                   
                    // console.log(apiResponse.data);
                })
                .catch((error) => {
                    console.log(error);
                    console.log("Error in retrieving API data!");
                });
        // })
    }

    render() {
        // const stockNews = this.state.stockNews;
        // console.log(stockNews.headline);

        let dates = [];
        let closingPrices = [];

        return (
            <div>
                <SingleStockDetailPage/>
                <div>
                    <button className="time-button dynamic">dynamic</button>
                    <button className="time-button 5days">5d</button>
                    <button className="time-button 1month">1m</button>
                    <button className="time-button 3months">3m</button>
                    <button className="time-button 6months">6m</button>
                    <button className="time-button 1year">1y</button>
                    <button className="time-button 2years">2y</button>
                    <button className="time-button 5years">5y</button>
                    
                    <Line
                        data={this.state.chartData}
                        options={{}}
                    />
                </div>
                <StockNewsPage/>
            </div>
        )
    }
}

export default StockGraphPage
