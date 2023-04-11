let cantidadProductos = 0;
const textoCantidadProductos = document.getElementById("cantidad-productos")

function agregarProducto() {
    cantidadProductos++;
    textoCantidadProductos.innerText = `(${cantidadProductos})`
}
