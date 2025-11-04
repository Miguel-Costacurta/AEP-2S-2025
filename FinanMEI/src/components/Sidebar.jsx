import { Home, BarChart3, TrendingUp, Settings, List } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Análise", icon: BarChart3, path: "/analise" },
    { name: "Lucros", icon: TrendingUp, path: "/lucros" },
    { name: "Gestão", icon: List, path: "/gestao" },
    { name: "Configurações", icon: Settings, path: "/config" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
      <h1 className="text-xl font-semibold mb-6 text-purple-700">
        Apoio ao MEI
      </h1>
      <nav className="space-y-2">
        {links.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
