import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["1Y", "1M", "7D", "1D", "Today"];

export const data = {
  labels,
  datasets: [
    {
      label: "USD",
      data: [1, 24, 3, 34, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function LineGraph() {
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Line options={options} data={data} />
    </div>
  );
}
