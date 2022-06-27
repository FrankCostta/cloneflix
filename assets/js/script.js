const navbar = document.getElementById('navbar');
const btnCheck = document.getElementById('checkbox');

function animeScroll() {
	const windowTop = window.scrollY;
	
	if (windowTop > 20) {
		navbar.style.backgroundColor = '#141414';
	} else {
		navbar.style.backgroundColor = '#0000';
	}
}

window.addEventListener('scroll', () => {
	animeScroll();
});
