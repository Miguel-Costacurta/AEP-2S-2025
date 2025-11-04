import Layout from "../components/Layout";
import Card from "../components/Card";
import ChartBar from "../components/ChartBar";

export default function Dashboard() {
  const vendas = [
    { label: "Jan", value: 2400 },
    { label: "Fev", value: 1800 },
    { label: "Mar", value: 3100 },
    { label: "Abr", value: 4100 },
    { label: "Mai", value: 4600 },
    { label: "Jun", value: 3800 },
  ];

  return (
    <Layout title="Painel de Controle">
      <div className="grid md:grid-cols-4 gap-6 mb-6">
        <Card title="Receita Total" value="R$ 12.450" color="text-green-600" />
        <Card title="Despesas" value="R$ 3.280" color="text-red-500" />
        <Card title="Vendas" value="247" color="text-blue-500" />
        <Card title="Lucro Líquido" value="R$ 9.170" color="text-purple-500" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          📈 Vendas Mensais
        </h2>
        <ChartBar data={vendas} />
        <p className="text-sm text-gray-500 mt-4">
          Média mensal: <strong>R$ 3.733</strong>
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">
          💡 Dicas para Iniciantes
        </h3>
        <ul className="text-gray-700 list-disc list-inside">
          <li>🟢 Controle todas as entradas e saídas.</li>
          <li>🔴 Evite gastos desnecessários.</li>
          <li>🟣 Mantenha registro de lucro mensal.</li>
        </ul>
      </div>
    </Layout>

    
  );
}
