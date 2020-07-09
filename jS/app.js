const contactBtn = document.querySelector('.contact-btn');
const navLinks = document.querySelectorAll('.nav-links li');
const resume = document.querySelector('.resume-img');
const resumeBtn = document.querySelector('.resume button');

contactBtn.addEventListener('mouseover', function () {
	this.style.borderRadius = '17% 83% 16% 84% / 73% 77% 23% 27%';
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
	resumeBtn.classList.add('visible');
	resumeBtn.classList.remove('hidden');
	this.classList.add('imgHover');
	this.classList.remove('imgBlur');
});

resume.addEventListener('mouseleave', function () {
	resumeBtn.classList.remove('visible');
	resumeBtn.classList.add('hidden');
	this.classList.remove('imgHover');
	this.classList.add('imgBlur');
});

resumeBtn.addEventListener('mouseover', function () {
	resume.classList.add('imgHover');
	resume.classList.remove('imgBlur');
	resumeBtn.classList.add('visible');
	resumeBtn.classList.remove('hidden');
});
