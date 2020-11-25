const navSlide = () => {
	const collab = document.querySelector('.collab');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	collab.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
		} else {
		link.style.animation = 'navLinkFade 0.5s ease forwards';
		}
		});
		collab.classList.toggle('toggle');
	});
}

navSlide();