const checkbox = document.querySelector('#keep-signed-in');
const checkboxOverlay = document.querySelector('.fa-check');
const buttons = document.querySelectorAll('button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Checkbox animation
checkbox.addEventListener('click', () =>
	checkboxOverlay.classList.toggle('checked')
);

// Checks credentials when sign in is pressed
buttons[0].addEventListener('click', (e) => {
	if (email.value === '') {
		e.preventDefault();
		email.classList.add('error');
	} else {
		email.classList.remove('error');
	}
	if (password.value.length > 7 && password.value.length < 13) {
		password.classList.remove('error');
	} else {
		e.preventDefault();
		password.classList.add('error');
	}

	// e.preventDefault();
});

// Loads initial sign up form and transitions to create acct form
const cards = document.querySelectorAll('.container');

cards[0].classList.remove('hide');
cards[0].classList.add('display');
buttons[1].addEventListener('click', (e) => {
	e.preventDefault();
	cards[0].classList.remove('display');
	cards[0].classList.add('hide');
	cards[1].classList.remove('hide');
	cards[1].classList.add('display');
	email.classList.remove('error');
	password.classList.remove('error');
});

// Variables for create acct form
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const emailCreate = document.querySelector('#emailCreate');
const passwordCreate = document.querySelector('#passwordCreate');
const createAccountItems = [firstName, lastName, emailCreate, passwordCreate];

// When create my account is pressed, execute the following...
buttons[2].addEventListener('click', (e) => {
	// Checks credentials
	firstName.value === ''
		? firstName.classList.add('error')
		: firstName.classList.remove('error');
	lastName.value === ''
		? lastName.classList.add('error')
		: lastName.classList.remove('error');
	emailCreate.value === ''
		? emailCreate.classList.add('error')
		: emailCreate.classList.remove('error');

	if (passwordCreate.value.length > 7 && passwordCreate.value.length < 13) {
		passwordCreate.classList.remove('error');
	} else {
		passwordCreate.classList.add('error');
	}

	// Checks to make sure all items are valid
	for (let item of createAccountItems) {
		if (item.classList.contains('error')) {
			e.preventDefault();
			// cards[1].style.animation = 'shake 1s';
		}
	}
});

// Shake animation
const allInputs = [...createAccountItems, email, password];

buttons[0].addEventListener('click', (e) => {
	shakeAnimation();
});

buttons[2].addEventListener('click', (e) => {
	shakeAnimation();
});

function shakeAnimation() {
	for (let input of allInputs) {
		if (input.classList.contains('error')) {
			for (let i = 0; i < 5; i++) {
				shakeStart();
				setTimeout(shakeStop, 500);
			}
		}
	}
	function shakeStart() {
		for (let card of cards) {
			card.classList.add('shakeAnimation');
		}
	}
	function shakeStop() {
		for (let card of cards) {
			card.classList.remove('shakeAnimation');
		}
	}
}

const back = document.querySelector('.back-btn');
// Goes back to original screen
back.addEventListener('click', (e) => {
	e.preventDefault();
	cards[1].classList.remove('display');
	cards[1].classList.add('hide');
	cards[0].classList.remove('hide');
	cards[0].classList.add('display');
	for (let item of createAccountItems) {
		item.classList.remove('error');
	}
});
