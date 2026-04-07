import { Link } from "react-router-dom";



function Landing() {
  return (

    <div className="bg-black text-white min-h-screen flex flex-col">



      {/* Barra de navegacion */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide">Clash AI</h2>


{/* Links */}
        <div className="flex items-center gap-6">

          
          <Link to="/login"  className="text-gray-300 hover:text-purple-400 transition" >
            Login</Link>

          <Link to="/register" className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition shadow-lg" >
            Register</Link>


        </div>
      </nav>


{/* HERO */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-500 leading-tight">
          Domina Clash of Clans con IA 🔥 </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg"> Analiza aldeas automáticamente con inteligencia artificial y recibe
          la mejor estrategia de ataque en segundos.</p>

        <div className="mt-10 flex gap-6">

        <Link to="/dashboard">
        <button className="bg-purple-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-purple-700 transition shadow-lg">
          Empezar</button></Link>

        <Link to="/login">
        <button className="border border-purple-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-purple-500 hover:text-black transition">
          Ya tengo cuenta</button></Link>
        </div>

      </section>

    </div>
  )
}

export default Landing;