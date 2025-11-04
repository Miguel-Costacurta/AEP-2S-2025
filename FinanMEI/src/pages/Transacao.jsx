import { useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { desc: "Venda de produtos", type: "Receita", value: 1500 },
    { desc: "Aluguel do espaço", type: "Despesa", value: -800 },
    { desc: "Serviço prestado", type: "Receita", value: 750 },
  ]);

  const [desc, setDesc] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("Receita");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!desc || !value) return;
    setTransactions([...transactions, { desc, type, value: type === "Despesa" ? -Math.abs(value) : +value }]);
    setDesc("");
    setValue("");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-primary">Transações</h1>

      <form onSubmit={addTransaction} className="flex gap-2 bg-white p-4 rounded-xl shadow">
        <input className="border rounded p-2 flex-1" placeholder="Descrição" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input className="border rounded p-2 w-32" type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        <select className="border rounded p-2" value={type} onChange={(e) => setType(e.target.value)}>
          <option>Receita</option>
          <option>Despesa</option>
        </select>
        <button className="bg-primary text-white px-4 rounded">Adicionar</button>
      </form>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th>Descrição</th><th>Tipo</th><th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b last:border-none">
                <td>{t.desc}</td>
                <td>{t.type}</td>
                <td className={t.value > 0 ? "text-green-600" : "text-red-500"}>R$ {t.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
