import React, { useState } from "react";
import { Upload, Image as ImageIcon, CheckCircle2, X } from "lucide-react";


export default function UploadBox() {
    const [image, setImage] = useState(null)

    const handlefile = (e) => {
        const file = e.target.files[0]
        if (file) setImage(URL.createObjectURL(file))
    }

    const clearImage = () => {
        setImage(null)
    }

    return (
        <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 w-full max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">
                Upload Image
            </h2>

            <div className="relative">
                {!image ? (
                    <div className="group relative border-2 border-dashed border-purple-900/30 bg-[#0a0a0c] rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-all hover:border-purple-500/50 hover:bg-purple-900/5">

                        <div className="bg-purple-950/20 p-5 rounded-full mb-5 text-purple-500">
                            <Upload size={40} strokeWidth={1.5} />
                        </div>


                        <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                            Drop your image here
                        </h3>
                        <p className="text-neutral-500 mb-8 font-medium">
                            or click to browse
                        </p>

                        {/* Seleccion de imagen Buttom */}
                        <label className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-purple-950/40">
                            <ImageIcon size={20} />
                            Select Image
                            <input type="file" className="hidden" onChange={handlefile} accept="image/*" />
                        </label>

                    </div>



                ) :
                    (
                        <div className="relative group  animate-in fade-in zoom-in duration-300">

                            <img
                                src={image} alt="Uploaded preview" className="w-full mt-4 rounded-2xl"
                            />

                            <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-md text-white px-5 py-2 rounded-full flex items-center gap-2.5 text-sm font-bold shadow-xl border border-white/20">
                                <div className="bg-white/20 rounded-full p-0.5">
                                    <CheckCircle2 size={16} />
                                </div>
                                Analysis Complete
                            </div>

                            <button
                                onClick={clearImage}
                                className="absolute top-4 right-4 bg-black/60 hover:bg-red-500/90 text-white p-2.5 rounded-full transition-all backdrop-blur-sm border border-white/10 shadow-lg"
                                title="Remove image" >

                                <X size={20} />
                            </button>


                        </div>



                    )}
            </div>









        </div>
    )

}

