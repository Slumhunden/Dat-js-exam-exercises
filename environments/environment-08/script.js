"use strict";

window.addEventListener("load", initApp);

function initApp() {
	console.log("hej");

	showSongs();
}

let songs = [
	{
		artist: "Drake",

		title: "Hotline Bling",

		duration: "3:40",

		upvote: 0,
	},

	{
		artist: "Taylor Swift",

		title: "22",

		duration: "3:10",

		upvote: 0,
	},

	{
		artist: "Rihanna",

		title: "Umbrella",

		duration: "4:10",

		upvote: 0,
	},
];

function showSongs() {
	document.querySelector("#songlist").innerHTML = "";

	songs.sort((a, b) => a.upvote - b.upvote).reverse(); //reverse gør at den viser den med flest stemmer øverst i det her tilfælde //

	for (const song of songs) {
		document.querySelector("#songlist").insertAdjacentHTML(
			"beforeend",

			/* html */ `

        <li>${song.artist}: ${song.title} (${song.duration}) <button>Upvote</button></li>

        `
		);

		document.querySelector("#songlist li:last-child button").addEventListener("click", () => upvoteSong(song));
	}
}

function upvoteSong(song) {
	song.upvote++;

	console.log(song.upvote);

	showSongs();
}
