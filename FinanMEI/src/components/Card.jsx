export default function Card({ title, value, color }) {
  const colors = {
    purple: 'bg-purple-100 text-purple-700',
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${colors[color]}`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
