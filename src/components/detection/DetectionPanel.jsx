import React from "react";
import { Target, Zap, Shield, LayoutGrid } from 'lucide-react'





export default function DetectionPanel({count ={}, loading}) {
    
    const data = Object.entries(count).map(([name, count]) =>({
    name, 
    count,
    level: 10,
    confidence:90,
    icon:Target
}))


const totalStructures = data.reduce((sum, item) => sum + item.count, 0);

    if(loading){
        return <p className="text-white"> Analizando imagen</p>
    }
    return (
        <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-xl max-w-lg">
            <h2 className="text-2xl font-semibold text-neutral-100 mb-6 tracking-tight">
                Detection Results</h2>

            {data.map((item, index) => {
                const IconComponent = item.icon

                return (

                    <div key={index} className="bg-[#121217] p-4 rounded-xl border border-neutral-800 mb-3">

                        <div className="flex items-center gap-4 mb-2">
{/* Icono panel */}
                            <div className="flex-shrink-0 bg-purple-950/40 border border-purple-800 p-3 rounded-lg text-purple-400">
                                <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                            </div>

{/* etiquetas de count y name, + level */}
                            <div className="flex-grow">
                                <span className="text-lg font-bold text-neutral-50 block leading-tight">
                                    {item.count}x {item.name}
                                </span>
                                <span className="text-sm font-medium text-neutral-400">
                                    Level {item.level}
                                </span>
                            </div>

{/* confidence en la deteccion */}
                            <div className="text-right">
                                <span className="text-xs font-medium text-neutral-500 block uppercase tracking-wider">
                                    confidence
                                </span>
                                <span className="text-xl font-extrabold text-purple-400">
                                    {item.confidence}%
                                </span>
                            </div>

                        </div>

{/* Barra de progreso panel */}

                        <div className="w-full bg-neutral-800 rounded-full h-1.5 mt-3 overflow-hidden">
                            <div
                                className="bg-purple-500 h-1.5 rounded-full"
                                style={{ width: `${item.confidence}%` }}
                            >

                            </div>
                        </div>



                    </div>
                )
            })}

{/* Total estructuras panel */}
            <div className="mt-6 p-5 rounded-2xl bg-[#0e0e11] border border-neutral-800 text-center">
                <span className="text-sm font-medium text-neutral-400 block mb-1">
                    Total Structures Detected
                </span>
                <span className="text-3xl font-extrabold text-neutral-50 tracking-tighter">
                    {totalStructures}
                </span>
            </div>


        </div>
    )
}
