import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 h-screen p-6 text-white">
      <h2 className="text-purple-500 text-2xl font-bold mb-10">
        ClashAI</h2>

      <nav className="flex flex-col gap-6">
        <Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link>
        <Link to="/dashboard/analyze" className="hover:text-purple-400">Analyze</Link>
        <Link to="/dashboard/history" className="hover:text-purple-400">History</Link>
        <Link to="/dashboard/settings" className="hover:text-purple-400">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;