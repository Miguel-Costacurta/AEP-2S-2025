import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transacao";
import Profits from "./pages/Lucros";
import Analytics from "./pages/Analise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transacao" element={<Transactions />} />
        <Route path="/lucros" element={<Profits />} />
        <Route path="/analise" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
