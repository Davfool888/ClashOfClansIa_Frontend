import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analyze", path: "/dashboard/analyze" },
    { name: "History", path: "/dashboard/history" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="w-64 h-screen p-6 flex flex-col
      bg-black/40 backdrop-blur-xl
      border-r border-purple-500/20
      relative z-10">

      {/* Logo */}
      <h2 className="text-2xl font-bold mb-10
        bg-gradient-to-r from-purple-400 to-violet-500
        bg-clip-text text-transparent">
        ClashAI
      </h2>

      {/* Navegación */}
      <nav className="flex flex-col gap-2">

        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                px-3 py-2 rounded-md text-sm font-medium
                transition-all duration-200

                ${isActive 
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "text-gray-300 hover:text-white hover:bg-purple-500/10"
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}

      </nav>
    </div>
  );
}

export default Sidebar;