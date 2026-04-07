import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-black text-white p-5">
      <h2 className="text-purple-500 font-bold mb-5">ClashAI</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analyze">Analyze</Link>
        <Link to="/history">History</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;