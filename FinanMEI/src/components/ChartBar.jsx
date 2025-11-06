import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartBar() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Receitas',
        data: [1200, 1900, 3000, 2500, 3200, 4000],
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
      },
      {
        label: 'Despesas',
        data: [800, 1400, 2000, 1800, 2200, 2600],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Receitas vs Despesas (últimos 6 meses)',
      },
    },
  };

  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-md">
      <div className="h-full">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
