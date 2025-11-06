export default function ProdutoTop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-purple-700 mb-2">Produto Mais Vendido</h3>
        <p className="text-gray-700">Nome: Café Premium</p>
        <p className="text-gray-700">Quantidade: 320 unidades</p>
        <p className="text-gray-700">Receita: R$ 9.600,00</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-purple-700 mb-2">Produto com Maior Lucro</h3>
        <p className="text-gray-700">Nome: Brownie Artesanal</p>
        <p className="text-gray-700">Lucro: R$ 4.200,00</p>
        <p className="text-gray-700">Margem: 70%</p>
      </div>
    </div>
  );
}
