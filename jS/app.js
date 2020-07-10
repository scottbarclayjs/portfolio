const contactBtn = document.querySelector('.contact-btn');
const navLinks = document.querySelectorAll('.nav-links li');
const resume = document.querySelector('.resume-img');
const resumeBtn = document.querySelector('.resume button');
const form = document.querySelector('.form');
const skillImage = document.querySelectorAll('.skill i');

contactBtn.addEventListener('mouseover', function () {
	this.style.borderRadius = '0';
	this.style.transition = 'all .4s';
});

contactBtn.addEventListener('mouseleave', function () {
	this.style.borderRadius = '76% 24% 80% 20% / 32% 25% 75% 68%';
	this.style.transition = 'all .4s';
});

for (let link of navLinks) {
	link.addEventListener('click', function () {
		for (link of navLinks) {
			link.classList.remove('active');
		}
		this.classList.add('active');
	});
}

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

form.addEventListener('mouseenter', function () {
	this.classList.add('formHover');
	this.classList.remove('formBlur');
});

form.addEventListener('mouseleave', function () {
	this.classList.remove('formHover');
	this.classList.add('formBlur');
});

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

// function checkRequired(inputArr) {
// 	inputArr.forEach((input) => {
// 		if (input.value === '') {
// 			input.parentElement.classList.add('invalid');
// 		} else {
// 			input.parentElement.classList.remove('invalid');
// 		}
// 	});
// }

// form.addEventListener('submit', function (e) {
// 	checkRequired([name, email, message]);
// 	checkEmail(email);
// 	if (valid === false) {
// 		e.preventDefault();
// 	}
// });
