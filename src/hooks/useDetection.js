import { useState } from "react";
import { analizarImagen } from "../services/api";


export default function useDetection(){
    const [detecciones, setDetecciones] = useState([])
    const [count, setCount] = useState({})
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)


    const enviarImagen =async (file)=>{
        setloading(true)
        setError(null)

        try {
            const data = await analizarImagen(file)
            setDetecciones(data.detecciones)
            setCount(data.count)
        } catch (error) {
            setError(error.message)
        } finally {
            setloading(false)
        }
    }


    return {detecciones, count, loading, error, enviarImagen}
}