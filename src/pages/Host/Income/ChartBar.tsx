import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { IncomeChart } from '../../../models/income-chart.model';

ChartJS.register(BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend);

export default function ChartBar(props: IncomeChart) {

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38',],
        borderColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38',],
        borderWidth: 1,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        border: { dash: [4, 4] }, // for the grid lines
        grid: {
          color: '#B9B9B9', // for the grid lines
          tickColor: '#B9B9B9', // for the tick mark
          tickBorderDash: [2, 3], // also for the tick, if long enough
          tickLength: 10, // just to see the dotted line
          tickWidth: 2,
          offset: true,

        },

        beginAtZero: true,
      },
      x: {
        grid: { display: false }
      }
    },
  };

  return (
    <Bar
      data={data}
      options={options}
    >
    </Bar>
  )
}