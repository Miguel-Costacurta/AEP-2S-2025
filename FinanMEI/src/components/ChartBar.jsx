import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartBar({ data }) {
  return (
    <Bar
      data={{
        labels: data.map((d) => d.label),
        datasets: [
          {
            label: "Vendas (R$)",
            data: data.map((d) => d.value),
            backgroundColor: "#a855f7",
            borderRadius: 10,
          },
        ],
      }}
      options={{
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      }}
    />
  );
}
