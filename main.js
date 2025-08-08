const toDoForm = document.getElementById('toDoForm');
let numeroTarea = 0;

const agregarTarea = () => {
  event.preventDefault();
  numeroTarea++

  let tarea = document.createElement('div');
  const nombre = tituloTarea();
  tarea.className = "flex gap-4 border p-4 rounded";
  tarea.id = `tarea${numeroTarea}`
  tarea.innerHTML = `
    <input type="checkbox" name="" id="">
      <div>
        <label for="">${nombre}</label>
        <p>10:30 - 11:30</p>
      </div>
    <details>
      <summary></summary>
      <button onclick="eliminarTarea(tarea${numeroTarea})">Eliminar</button>
    </details>
  `;
  toDoForm.appendChild(tarea);
}

const tituloTarea = () => {
  const titulo = prompt("Titulo de tu tarea");
  return titulo;
}

const eliminarTarea = (tarea) => {
  event.preventDefault();
  tarea.remove();
}