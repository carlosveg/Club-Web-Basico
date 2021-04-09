console.clear();

let body: HTMLElement;
let menu: HTMLElement;
let menuItems: NodeListOf<HTMLElement>;

const init = () => {
	body = document.querySelector("body");
	menu = document.querySelector(".menu-icon");
	menuItems = document.querySelectorAll(".nav__list-item");
	applyListeners();
};

const applyListeners = () => {
	menu.addEventListener("click", () => toggleClass(body, "nav-active"));
};

const toggleClass = (element: HTMLElement, stringClass: string) => {
	if (element.classList.contains(stringClass))
		element.classList.remove(stringClass);
	else element.classList.add(stringClass);
};

init();
