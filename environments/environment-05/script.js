"use strict";
import { courses } from "./courses.js";

window.addEventListener("load", initApp);

function initApp() {
	showCourses(courses);

	document.querySelector("#select-filter-ects").addEventListener("change", filteredCourses);
}

function showCourses(listOfCourses) {
	document.querySelector("#courses-list").innerHTML = "";

	for (const course of listOfCourses) {
		document.querySelector("#courses-list").insertAdjacentHTML(
			"beforeend",

			/* html */ `

        <li>${course.name}, (ECTS: ${course.ectsPoints})</li>

        `
		);
	}
}

function filteredCourses(event) {
	const selectedValue = Number(event.target.value);

	const filteredCourses = courses.filter((course) => course.ectsPoints === selectedValue);

	showCourses(filteredCourses);
}