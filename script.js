// script.js

// Función para mostrar una alerta personalizada
function mostrarAlerta() {
  alert("¡Has hecho clic en el botón de alerta!");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  let valido = true;

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    valido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (!correo.value.trim() || !correo.value.includes("@")) {
    correo.classList.add("is-invalid");
    valido = false;
  } else {
    correo.classList.remove("is-invalid");
  }

  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    valido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (!valido) {
    e.preventDefault(); // Previene el envío si hay errores
  }
});
