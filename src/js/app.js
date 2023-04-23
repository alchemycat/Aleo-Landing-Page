document.addEventListener("DOMContentLoaded", () => {
	function isWebp() {
		function testWebP(callback) {
			var webP = new Image();
			webP.onload = webP.onerror = function () {
				callback(webP.height == 2);
			};
			webP.src =
				"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		}
	
		testWebP(function (support) {
			let className = support = true ? 'webp' : 'no-webp';
			document.documentElement.classList.add(className)
		});
	}
	
	isWebp();

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

	function articles(showCount = 2) {
		const art = document.querySelectorAll(".articles__item");
		const showMore = document.querySelector(".articles__button");
		const emptyMessage = document.querySelector(".articles__empty");

		let showed = showCount;
		let limit = showCount;
		let startIndex = showed - limit;

		function hideButton() {
			if (!art.length) {
				showMore.style.display = "none";
				emptyMessage.style.display = "block";
			}
			if (art.length <= showCount) {
				showMore.style.display = "none";
			}
		}

		hideButton();

		function hideArticle() {
			return new Promise((resolve) => {
				for (let item of art) {
					item.style.display = "none";
				}
				resolve();
			});
		}

		if (art.length) {
			hideArticle().then(() => {
				showArticles(startIndex, showed);
			});
		}


		function showArticles(from, to) {
			try {
				for (let i = from; i < to; i++) {
					let item = art[i];
					item.style.display = "block";
				}
			} catch {}
		}

		showMore.addEventListener("click", () => {
			showed += limit;
			showArticles(startIndex, showed);
			if (showed >= art.length) {
				showMore.style.display = "none";
			}
		});

	}

	articles();
});
