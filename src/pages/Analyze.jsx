import UploadBox from "../components/detection/UploadBox";
import DetectionPanel from "../components/detection/DetectionPanel";
import useDetection from "../hooks/useDetection"
import DetectionCanvas from "../components/detection/DetectionCanvas"



export default function Analyze() {

  const { enviarImagen, detecciones, count, loading, error } = useDetection()

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-purple-400 mb-8">
        Analyze Base</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <UploadBox
            enviarImagen={enviarImagen}
            loading={loading}
          />

          {/* Zona para el deteccionCanvas */}
          {detecciones && (
            <DetectionCanvas
              image="/src/assets/hero.png"
              data={{
                width: 2674,  
                height: 1675, 
                detecciones: detecciones
              }}
            />
          )

          }
        </div>

        <DetectionPanel
          detecciones={detecciones}
          count={count}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

