// llamar a la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
const URL_MENSAJE= import.meta.env.VITE_API_MENSAJE



export const login = async (usuario)=>{
    
    console.log(usuario)
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar si algun usuario coincide con el que recibi por parametros
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.nombreUsuario === usuario.nombreUsuario);
        if(usuarioBuscado){
            console.log("usuario encontrado")
            //verificar el password
            if(usuarioBuscado.password === usuario.password){
                console.log("encontramos al usuario")
                return usuarioBuscado
            } else {
                console.log("password incorrecto")
                return null
            }
        } else {
            console.log("nombre usuario incorrecto")
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

 export const obtenerMensajes = async ()=>{
     try {
         const respuesta = await fetch(URL_MENSAJE)
         const listaMensajes = await respuesta.json()
         return listaMensajes

     } catch (error) {
         console.log(error)
         return null
     }
 }
 export const obtenerMensaje = async (id)=>{
     try {
         const respuesta = await fetch(`${URL_MENSAJE}/${id}`)
         const mensajeEditar = await respuesta.json()
         return mensajeEditar

     } catch (error) {
         console.log(error)
         return null
     }
 }

 export const consultaBorrarMensaje = async (id)=>{
     try {
         const respuesta = await fetch(`${URL_MENSAJE}/${id}` , {
             method:"DELETE"
         });
        //  const listaMensajes = await respuesta.json()
         return respuesta

     } catch (error) {
         console.log(error)
         return null
     }
 }

 export const consultaCrearMensaje = async (mensaje)=>{
     try {
         const respuesta = await fetch(URL_MENSAJE, {
             method: "POST",
             headers: {
                 "Content-Type":"application/json"
             },
             body: JSON.stringify(mensaje)
         });
         return respuesta

     } catch (error) {
         console.log(error)
         return null
     }
 }

// export const consultaEditarProducto = async (producto, id)=>{
//     try {
//         const respuesta = await fetch(URL_PRODUCTO+"/"+id, {
//             method: "PUT",
//             headers: {
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(producto)
//         });
//         return respuesta

//     } catch (error) {
//         console.log(error)
//         return null
//     }
// }