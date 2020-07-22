const percentage = document.querySelector('.percentage');
const percentageDisplay = document.querySelector('.percentage h3');
const progress = document.querySelector('.overlay');
const loading = document.querySelector('h1');
const restartAnimation = document.querySelector('#restart');
const startAnimation = document.querySelector('#start');
let start = 0;

startAnimation.addEventListener('click', () => {
	if (start === 0) {
		loading.style.visibility = 'visible';
		fillBar();
		function fillBar() {
			start++;
			percentageDisplay.textContent = `${start}%`;
			progress.classList.add('start');
			percentage.classList.add('start');
			if (start >= 100) {
				loading.textContent = 'Complete';
				clearInterval(t);
			}
		}

		let t = setInterval(fillBar, 100);

		let letters = loading.textContent.split('');

		const letterSpan = [];
		for (let letter of letters) {
			letterSpan.push(`<span>${letter}</span>`);
		}

		letters = letterSpan.join('');

		loading.innerHTML = letters;

		const eachLetter = document.querySelectorAll('h1 span');
		let lastLetter = eachLetter.length - 1;

		for (let i = 0; i < eachLetter.length; i++) {
			task(i);
		}

		function task(i) {
			setTimeout(function () {
				eachLetter[i].classList.add('loading');
			}, 250 * i);
		}
	}
});

restartAnimation.addEventListener('click', () => {
	if (start === 100) {
		start = 0;
		progress.classList.remove('start');
		percentage.classList.remove('start');
		percentageDisplay.textContent = `${start}%`;
		loading.textContent = 'Loading...';
		loading.style.visibility = 'hidden';
	}
});
