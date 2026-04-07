import { Link } from "react-router-dom";



function Landing() {
  return (

    <div className="bg-black text-white min-h-screen flex flex-col">



      {/* Barra de navegacion */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h2 className="text-xl font-bold text-purple-500">Clash AI</h2>

        <div>
          <Link to="/login" style={{ marginRight: "10px", color: "white" }} >
            Login</Link>
          <Link to="/register" style={{ color: "white" }} >
            Register</Link>
        </div>
      </nav>



      <section style={{}}>

<h1 className="text-6xl text-purple-500 font-bold">
  Tailwind funciona 🔥
</h1>
        <h1>Domina Clash of Clans con IA 🔥 </h1>
        <p>Analiza aldeas y recibe la mejor estrategia de ataque automáticamente.</p>

        <div style={{}}>

        <Link to="/register">
        <button style={{}}>Empezar</button></Link>

        <Link to="/login">
        <button style={{}}>Ya tengo cuenta</button></Link>
        </div>

      </section>

    </div>
  )
}

export default Landing;