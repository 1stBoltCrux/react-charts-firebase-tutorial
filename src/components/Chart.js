import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: [this.props.data.length, 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label: 'Population',
            data: [
              100,
              200,
              300,
              400,
              500,
              600
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display: true,
              text: 'Largest Cities in Massachusetts',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}

        />
      </div>

    )
  }

}

export default Chart;
