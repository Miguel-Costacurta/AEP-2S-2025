import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TransactionTab from '../components/TransacaoTab';
import TransactionTable from '../components/TransacaoTable';
import { formatCurrency } from '../components/utilidades';
export default function Transacoes() {
  const [transacoes, setTransacoes] = useState([
    { id: 1, tipo: 'Receita', categoria: 'Salário', valor: 'R$ 3.000,00', data: '2025-11-01' },
    { id: 2, tipo: 'Despesa', categoria: 'Aluguel', valor: 'R$ 1.200,00', data: '2025-11-03' },
  ]);

  const handleAdd = (nova) => {
  const formatado = {
    ...nova,
    valor: formatCurrency(nova.valor),
    id: transacoes.length + 1,
  };
  setTransacoes([...transacoes, formatado]);
};


  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-purple-700">Transações</h1>
          <TransactionTab onAdd={handleAdd} />
          <TransactionTable transacoes={transacoes} />
        </main>
      </div>
    </div>
  );
}
