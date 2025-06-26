// theme.js

// Cambia entre claro/oscuro y guarda la elección
function cambiarTema() {
  const temaActual = document.documentElement.getAttribute('data-tema');
  const nuevoTema   = temaActual === 'claro' ? 'oscuro' : 'claro';
  document.documentElement.setAttribute('data-tema', nuevoTema);
  localStorage.setItem('tema', nuevoTema);
}

// Al cargar la página, aplica el tema guardado (o 'claro' por defecto)
function iniciarTema() {
  const temaGuardado = localStorage.getItem('tema') || 'claro';
  document.documentElement.setAttribute('data-tema', temaGuardado);
}

// Asegúrate de arrancar al cargar el DOM
document.addEventListener('DOMContentLoaded', iniciarTema);
