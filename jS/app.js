const contactBtn = document.querySelector('.contact-btn');
const navLinks = document.querySelectorAll('.nav-links li');
const resume = document.querySelector('.resume-img');
const resumeBtn = document.querySelector('.resume button');
const form = document.querySelector('.form');
const skillImage = document.querySelectorAll('.skill i');

// Header Animation

contactBtn.addEventListener('mouseover', function () {
	this.style.borderRadius = '0';
	this.style.transition = 'all .4s';
});

contactBtn.addEventListener('mouseleave', function () {
	this.style.borderRadius = '76% 24% 80% 20% / 32% 25% 75% 68%';
	this.style.transition = 'all .4s';
});

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

// let skillsWindow = document.querySelector('.skills');
// console.log(skillsWindow.width);

// Skills BG Animation
let bgShapes = document.querySelectorAll('.background-animation');

skillsBgAnimation(bgShapes);

function skillsBgAnimation() {
	skillsColorRandomizer(bgShapes);
	skillsShapeRandomizer(bgShapes);
	skillsLocationRandomizer(bgShapes);
	skillsRotationRandomizer(bgShapes);

	setTimeout(skillsBgAnimation, 1000);
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
