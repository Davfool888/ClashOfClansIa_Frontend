export async function analizarImagen(file) {
    const formData = new FormData()
    formData.append("file", file)
    

    const response = await fetch("http://localhost:8000/analizar-imagen/", {
        method:"POST",
        body: formData
    })

    if(!response.ok){
        throw new Error("error al analizar la imagen");
    }

    return await response.json()
}