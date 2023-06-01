const hamburgerBtn = document.querySelector('.hamburger')
const navCollapse = document.querySelector('.nav__collapse')


const mobileNav = () => {
	hamburgerBtn.classList.toggle('is-active')
	navCollapse.classList.toggle('mobile-active')
	
}

hamburgerBtn.addEventListener('click', mobileNav)

// close nav when click

const navLinks = document.querySelectorAll('.nav__link')

const closeNav = () => {
	hamburgerBtn.classList.remove('is-active')
	navCollapse.classList.remove('mobile-active')
	body.classList.remove('overflow')
}

navLinks.forEach(link => link.addEventListener('click', closeNav))

////handler observer
const sections = document.querySelectorAll('section')

window.onscroll = function () {
	const currentScrollPos = window.pageYOffset + window.innerHeight / 3
	for (let i = 0; i < sections.length; i++) {
		if (currentScrollPos >= sections[i].offsetTop) {
			const id = sections[i].getAttribute('id')
			for (let j = 0; j < navLinks.length; j++) {
				navLinks[j].classList.remove('current')
				if (navLinks[j].getAttribute('href') == '#' + id) {
					navLinks[j].classList.add('current')
				}
			}
		}
	}
}