import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { barChartData } from "../../chartData";

import "./chart.css";

export function Chart() {
  const options = {
    responsive: true,
  };

  return (
    <div className="chart">
      <Bar options={options} data={barChartData} />
    </div>
  );
}
