const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const objeto = {};
  formData.forEach((valor, clave) => (objeto[clave] = valor));
  fetch("https://6432eb09d0127730d2dd6cfb.mockapi.io/contacto", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objeto)
  }).then(response => {
    if (response.ok) {
      alert("Su mensaje a sido enviado!");
      form.reset();
    } else {
      alert("El envío de su mensaje falló. Inténtalo de nuevo.");
    }
  });
});
