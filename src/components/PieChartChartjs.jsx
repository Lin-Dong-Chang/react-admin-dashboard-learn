import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const PieChartChartjs = ({chartData}) => {
  return (
    <Pie
      options={{
        width: "300",
        height: "300",
        responsive: true,
        plugins: {
            datalabels: {
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 32);
                      return {
                        size: size,
                        weight: 600
                      };
                  }
            }
        }
      }}
      data={chartData}
    />
  );
}

export default PieChartChartjs;
