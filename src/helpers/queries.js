const urlColores= import.meta.env.VITE_API_COLORES

//get
export const leerColores = async () => {
    try {
        const respuesta = await fetch(urlColores)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//get por id
export const obtenerColorID = async (id) => {
    try {
        const respuesta = await fetch(urlColores+`/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//post
export const crearColor = async (nuevoColor) => {
    try {
        const respuesta = await fetch(urlColores,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(nuevoColor)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//put
export const editarColor = async (colorEditado,id) => {
    try {
        const respuesta = await fetch(urlColores+`/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(colorEditado)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//delete
export const borrarColorID = async (id) => {
    try {
        const respuesta = await fetch(urlColores+`/${id}`,{
            method: 'DELETE'
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}