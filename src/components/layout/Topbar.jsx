function Topbar() {
  return (
    <div className="
      flex items-center justify-between
      px-6 py-4
      bg-black/40 backdrop-blur-xl
      border-b border-purple-500/20
    ">
      
      {/* Título o breadcrumb */}
      <div className="text-sm text-gray-400">
        Dashboard
      </div>

      {/* Usuario */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full 
          bg-gradient-to-br from-purple-500 to-violet-600 
          flex items-center justify-center text-sm font-bold">
          U
        </div>

        {/* Nombre */}
        <p className="text-sm text-gray-300">Usuario</p>

      </div>
    </div>
  );
}

export default Topbar;