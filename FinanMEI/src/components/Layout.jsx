import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1">
        <Navbar title={title} />
        <main className="flex-1 bg-gray-50 p-8">
          <div className="max-w-6xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
