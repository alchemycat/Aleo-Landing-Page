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

	function smoothScrolling() {
		try {
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();
			
					document.querySelector(this.getAttribute('href')).scrollIntoView({
						behavior: 'smooth'
					});
				});
			});
		} catch {}
	
	}

	smoothScrolling();

	function copyLink() {
		try {
			const copyBtn = document.querySelector("#copy-me");

			copyBtn.addEventListener("click", async () => {
				const text = copyBtn.textContent;
				const textArea = document.createElement("textarea");
				textArea.value = text;
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				try {
				  document.execCommand('copy');
				} catch (err) {
				  console.error('Unable to copy to clipboard', err);
				}
				document.body.removeChild(textArea);
				copyBtn.textContent = "Copied!";
				setTimeout(() => {
					copyBtn.textContent = text;
				}, 500);
				
			});
		} catch {}
	
	}
	
	copyLink();
});
