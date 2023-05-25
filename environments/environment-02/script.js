"use strict";

window.addEventListener("load", initApp);

function initApp() {
	console.log(animals);
	showAnimals();
	document.querySelector("create-form").addEventListener("submit", createAnimal);
}
let animals = [
	{ name: "Morten", type: "dog", age: "25" },
	{ name: "Martin", type: "lion", age: "18" },
	{ name: "Krystal", type: "snail", age: "30" },
];

function showAnimals() {
	document.querySelector("tbody").innerHTML = "";
	const sortedAnimals = animals.sort((a, b) => a.age - b.age); //sort efter alder ved at lave en arrowfunction som sammenligner alderen//
	for (const animal of sortedAnimals) {
		document.querySelector("tbody").insertAdjacentHTML(
			"beforeend",
			/*html*/ `
	<tr>
	<td>${animal.name}</td>
	<td>${animal.type}</td>
	<td>${animal.age}</td>
	</tr>
	`
		);
	}
}
function createAnimal(event) {
	event.preventDefault();
	const form = document.querySelector("create-form");
	const name = form.name.value;
	const type = form.type.value;
	const age = form.age.value;

	const newAnimal = { name: name, type: type, age: age };
    animals.push(newAnimal)
    showAnimals()
}
