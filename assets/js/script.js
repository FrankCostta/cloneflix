const navbar = document.getElementById('navbar');

function animeScroll() {
	const windowTop = window.scrollY;
	console.log(windowTop);

	if (windowTop > 20) {
		navbar.style.backgroundColor = "#141414";
	} else {
		navbar.style.backgroundColor = "#0000"
	}
}

window.addEventListener('scroll', () => {
	animeScroll();
});