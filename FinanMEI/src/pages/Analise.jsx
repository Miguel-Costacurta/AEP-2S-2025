import Layout from "../components/Layout";
import Card from "../components/Card";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Analise() {
  // Dados de exemplo
  const produtos = [
    { nome: "Produto A", vendas: 430 },
    { nome: "Produto B", vendas: 280 },
    { nome: "Produto C", vendas: 510 },
    { nome: "Produto D", vendas: 190 },
  ];

  const pieData = {
    labels: produtos.map((p) => p.nome),
    datasets: [
      {
        data: produtos.map((p) => p.vendas),
        backgroundColor: ["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: produtos.map((p) => p.nome),
    datasets: [
      {
        label: "Vendas (R$)",
        data: produtos.map((p) => p.vendas),
        backgroundColor: "#8b5cf6",
        borderRadius: 8,
      },
    ],
  };

  return (
    <Layout title="Análises e Indicadores">
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card title="Produto Mais Vendido" value="Produto C" color="text-purple-600" />
        <Card title="Total de Vendas" value="R$ 12.800" color="text-green-600" />
        <Card title="Desempenho Geral" value="+18%" color="text-blue-600" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            📊 Vendas por Produto
          </h2>
          <Bar
            data={barData}
            options={{
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true } },
            }}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            🥧 Participação no Lucro
          </h2>
          <Pie data={pieData} />
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-2xl mt-8">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          💡 Insights
        </h3>
        <ul className="text-gray-700 list-disc list-inside">
          <li>O <strong>Produto C</strong> teve o melhor desempenho.</li>
          <li>O <strong>Produto D</strong> precisa de atenção (vendas baixas).</li>
          <li>O crescimento total foi de <strong>18%</strong> no último mês.</li>
        </ul>
      </div>
    </Layout>
  );
}
