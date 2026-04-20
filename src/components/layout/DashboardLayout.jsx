import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-black overflow-hidden relative">

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-violet-900/20" />

        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
      </div>


      <Sidebar />

      <div className="flex-1 flex flex-col relative z-10">

        <div className="border-b border-purple-500/20 bg-black/40 backdrop-blur-xl">
          <Topbar />
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>

    </div>
  );
}

export default DashboardLayout;