"use strict";
import { teachers } from "./teachers.js";

console.log(teachers)

window.addEventListener("load", initApp)

function initApp(){
    createTeacher("morten", "morten@mail.dk")
    console.log(teachers)
    showTeachers()
}

function showTeachers(){
    document.querySelector("#teachers-list").innerHTML = "";
    for (const teacher of teachers) {
        document.querySelector("#teachers-list").insertAdjacentHTML("beforeend", /*html*/`
        <li>${teacher.name} ${teacher.email}</li>
        `)
    }
}
function createTeacher(name,email){
    const newTeacher = {name, email}
    teachers.push(
        newTeacher
    ) 
    showTeachers();
}
