import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import ChartBar from '../components/ChartBar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6 flex flex-col">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
              <Card title="Saldo Total" value="R$ 12.450,00" color="purple" />
              <Card title="Receitas" value="R$ 8.200,00" color="green" />
              <Card title="Despesas" value="R$ 3.750,00" color="red" />
            </div>
        
            <div className='flex-1'>
                <ChartBar />
            </div>
        </main>
      </div>
    </div>
  );
}
