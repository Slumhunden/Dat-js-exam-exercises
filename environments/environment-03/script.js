"use strict";

window.addEventListener("load", initApp);

let product = [
	{ name: "cargopants", price: 42, inStock: true },
	{ name: "fucks", price: 69, inStock: false },
	{ name: "facts", price: 100, inStock: true },
];

function initApp() {
	console.log("working");
    showProduct()
}
function showProduct(){
    document.querySelector("#list-container").innerHTML = "";
    for (product of product){
        if (product.inStock === true){
        document.querySelector("#list-container").insertAdjacentHTML(
			"beforeend",
			/*html*/ `
        <ul>List of Products:</ul> 
        <li>Name of Product: ${product.name}</li>
        <li>Price: ${product.price}</li>
        <li>In stock? ${product.inStock}</li>
        
        `
		)}
    } 
        
    // DOM mangler lidt, den viser overskriften foran hvert item//
}