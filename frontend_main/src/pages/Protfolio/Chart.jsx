import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const intra = [
  { x: new Date(2017, 1, 16), y: 1 },
  { x: new Date(2017, 1, 17), y: 12},
  { x: new Date(2017, 1, 18), y: 3 },
  { x: new Date(2017, 1, 19), y: 7 },
  { x: new Date(2017, 1, 20), y: 2 },
  { x: new Date(2017, 1, 21), y: 6 },
  { x: new Date(2017, 1, 22), y: 3 },
  { x: new Date(2017, 1, 23), y: 9 },
  { x: new Date(2017, 1, 24), y: 5 },
  { x: new Date(2017, 1, 25), y: 4 },
  { x: new Date(2017, 1, 26), y: 3 },
  { x: new Date(2017, 1, 27), y: 2 },
  { x: new Date(2017, 1, 28), y: 6 },
  { x: new Date(2017, 1, 29), y: 12},
  { x: new Date(2017, 1, 30), y: 3 },
  { x: new Date(2017, 1, 31), y: 7 },
  // { x: new Date(2017, 2, 1), y: 2 },
  // { x: new Date(2017, 2, 2), y: 6 },
  // { x: new Date(2017, 2, 3), y: 3 },
  // { x: new Date(2017, 2, 4), y: 9 },
  // { x: new Date(2017, 2, 5), y: 5 },
  // { x: new Date(2017, 2, 6), y: 4 },
  // { x: new Date(2017, 2, 7), y: 3 },
  // { x: new Date(2017, 2, 8), y: 2 },
];

const long = [
  { x: new Date(2017, 1, 16), y: 8 },
  { x: new Date(2017, 1, 17), y: 8.5},
  { x: new Date(2017, 1, 18), y: 8.7 },
  { x: new Date(2017, 1, 19), y: 8.6 },
  { x: new Date(2017, 1, 20), y: 9.1 },
  { x: new Date(2017, 1, 21), y: 9.4 },
  { x: new Date(2017, 1, 22), y: 9.6 },
  { x: new Date(2017, 1, 23), y: 9.5 },
  { x: new Date(2017, 1, 24), y: 10 },
  { x: new Date(2017, 1, 25), y: 10.2 },
  { x: new Date(2017, 1, 26), y: 10.4 },
  { x: new Date(2017, 1, 27), y: 10.9 },
  { x: new Date(2017, 1, 28), y: 11 },
  { x: new Date(2017, 1, 29), y: 12},
  { x: new Date(2017, 1, 30), y: 12.1},
  { x: new Date(2017, 1, 31), y: 12.8 },
  // { x: new Date(2017, 2, 1), y: 2 },
  // { x: new Date(2017, 2, 2), y: 6 },
  // { x: new Date(2017, 2, 3), y: 3 },
  // { x: new Date(2017, 2, 4), y: 9 },
  // { x: new Date(2017, 2, 5), y: 5 },
  // { x: new Date(2017, 2, 6), y: 4 },
  // { x: new Date(2017, 2, 7), y: 3 },
  // { x: new Date(2017, 2, 8), y: 2 },
];

function Chart({intraOrLong}) {


  const options = {
    animationEnabled: true,
    backgroundColor: "#231f36",
    title:{
      fontColor: "#FAFAFC",
      fontWeight: "lighter",
      text: "Moving Average"
    },
    axisX: {
      labelFontColor: "#FAFAFC",
      valueFormatString: "DD MMM"
      
    },
    axisY: {
      // title: "Sales (in USD)",
      labelFontColor: "#FAFAFC",
      suffix: " %"
    },
    data: [{
      yValueFormatString: "#%",
      xValueFormatString: "DD MMM",
      type: "spline",
      dataPoints: intraOrLong === "intra" ? intra : long
    }]
  }

  return (
    <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
  )
}

export default Chart