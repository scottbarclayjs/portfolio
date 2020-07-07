let projectsLink = document.querySelector('.projects');

projectsLink.addEventListener('mouseover', function () {
	this.textContent = 'coming soon...';
	this.style.transition = 'all .4s';
});

projectsLink.addEventListener('mouseout', function () {
	this.textContent = 'PROJECTS';
});
