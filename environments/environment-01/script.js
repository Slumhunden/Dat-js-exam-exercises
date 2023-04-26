"use strict";

window.addEventListener("load", initApp);

let users = [];
async function initApp() {
	users = await getUsers();
	console.log(users);
}
async function getUsers() {
	const response = await fetch("users.json");
	const data = await response.json();
	return data;
}
function showUsers(user){
    const html = /*html*/ `
    <li>Name: ${user.name} Active:${user.active} </li>`;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend",html)
}