import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-black">

      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-6 text-white">
          {children}
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;