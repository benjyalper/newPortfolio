<<<<<<< HEAD

//selecting html elements

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function (e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if (emailValue.includes('@')) {
		// all good
		alert('Thank you for your message!');
		console.log(messageValue)
	} else {
		alert('Oh no. That does not look like a valid email adress, please try again.');
	}


});


//attaching 'click listener'
//getting user entered values
=======

//selecting html elements

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', function (e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if (emailValue.includes('@')) {
		// all good
		alert('Thank you for your message!');
		console.log(messageValue)
	} else {
		alert('Oh no. That does not look like a valid email adress, please try again.');
	}


});


//attaching 'click listener'
//getting user entered values
>>>>>>> f2cfcdbc51ed2b3f085955da7bc5900327d91b2d
//javascript validations