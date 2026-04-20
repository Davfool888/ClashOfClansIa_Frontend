import UploadBox from "../components/detection/UploadBox";
import DetectionPanel from "../components/detection/DetectionPanel";
import useDetection from "../hooks/useDetection"
import DetectionCanvas from "../components/detection/DetectionCanvas"
import { useState } from "react";




export default function Analyze() {
  // Estado para poder dibujar sobre la imagen
  const [imagePreview, setImagePreview] = useState(null);
  // Estado para poder expandir la imagen
  const [isExpanded, setIsExpanded] = useState(false)

  const { enviarImagen, detecciones, count, loading, error } = useDetection()

  return (
    <div className="w-full max-w-7xl mx-auto p-4" >
      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        Analyze Base
      </h1>


      <div
        className={`grid gap-8 transition-all duration-500
        ${isExpanded ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
      >

        <div className="w-full">
          <UploadBox
            enviarImagen={enviarImagen}
            loading={loading}
            setImagePreview={setImagePreview}
            detecciones={{
              width: 2674,
              height: 1675,
              detecciones: detecciones
            }}

            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>


        <div className="w-full">
          <DetectionPanel
            detecciones={detecciones}
            count={count}
            loading={loading}
            error={error}
            isExpanded={isExpanded}
          />
        </div>

      </div>

    </div>

  )
}

