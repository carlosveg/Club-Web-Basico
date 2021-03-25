// variables

const contenedor = document.getElementById("contenedor");

// funciones

const llamarAPI = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/?page=15");
  const data = await res.json();
  const personajes = data.results;

  const result = personajes
    .map((personaje) => generarTarjeta(personaje))
    .join(" ");

  contenedor.innerHTML = result;
};

const generarTarjeta = ({
  image,
  name,
  species,
  status,
  gender,
  location,
  type,
  origin,
}) => {
  return `
    <section class="card">
        <img src="${image}" alt="${name}">
        <section class="data">
          <h3>${name} ${species}</h3>
          <h4>Status: ${status}</h4>
          <h4>Gender: ${gender}</h4>
          <h4>Location: ${location.name}</h4>
          <h4>Type: ${type}</h4>
          <h4>Origin: ${origin.name}</h4>
      </section>
    </section>
    `;
};

// ejecuta la funcion en cuanto carga el archivo
llamarAPI();
