const nav = document.querySelector('.nav');
const headerSection = document.querySelector('.header');
const skillsSection = document.querySelector('.skills');
const resumeSection = document.querySelector('.resume');
const contactSection = document.querySelector('.contact');
const navLinks = document.querySelectorAll('.nav-links li');
const resume = document.querySelector('.resume-img');
const resumeBtn = document.querySelector('.resume button');
const form = document.querySelector('.form');
const skillImage = document.querySelectorAll('.skill i');
const body = document.querySelector('body');
const projectLink = document.querySelectorAll('.project-category a');
const sections = [headerSection, skillsSection, resumeSection, contactSection];

// **************************************
// *********** Header Content ***********
// **************************************

const projectCards = document.querySelectorAll('.card');
const projectsOverlay = document.querySelector('.list-overlay');
const header = document.querySelector('.header-container');
const mainHeader = document.querySelector('.header-main');
const projectCategory = document.querySelectorAll('.project-category');

// Header bg Circles animation
let circles = document.querySelectorAll('.background-circle');

circleBgAnimation(circles);

function circleBgAnimation(arr) {
	// shapesColorRandomizer(bgShapes);
	shapesShapeRandomizer(arr);
	shapesLocationRandomizer(arr);
	shapesRotationRandomizer(arr);
}

// Removes overlay when a card is clicked
for (let card of projectCards) {
	card.addEventListener('click', () => {
		projectsOverlay.classList.remove('showOverlay');
		projectsOverlay.classList.add('hideOverlay');
	});
}

// Replaces overlay when the user navigates away from header
for (let card of projectCards) {
	header.addEventListener('mouseleave', () => {
		projectsOverlay.classList.remove('hideOverlay');
		projectsOverlay.classList.add('showOverlay');
		card.classList.remove('choose');
		card.firstElementChild.classList.remove('choose');
		for (let thumb of projectThumb) {
			thumb.classList.remove('chosenProject');
		}
		for (let category of projectCategory) {
			category.style.display = 'none';
		}
	});
}

// Changes chosen card when a card is clicked
for (let card of projectCards) {
	card.addEventListener('click', () => {
		for (let card of projectCards) {
			card.classList.remove('choose');
			card.firstElementChild.classList.remove('choose');
		}
		card.classList.add('choose');
		card.firstElementChild.classList.add('choose');
	});
}

// Show the projects in the display that correspond to the card clicked
for (let i = 0; i < projectCategory.length; i++) {
	projectCards[i].addEventListener('click', () => {
		for (let category of projectCategory) {
			category.style.display = 'none';
		}
		projectCategory[i].style.display = 'flex';
	});
}

// Go to project when project is clicked
let projectThumb = document.querySelectorAll('.project-category img');

for (let i = 0; i < projectCategory.length; i++) {
	projectCards[i].addEventListener('click', () => {
		for (let j = 0; j < projectThumb.length; j++) {
			projectThumb[j].addEventListener('mouseenter', () => {
				for (let project of projectThumb) {
					project.classList.remove('chosenProject');
				}
				projectThumb[j].classList.add('chosenProject');
			});
		}
	});
}

// Mobile: scroll to window when project category is selected
if (window.innerWidth < 420) {
	for (let card of projectCards) {
		card.addEventListener('click', () => {
			window.scrollTo(0, 1075);
		});
	}
}

// Nav load animation

if (window.innerWidth > 1151) {
	nav.style.animation = 'navPageLoad 2s ease-out';
}

// Nav hover animation

nav.addEventListener('mouseenter', () => {
	if (window.innerWidth > 1151) {
		nav.classList.add('navHover');
		nav.classList.remove('navBlur');
	}
});
nav.addEventListener('mouseleave', () => {
	if (window.innerWidth > 1151) {
		nav.classList.remove('navHover');
		nav.classList.add('navBlur');
	}
});

// When nav hover animation stops at 1151px, shift all sections right 15vw;
if (window.innerWidth < 1152) {
	for (let i = 0; i < sections.length; i++) {
		sections[i].style.margin = '0 0 0 15vw';
	}
}

// Link Animation

for (let link of navLinks) {
	link.addEventListener('click', function () {
		for (link of navLinks) {
			link.classList.remove('active');
		}
		this.classList.add('active');
	});
}

// Resume Animation

resume.addEventListener('mouseenter', function () {
	resumeHover();
});

resume.addEventListener('mouseleave', function () {
	resumeLeave();
});

resumeBtn.addEventListener('mouseover', function () {
	resumeHover();
});

resume.addEventListener('blur', function () {
	resumeLeave();
});

function resumeHover() {
	resume.classList.add('imgHover');
	resume.classList.remove('imgBlur');
	resumeBtn.classList.add('visible');
	resumeBtn.classList.remove('hidden');
}

function resumeLeave() {
	resumeBtn.classList.remove('visible');
	resumeBtn.classList.add('hidden');
	resume.classList.remove('imgHover');
	resume.classList.add('imgBlur');
}

// Form Animation

form.addEventListener('mouseenter', function () {
	this.classList.add('formHover');
	this.classList.remove('formBlur');
});

form.addEventListener('mouseleave', function () {
	this.classList.remove('formHover');
	this.classList.add('formBlur');
});

// Skills Animation

// Form Validation

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

function validEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
	if (name.value === '') {
		name.classList.add('invalid');
		e.preventDefault();
	} else {
		name.classList.remove('invalid');
	}
	if (email.value === '') {
		email.classList.add('invalid');
		e.preventDefault();
	} else if (!validEmail(email.value)) {
		email.classList.add('invalid');
		e.preventDefault();
	} else {
		email.classList.remove('invalid');
	}
	if (message.value === '') {
		message.classList.add('invalid');
		e.preventDefault();
	} else {
		message.classList.remove('invalid');
	}
});

// Border Color
function shapesColorRandomizer(arr) {
	arr.forEach((item) => {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let a = Math.random();
		let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
		item.style.borderColor = randomColor;
	});
}

// Shape
function shapesShapeRandomizer(arr) {
	arr.forEach((item) => {
		let borRad = Math.floor(Math.random() * 50);
		let randomRadius = `${borRad}%`;
		item.style.borderRadius = randomRadius;
	});
}

// Location
function shapesLocationRandomizer(arr) {
	arr.forEach((item) => {
		let height = Math.floor(Math.random() * body.offsetHeight - 500);
		let width = Math.floor(Math.random() * window.innerWidth - 500);
		let itemHeight = `${height}px`;
		let itemWidth = `${width}px`;
		item.style.top = itemHeight;
		item.style.left = itemWidth;
	});
}

// Rotation
function shapesRotationRandomizer(arr) {
	arr.forEach((item) => {
		let rotation = Math.floor(Math.random() * 360);
		let randomRotation = `rotate(${rotation}deg)`;
		item.style.transform = randomRotation;
	});
}
