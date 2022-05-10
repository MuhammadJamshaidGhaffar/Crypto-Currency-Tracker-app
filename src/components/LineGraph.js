import React, { useContext } from "react";
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

// -------------- my componetns -------------
import Context from "../contexts/Context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["1Y", "1M", "7D", "1D", "Today"];

export default function LineGraph() {
  const [contextObj] = useContext(Context);
  let data = {
    labels,
    datasets: [
      {
        label: contextObj.convert,
        data: [
          contextObj.data.price365d,
          contextObj.data.price30d,
          contextObj.data.price7d,
          contextObj.data.price1d,
          contextObj.data.price,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  console.log("Inside grapgh , \n", contextObj);
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Line options={options} data={data} />
    </div>
  );
}
