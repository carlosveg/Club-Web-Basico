// Variables
const form = document.querySelector("#form");
const course = document.querySelector("#course");
const task = document.querySelector("#task");
const list = document.querySelector("#list");
const tareas = [];

// Functiones
const agregarNuevaTarea = () => {
  const nuevaMateria = course.value;
  const nuevaTarea = task.value;

  if ((nuevaTarea && nuevaTarea.length > 0) && (nuevaMateria && nuevaMateria.length > 0)) {
    tareas.push({ nuevaMateria, nuevaTarea });
  }

  console.log(tareas)
  course.value = "";
  task.value = "";
};

const mostrarTareas = () => {
  let html = "";
  tareas.forEach((tarea, id) => {
    html += generarUnaTarea(tarea, id);
  });
  list.innerHTML = html;
};

const generarUnaTarea = ({ nuevaMateria, nuevaTarea }, id) => {
  return `<li id="t${id}">
            Materia: <span class="secondary">${nuevaMateria}</span>
            Tarea: <span class="secondary">${nuevaTarea}</span>
            <span class="delete" onclick="eliminarTarea(${id})">🗑</span>
          </li>`;
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
