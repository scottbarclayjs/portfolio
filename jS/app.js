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
const sections = [headerSection, skillsSection, resumeSection, contactSection];

// Header Content *********************************
const projectCards = document.querySelectorAll('.card');
const projectsOverlay = document.querySelector('.list-overlay');
const header = document.querySelector('.header-container');
const projectCategory = document.querySelectorAll('.project-category');

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

// Nav load animation

if (window.innerWidth > 1151) {
	nav.style.animation = 'navPageLoad 2s ease-out';
	for (let section of sections) {
		section.style.animation = 'bodyPageLoad 2s ease-out';
	}
}

// Nav hover animation

nav.addEventListener('mouseenter', () => {
	if (window.innerWidth > 1151) {
		nav.classList.add('navHover');
		nav.classList.remove('navBlur');
		for (let section of sections) {
			section.classList.add('sectionShift');
			section.classList.remove('sectionUnshift');
		}
	}
});
nav.addEventListener('mouseleave', () => {
	if (window.innerWidth > 1151) {
		nav.classList.remove('navHover');
		nav.classList.add('navBlur');
		for (let section of sections) {
			section.classList.add('sectionUnshift');
			section.classList.remove('sectionShift');
		}
	}
});

// When nav hover animation stops at 1151px, shift all sections right 15vw;
if (window.innerWidth < 1150) {
	for (let section of sections) {
		section.style.marginLeft = '15vw';
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

let skills = [];
for (let img of skillImage) {
	skills.push(img);
}

function skillDisplay() {
	let randSkill = Math.floor(Math.random() * skills.length);
	skills[randSkill].classList.toggle('skillColor');
	setTimeout(skillDisplay, 500);
}

skillDisplay();

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
		name.parentElement.classList.add('invalid');
		e.preventDefault();
	} else {
		name.parentElement.classList.remove('invalid');
	}
	if (email.value === '') {
		email.parentElement.classList.add('invalid');
		e.preventDefault();
	} else if (!validEmail(email.value)) {
		email.parentElement.classList.add('invalid');
		e.preventDefault();
	} else {
		email.parentElement.classList.remove('invalid');
	}
	if (message.value === '') {
		message.parentElement.classList.add('invalid');
		e.preventDefault();
	} else {
		message.parentElement.classList.remove('invalid');
	}
});

// Skills BG Animation
let bgShapes = document.querySelectorAll('.background-animation');

skillsBgAnimation(bgShapes);

function skillsBgAnimation() {
	skillsColorRandomizer(bgShapes);
	skillsShapeRandomizer(bgShapes);
	skillsLocationRandomizer(bgShapes);
	skillsRotationRandomizer(bgShapes);

	setTimeout(skillsBgAnimation, 5000);
}

// Border Color
function skillsColorRandomizer(arr) {
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
function skillsShapeRandomizer(arr) {
	arr.forEach((item) => {
		let borRad = Math.floor(Math.random() * 50);
		let randomRadius = `${borRad}%`;
		item.style.borderRadius = randomRadius;
	});
}

// Location
function skillsLocationRandomizer(arr) {
	arr.forEach((item) => {
		let height = Math.floor(Math.random() * window.innerHeight);
		let width = Math.floor(Math.random() * window.innerWidth);
		let itemHeight = `${height}px`;
		let itemWidth = `${width}px`;
		item.style.top = itemHeight;
		item.style.left = itemWidth;
	});
}

// Rotation
function skillsRotationRandomizer(arr) {
	arr.forEach((item) => {
		let rotation = Math.floor(Math.random() * 360);
		let randomRotation = `rotate(${rotation}deg)`;
		item.style.transform = randomRotation;
	});
}
