export default function Card({ title, value, color }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
  );
}
