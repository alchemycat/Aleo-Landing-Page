import * as flsFunctions from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
	flsFunctions.isWebp();

	function animateLine() {
		const line = document.querySelector(".header__wrapper-line");
		let width = 0;

		const id = setInterval(() => {
			if (width <= 100) {
				width += 1;
				line.style.width = `${width}%`;
			} else {
				clearInterval(id);
			}

		}, 10);
		
	}

	animateLine();
});
