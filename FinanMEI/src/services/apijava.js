import React, { useState, useEffect } from "react";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [transacoes, setTransacoes] = useState([]);
  const [dashboard, setDashboard] = useState({ salarioTotal: 12450.00, receitas: 8200.00, despesas: 3750.00 });

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Login inválido");
        return res.json();
      })
      .then((data) => {
        setUsuario(data);
        carregarDashboard();
        carregarTransacoes();
      })
      .catch(() => alert("Erro ao realizar login"));
  };

  const carregarDashboard = () => {
    fetch("http://localhost:8080/api/dashboard")
      .then((res) => res.json())
      .then((data) => setDashboard(data))
      .catch(() => alert("Erro ao carregar dashboard"));
  };

  const carregarTransacoes = () => {
    fetch("http://localhost:8080/api/transacoes")
      .then((res) => res.json())
      .then((data) => setTransacoes(data))
      .catch(() => alert("Erro ao buscar transações"));
  };

  if (!usuario) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Login Financeiro</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <h3>Saldo total: R$ {dashboard.salarioTotal}</h3>
      <h3>Receitas: R$ {dashboard.receitas}</h3>
      <h3>Despesas: R$ {dashboard.despesas}</h3>

      <h2 style={{ marginTop: 32 }}>Transações</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Valor (R$)</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.tipo}</td>
              <td>{t.categoria}</td>
              <td>{t.valor}</td>
              <td>{t.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;