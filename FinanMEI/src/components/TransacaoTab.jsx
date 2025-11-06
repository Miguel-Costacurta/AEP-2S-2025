import { useState } from 'react';

export default function TransactionTab({ onAdd }) {
  const [active, setActive] = useState('todas');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    tipo: 'Receita',
    categoria: '',
    valor: '',
    data: '',
  });

  const tabs = [
    { label: 'Todas', value: 'todas' },
    { label: 'Receitas', value: 'receitas' },
    { label: 'Despesas', value: 'despesas' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ tipo: 'Receita', categoria: '', valor: '', data: '' });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              active === tab.value
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg font-medium bg-green-500 text-white hover:bg-green-600"
        >
          Adicionar
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo</label>
            <select
              value={formData.tipo}
              onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="Receita">Receita</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Categoria</label>
            <input
              type="text"
              value={formData.categoria}
              onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor</label>
            <input
              type="text"
              value={formData.valor}
              onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              value={formData.data}
              onChange={(e) => setFormData({ ...formData, data: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Salvar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
