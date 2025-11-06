import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <nav className="p-6 space-y-4">
        <h2 className="text-lg font-bold text-purple-700 mb-4">FinanMEI</h2>
        <Link to="/dashboard" className="block text-gray-700 hover:text-purple-600">Dashboard</Link>
        <Link to="/transacoes" className="block text-gray-700 hover:text-purple-600">Transações</Link>
        <Link to="/analise" className="block text-gray-700 hover:text-purple-600">Análise</Link>
        <Link to="#" className="block text-gray-700 hover:text-purple-600">Configurações</Link>
      </nav>
    </aside>
  );
}
