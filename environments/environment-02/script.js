"use strict";

// window.addEventListener("load", initApp);

// function initApp() {
// 	createAnimal("morten", "lion", 28);
// 	document.querySelector("#create-form").addEventListener("submit", createClicked);
// 	showAnimals();
// }
// let animals = [];
// function createAnimal(name, type, age) {
// 	const animal = { name: name, type: type, age: age };
// 	animals.push(animal);
// 	console.log(animals);
// 	showAnimals();
// }

// function createClicked(event) {
// 	event.preventDefault();
// 	const form = event.target;
// 	const name = form.name.value;
// 	const type = form.type.value;
// 	const age = form.age.value;
// 	createAnimal(name, type, age);
// }
// function showAnimals() {
// 	animals.sort((a, b) => a.name.localeCompare(b.name));
// 	document.querySelector("tbody").innerHTML = "";
// 	for (const animal of animals) {
// 		document.querySelector("tbody").insertAdjacentHTML(
// 			"beforeend",
// 			/* html */ `
// 		<tr>
//                         <td>${animal.name}</td>
//                         <td>${animal.type}</td>
//                         <td>${animal.age}</td>
//                     </tr>
// 		`
// 		);
// 	}
// }
window.addEventListener("load", initApp);

function initApp() {
	console.log(animals)
	showAnimals()
	document.querySelector("#create-form").addEventListener("submit",createAnimal)
}

let animals = [
	{ name: "Rasmus", type: "dog", age: 28 },

	{ name: "MArtin", type: "cat", age: 25 },

	{ name: "Sofie", type: "horse", age: 19 },
];

function showAnimals(){
	animals.sort((a,b)=> a.age - b.age)
	document.querySelector("tbody").innerHTML= "";
	for (const animal of animals) {
	document.querySelector("tbody").insertAdjacentHTML(
		"beforeend",
		/* html */ `
	<tr>
                        <td>${animal.name}</td>
                        <td>${animal.type}</td>
                        <td>${animal.age}</td>
                    </tr>
	
	`
	);
		
	}
}

function createAnimal(event){
	event.preventDefault()
	console.log(event.target)
const form = event.target
const name = form.name.value
const type = form.type.value
const age = Number(form.age.value);
const animal={name,type,age}
animals.push(animal)
showAnimals();

}