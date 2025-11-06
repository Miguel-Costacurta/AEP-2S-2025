import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ResumoFinanceiro from '../components/ResumoFinanceiro';
import ProdutoTop from '../components/ProdutoTop';
import ChartProdutos from '../components/ChartProdutos';

export default function Analise() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
            <h1 className="text-2xl font-bold text-purple-700">Análise Financeira</h1>
            <ResumoFinanceiro />
            <ProdutoTop />
            <div className="flex-1 overflow-hidden">
             <ChartProdutos />
            </div>
        </main>

      </div>
    </div>
  );
}
