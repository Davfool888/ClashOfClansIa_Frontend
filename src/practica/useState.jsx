import { div, h1 } from "framer-motion/client";
import { useState } from "react";

export default function Saludo({nombre}){
    return <h1> Hola {nombre}</h1>
}

function app(){
    return <Saludo nombre= "David"></Saludo>
}





export default function Contador(){
    const [valor, setValor] = useState(0)

    return(
        <div>
        <h1>{valor}</h1>
        <button onClick={()=>{
            setValor(valor + 1)
        }}></button>
        </div>
    )
}
































function BotonLike(){
    const [contador, setContador] = useState(0)
    return(
        <div>
            <h1>{contador} 👍</h1>
            <button onClick={()=>{
                setContador(contador +1)
            }}>
                Aumentar Like
            </button>
            <button onClick={()=>{
                setContador(0)
            }}>
                Borrar likes
            </button>
        </div>
    )
}

