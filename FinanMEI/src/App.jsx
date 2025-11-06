import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transacoes from './pages/Transacoes';
import Analise from './pages/Analise';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transacoes" element={<Transacoes />} />
      <Route path="/analise" element={<Analise />}/>
    </Routes>
  );
}
