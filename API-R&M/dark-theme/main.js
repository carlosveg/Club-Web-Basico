// variables

const contenedor = document.getElementById("contenedor");
const btn = document.getElementById("btn");
let theme = "light";

// funciones

const getThemeFromLocalStorage = () => {
	const localTheme = localStorage.getItem("theme");
	if (localTheme && localTheme == "dark") {
		theme = "light";
	} else {
		theme = "dark";
	}
	toggleDarkTheme();
};

const toggleDarkTheme = () => {
	if (theme === "dark") {
		document.body.classList.remove("dark");
		btn.innerHTML = `<i class="fas fa-toggle-off"></i>`;
		theme = "light";
	} else {
		document.body.classList.add("dark");
		btn.innerHTML = `<i class="fas fa-toggle-on"></i>`;
		theme = "dark";
	}
	localStorage.setItem("theme", theme);
};

const llamarAPI = async () => {
	getThemeFromLocalStorage();
	const res = await fetch("https://rickandmortyapi.com/api/character/?page=2");
	const data = await res.json();
	const personajes = data.results;

	const result = personajes.map((personaje) => generarTarjeta(personaje)).join(" ");

	const timer = await setTimeout(() => {
		contenedor.style.justifyContent = "space-between";
		contenedor.innerHTML = result;
	}, 3000);
};

const generarTarjeta = ({ image, name, species }) => {
	return `
    <section class="card">
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <h4>${species}</h4>
    </section>
    `;
};

// ejecuta la funcion en cuanto carga el archivo
llamarAPI();
