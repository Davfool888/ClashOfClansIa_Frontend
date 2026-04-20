
import React, { useRef, useEffect } from "react";

export default function DetectionCanvas({ image, data }) {
    const imgRef = useRef(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        const img = imgRef.current
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")


        if (!img || !canvas || !data || !data.detecciones) return

        const draw = () => {
            const displayedWidth = img.clientWidth
            const displayedHeight = img.clientHeight

            canvas.width = displayedWidth
            canvas.height = displayedHeight

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const scaleX = displayedWidth / data.width
            const scaleY = displayedHeight / data.height

            data.detecciones.forEach(det => {
                const [x1, y1, x2, y2] = det.bbox

                const x = x1 * scaleX;
                const y = y1 * scaleY;
                const w = (x2 - x1) * scaleX;
                const h = (y2 - y1) * scaleY;

                ctx.strokeStyle = "red"
                ctx.lineWidth = 2
                ctx.strokeRect(x, y, w, h)
            })
        }

        if (img.complete) {
            draw()
        } else {
            img.addEventListener("load", draw)
        }
    }, [data])

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <img
                ref={imgRef}
                src={image}
                alt="preview"
                className="w-full h-auto object-contain" />

            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none"
                }}
            />
        </div>
    )

}