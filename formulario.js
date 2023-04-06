const formularioContacto = document.getElementById("formularioContacto")
const contenedorContactosHTML = document.getElementById("contenedorContactos")

const contactos = []

const mostrarContactos = () => {
    contenedorContactosHTML.innerHTML = ""
    for(const contacto of contactos){
        contenedorContactosHTML.innerHTML += `
        <div class="card-user">
            <h2>Nombre: ${contacto.nombre}</h2>
            <p>Email: ${contacto.email}</p>
            <p>Telefono: ${contacto.telefono}</p>
        <div/>
        `
    }
}

formularioContacto.addEventListener("submit", (event) =>{
    event.preventDefault()
    contactos.push({
        nombre: formularioContacto.nombre.value,
        email: formularioContacto.email.value,
        telefono: formularioContacto.telefono.value
    })
    mostrarContactos()
    formularioContacto.reset()
})
