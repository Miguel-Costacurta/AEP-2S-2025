import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartProdutos() {
  const data = {
    labels: ['Café Premium', 'Brownie Artesanal', 'Suco Natural', 'Pão de Queijo'],
    datasets: [
      {
        label: 'Participação nas Vendas',
        data: [9600, 4200, 3200, 1500],
        backgroundColor: [
          'rgba(139, 92, 246, 0.6)',
          'rgba(34, 197, 94, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(239, 68, 68, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-md flex flex-col">
      <h3 className="text-lg font-bold text-purple-700 mb-4">Participação por Produto</h3>
      <div className="flex-1">
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
