import UploadBox from "../components/detection/UploadBox";
import DetectionPanel from "../components/detection/DetectionPanel";

export default function Analyze() {
  return (
    <div className="w-full"> 
    <h1 className="text-3xl font-bold text-purple-400 mb-8">
      Analyze Base</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <UploadBox/>

    <DetectionPanel/>
      </div>
  </div>
  )
}

