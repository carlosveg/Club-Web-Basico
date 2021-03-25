// Variables
const form = document.querySelector("#form");
const input = document.querySelector("#text");
const list = document.querySelector("#list");
const tareas = [];

// Functiones
const agregarNuevaTarea = () => {
  const nuevaTarea = input.value;
  if (nuevaTarea && nuevaTarea.length > 0) {
    tareas.push(nuevaTarea);
  }
  input.value = "";
};

const mostrarTareas = () => {
  let html = "";
  tareas.forEach((tarea, id) => {
    html += generarUnaTarea(tarea, id);
  });
  list.innerHTML = html;
};

const generarUnaTarea = (tarea, id) => {
  return `<li id="t${id}">${tarea} <span onclick="eliminarTarea(${id})">🗑</span></li>`;
};

const eliminarTarea = (id) => {
  tareas.splice(id, 1);
  mostrarTareas();
  actualizarLocalStorage();
};

const actualizarLocalStorage = () => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

const obtenerLocalStorage = () => {
  const tareasStr = localStorage.getItem("tareas");
  if (tareasStr && tareasStr.length > 0) {
    const tareasLocal = JSON.parse(tareasStr);
    tareasLocal.forEach((tarea) => {
      tareas.push(tarea);
    });
  }
  mostrarTareas();
};

// Event Listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarNuevaTarea();
  actualizarLocalStorage();
  mostrarTareas();
});

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  obtenerLocalStorage();
});
