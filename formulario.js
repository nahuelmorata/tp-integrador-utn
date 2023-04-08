const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "submit-form.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert("Su mensaje a sido enviado!");
      form.reset();
    } else {
      alert("El envío de su mensaje falló. Inténtalo de nuevo.");
    }
  };

  xhr.send(new URLSearchParams(formData).toString());
});
