export default function ResumoFinanceiro() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-100 text-green-700 p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-medium">Total de Vendas</h3>
        <p className="text-2xl font-bold mt-2">R$ 18.500,00</p>
      </div>
      <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-medium">Despesas Totais</h3>
        <p className="text-2xl font-bold mt-2">R$ 7.800,00</p>
      </div>
      <div className="bg-purple-100 text-purple-700 p-4 rounded-lg shadow-md">
        <h3 className="text-sm font-medium">Lucro Líquido</h3>
        <p className="text-2xl font-bold mt-2">R$ 10.700,00</p>
      </div>
    </div>
  );
}
