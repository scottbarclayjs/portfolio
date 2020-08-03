const itemInput = document.querySelector('#item-input');
const addBtn = document.querySelector('#add-btn');

updateDate();

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	footerAnimation();
	taskCompleted();
});

window.addEventListener('keypress', (e) => {
	if (
		e.which === 13 &&
		itemInput.value !== '' &&
		itemInput.value.length < 21
	) {
		addItem();
		taskCompleted();
	}
});

const list = document.querySelector('#task-list');

function footerAnimation() {
	addBtn.classList.toggle('showInput');
	addBtn.classList.toggle('hideInput');
	itemInput.classList.toggle('showInput');
	itemInput.classList.toggle('hideInput');
	if (itemInput.value !== '' && itemInput.value.length < 21) {
		addBtn.addEventListener('click', () => {
			addItem();
		});
	}
}

let allTasks = [];

function addItem() {
	// Create li element
	let newTask = document.createElement('li');
	// Add user input as the li's text content
	newTask.textContent = itemInput.value;
	// Add completed circle to new item
	let taskComplete = document.createElement('div');
	// Add icon inside of div
	taskComplete.innerHTML = '<i class="fas fa-check"></i>';
	// Add taskComplete to new task
	newTask.appendChild(taskComplete);
	// Add the new item to the list
	list.appendChild(newTask);
	// Clear the input
	itemInput.value = '';
	// Add newTask to allTasks
	allTasks.push(newTask);
	// Update total Count
	updateDisplay();
}

function taskCompleted() {
	let completeCircle = document.querySelectorAll('li div');
	for (let i = 0; i < allTasks.length; i++) {
		completeCircle[i].addEventListener('click', () => {
			allTasks[i].classList.toggle('completed');
		});
	}
}

const totalDisplay = document.querySelector('.total-display');
let totalTasks = 0;

function updateDisplay() {
	totalTasks++;
	totalDisplay.textContent = totalTasks;
}

function updateDate() {
	let today = new Date();
	const dateDisplay = document.querySelector('h1');
	dateDisplay.textContent = today.toDateString();
}
