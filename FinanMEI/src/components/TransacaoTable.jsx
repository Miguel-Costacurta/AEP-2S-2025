import { formatCurrency } from '../components/utilidades.js';

export default function TransactionTable({ transacoes = [] }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead className="bg-purple-100 text-purple-700">
          <tr>
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-left">Categoria</th>
            <th className="px-4 py-2 text-left">Valor</th>
            <th className="px-4 py-2 text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="px-4 py-2">{t.tipo}</td>
              <td className="px-4 py-2">{t.categoria}</td>
              <td className={`px-4 py-2 ${t.tipo === 'Despesa' ? 'text-red-600' : 'text-green-600'}`}>
                {formatCurrency(t.valor)}
              </td>   
              <td className="px-4 py-2">{t.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
