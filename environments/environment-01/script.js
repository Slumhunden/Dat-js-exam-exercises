//exercise 00 //

// "use strict";

// window.addEventListener("load", initApp);

// let users = [];
// async function initApp() {
// 	users = await getUsers();
// 	console.log(users);
// }
// async function getUsers() {
// 	const response = await fetch("users.json");
// 	const data = await response.json();
// 	return data;
// }
// function showUsers(user){
//     const html = /*html*/ `
//     <li>Name: ${user.name} Active:${user.active} </li>`;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend",html)
// }

//exercise 02 //

// window.addEventListener("load",initApp);

// let users = []
// async function initApp(){
// 	users = await fetchUsers()
// 	console.log(users)
// 	for (
// 		const user of users){
// 			showList(user)
// 		}
// countRoles();
// }
// async function fetchUsers(){
// 	const response = await fetch("users.json");
// 	const data = await response.json();
// 	return data
// }

// function showList(user){
// 	const html = /*html*/ `
// 	<li>Users: ${user.name}</li>`
// 	document.querySelector("#userlist").insertAdjacentHTML("beforeend",html)
// }
// function countRoles(){
// let admin = 0
// let guest = 0
// let bruger = 0
// for (const user of users){
// if (user.role === "admin"){
// admin++
// }else if (user.role === "user"){
// bruger++
// }else if (user.role === "guest"){
// 	guest++
// }}
// document.querySelector("#admin-count").textContent = admin;
// document.querySelector("#guest-count").textContent = guest;
// document.querySelector("#user-count").textContent = bruger;
// }

// window.addEventListener("load", initApp);

// async function initApp() {
// 	users = await getUsers();
// 	console.log(users);
// 	showUsers();
// 	createUser("sofie", true, "bitch") // opg 3 //
// }
// let users = [];

// async function getUsers() {
// 	const response = await fetch("users.json");
// 	const data = response.json();
// 	return data;
// }
// function showUsers() {
// 	document.querySelector("#userlist").innerHTML = "";
// 	for (const user of users) {
// 		if (user.active) {
// 			document.querySelector("#userlist").insertAdjacentElement(
// 				"beforeend",
// 				/*html*/ `
// 			<li>${user.name}, ${user.active}</li>`
// 			);
// 		}
// 	}
// }
// //Opg 3//
// function createUser(name, active, role){
// 	const newUser = {name: name, active: active, role: role}
// 	users.push(newUser) // push tilføjer et element til slutningen af listen //
// 	showUsers();
// }


