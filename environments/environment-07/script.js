"use strict";

window.addEventListener("load", initApp);

let students = [];

function initApp() {
	console.log("Hej");

	document

		.querySelector("#create-student-form")

		.addEventListener("submit", createStudent);
}

function createStudent(event) {
	event.preventDefault();

	const form = this;

	const name = form.name.value;

	const email = form.email.value;

	const age = form.age.value;

	const newStudent = {
		name: name,

		email: email,

		age: age,
	};

	students.push(newStudent);

	console.log(students);

	if (!checkMail(email)) {
		students.pop();

		console.log(students);
	}
}

function checkMail(email) {
	console.log(email);

	const index = email.indexOf("@");

	if (index > 3 && email.endsWith("@stud.kea.dk")) {
		return true;
	} else {
		console.log("Wrong email input");

		return false;
	}
}
