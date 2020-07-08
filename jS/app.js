const contactBtn = document.querySelector('.contact-btn');

contactBtn.addEventListener('mouseover', function () {
	this.style.borderRadius = '17% 83% 16% 84% / 73% 77% 23% 27%';
	this.style.transition = 'all .6s';
});

contactBtn.addEventListener('mouseleave', function () {
	this.style.borderRadius = '76% 24% 80% 20% / 32% 25% 75% 68%';
	this.style.transition = 'all .6s';
});
