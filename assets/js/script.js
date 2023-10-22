const precio = 400000;
const cantidadElement = document.querySelector("#cantidad");
const totalElement = document.querySelector("#totalFinal");

function aumentarCantidad() {
  const cantidadValue = parseInt(cantidadElement.value);
  cantidadElement.value = cantidadValue + 1;
  updateTotal();
}

function reducirCantidad() {
  const cantidadValue = parseInt(cantidadElement.value);
  if (cantidadValue > 0) {
    cantidadElement.value = cantidadValue - 1;
    updateTotal();
  }
}

function updateTotal() {
  const cantidadValue = parseInt(cantidadElement.value);
  const totalPrecio = cantidadValue * precio;
  totalElement.innerHTML = `$${totalPrecio.toLocaleString("es-Cl")}`;
}

// Inicializar el total
updateTotal();
