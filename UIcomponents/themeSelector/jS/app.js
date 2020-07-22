const themes = document.querySelectorAll('.theme-card-head');
const themeCards = document.querySelectorAll('.theme-card');
const themeColor = document.querySelectorAll('.color');
const themeName = document.querySelectorAll('h4');
const themeBtn = document.querySelector('.theme-btn');
const themeTxtColor = document.querySelectorAll('.text-color');
const body = document.querySelector('body');
let chosenTheme;
const backgroundShapes = document.querySelector('.background-shape');
let shapes = [];

addShape();

const shape = document.querySelectorAll('.shape');

// Initial themes
for (let i = 0; i < themes.length; i++) {
	themes[i].style.backgroundColor = themeColor[i].innerText;
	themeColor[i].style.color = themes[i].style.backgroundColor;
	themeColor[i].style.backgroundColor = themeTxtColor[i].innerText;
	themeTxtColor[i].style.color = themeTxtColor[i].innerText;
	themeTxtColor[i].style.backgroundColor = themes[i].style.backgroundColor;
	themeName[i].style.color = themeTxtColor[i].innerText;

	// When theme is clicked
	themeCards[i].addEventListener('click', function () {
		chosenTheme = themes[i];
		chosenThemeTxt = themeTxtColor[i];
		for (let theme of themes) {
			theme.parentElement.classList.remove('choose');
		}
		chosenTheme.parentElement.classList.add('choose');
		return chosenTheme, chosenThemeTxt;
	});

	// When theme is touched on mobile
	themeCards[i].addEventListener('touchstart', () => {
		chosenTheme = themes[i];
		chosenThemeTxt = themeTxtColor[i];
		for (let theme of themes) {
			theme.parentElement.classList.remove('choose');
		}
		addTheme();
	});
}

// When enter is pressed w/ active theme
window.addEventListener('keypress', (e) => {
	if (e.which === 13) {
		addTheme();
	}
});

// When choose theme button is clicked
themeBtn.addEventListener('click', function () {
	addTheme();
});

// When space bar is pressed
window.addEventListener('keypress', function (e) {
	let randomTheme = Math.floor(Math.random() * themes.length);
	if (e.which === 32) {
		chosenTheme = themes[randomTheme];
		chosenThemeTxt = themeTxtColor[randomTheme];
		for (let theme of themeCards) {
			theme.classList.remove('choose');
		}
		addTheme();
		themeCards[randomTheme].classList.add('choose');
	}
});

// Add theme function for when space bar or button is pressed
let addTheme = () => {
	body.style.backgroundColor = chosenTheme.style.backgroundColor;
	body.style.color = chosenThemeTxt.style.color;
	themeBtn.style.backgroundColor = chosenThemeTxt.style.color;
	themeBtn.style.color = chosenTheme.style.backgroundColor;
	for (let shp of shape) {
		shp.style.borderColor = chosenThemeTxt.style.color;
	}
	shapeRandomizer();
};

// Edited content
for (let i = 0; i < themeColor.length; i++) {
	themeColor[i].addEventListener('blur', () => {
		themes[i].style.backgroundColor = themeColor[i].innerText.trim();
		themeColor[i].style.color = themes[i].style.backgroundColor;
		themeTxtColor[i].style.backgroundColor =
			themes[i].style.backgroundColor;
	});
	themeTxtColor[i].addEventListener('blur', () => {
		themeTxtColor[i].style.color = themeTxtColor[i].textContent.trim();
		themeColor[i].style.backgroundColor = themeTxtColor[i].innerText;
		themeName[i].style.color = themeTxtColor[i].innerText;
	});
	themeColor[i].addEventListener('keypress', (e) => {
		if (e.which === 13) {
			themes[i].style.backgroundColor = themeColor[i].innerText.trim();
			themeColor[i].style.color = themes[i].style.backgroundColor;
			themeTxtColor[i].style.backgroundColor =
				themes[i].style.backgroundColor;
			themeColor[i].blur();
		}
	});
	themeTxtColor[i].addEventListener('keypress', (e) => {
		if (e.which === 13) {
			themeTxtColor[i].style.color = themeTxtColor[i].textContent;
			themeColor[i].style.backgroundColor = themeTxtColor[i].innerText;
			themeName[i].style.color = themeTxtColor[i].innerText;
			themeTxtColor[i].blur();
		}
	});
}

function addShape() {
	for (let i = 0; i < 30; i++) {
		let shape = document.createElement('div');
		shape.classList.add('shape');
		backgroundShapes.appendChild(shape);
	}
	return backgroundShapes;
}

function shapeRandomizer() {
	for (let shp of shape) {
		shp.style.top = `${Math.floor(Math.random() * body.offsetHeight)}px`;
		shp.style.left = `${Math.floor(Math.random() * body.offsetWidth)}px`;
		shp.style.borderRadius = `${Math.floor(Math.random() * 50)}%`;
	}
}
