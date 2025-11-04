export default function Navbar({ title }) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 shadow-md">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
}
