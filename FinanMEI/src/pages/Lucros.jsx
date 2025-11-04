import Layout from "../components/Layout";
import Card from "../components/Card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Lucros() {
  const lucroMensal = [
    { mes: "Jan", valor: 2500 },
    { mes: "Fev", valor: 3200 },
    { mes: "Mar", valor: 4100 },
    { mes: "Abr", valor: 3800 },
    { mes: "Mai", valor: 4600 },
    { mes: "Jun", valor: 4900 },
  ];

  const data = {
    labels: lucroMensal.map((d) => d.mes),
    datasets: [
      {
        label: "Lucro (R$)",
        data: lucroMensal.map((d) => d.valor),
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#8b5cf6",
        borderWidth: 2,
      },
    ],
  };

  const produtos = [
    { nome: "Produto A", lucro: 1200 },
    { nome: "Produto B", lucro: 850 },
    { nome: "Produto C", lucro: 1970 },
    { nome: "Produto D", lucro: 600 },
  ];

  return (
    <Layout title="Lucros e Desempenho">
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card title="Lucro Total" value="R$ 19.200" color="text-green-600" />
        <Card title="Maior Lucro" value="R$ 4.900 (Jun)" color="text-purple-600" />
        <Card title="Crescimento" value="+21%" color="text-blue-600" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          📈 Lucro Mensal
        </h2>
        <Line data={data} options={{ plugins: { legend: { display: false } } }} />
        <p className="text-sm text-gray-500 mt-3">
          Média de lucro mensal: <strong>R$ 3.200</strong>
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          💼 Lucro por Produto
        </h2>
        <table className="w-full text-left text-gray-700">
          <thead>
            <tr className="border-b text-purple-600">
              <th className="pb-2">Produto</th>
              <th className="pb-2">Lucro (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr
                key={p.nome}
                className="border-b hover:bg-purple-50 transition"
              >
                <td className="py-2">{p.nome}</td>
                <td className="py-2 font-semibold">R$ {p.lucro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-purple-50 p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          💡 Dicas para aumentar o lucro
        </h3>
        <ul className="text-gray-700 list-disc list-inside">
          <li>🟢 Invista nos produtos com melhor margem (Produto C).</li>
          <li>🟣 Reavalie o preço dos produtos com menor retorno.</li>
          <li>🔵 Reduza custos fixos para aumentar o lucro líquido.</li>
        </ul>
      </div>
    </Layout>
  );
}
