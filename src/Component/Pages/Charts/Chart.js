import React from 'react';
import {Bar} from 'react-chartjs-2';

function Chart({data}) {
  var lables = []
  var modal = []
  var min = []
  var max = []

  Object.keys(data).map((date,i)=>{
      lables.push(date);
      modal.push(data[date]["modal"])
      min.push(data[date]["min"])
      max.push(data[date]["max"])
      return null;
  })
  data = {
    labels: lables,
    datasets: [
      {
        label: 'Min',
        data: min,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Modal',
        data: modal,
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Max',
        data: max,
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  }
  var options = {

    title:{
        display:false,
        text:"",
        fontSize:25
      },
    legend:{
        position:"bottom"
      },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <div className="chart">
      <Bar height={200} width={400} data={data} options={options} />
    </div>
  )
}

export default Chart

/*class Chart extends Component{
  constructor(props){
      
    super(props);

    var lables = []
    var modal = []
    var min = []
    var max = []
    console.log(this.props.data)
    Object.keys(this.props.data).map((date,i)=>{
        lables.push(date);
        modal.push(this.props.data[date]["modal"])
        min.push(this.props.data[date]["min"])
        max.push(this.props.data[date]["max"])
        return null;
    })
    this.state = {
      data : {
        labels: lables,
        datasets: [
          {
            label: 'Min',
            data: min,
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Modal',
            data: modal,
            backgroundColor: 'rgb(54, 162, 235)',
          },
          {
            label: 'Max',
            data: max,
            backgroundColor: 'rgb(75, 192, 192)',
          },
        ],
      },
      options : {

        title:{
            display:false,
            text:"Commodity: "+this.props.title + " Type: "+ this.props.type,
            fontSize:25
          },
        legend:{
            position:"bottom"
          },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
    }

  }


  render(){
    return (
      <div className="chart">
        <Bar height={200} width={400} data={this.state.data} options={this.state.options} />
      </div>
    )
  }
}

export default Chart;*/