"use strict";

window.addEventListener("load", initApp);

let products = [
	{ name: "cargopants", price: 42, inStock: true },
	{ name: "fucks", price: 69, inStock: false },
	{ name: "facts", price: 100, inStock: true },
];

function initApp() {
	console.log("working");
    showProduct()
    document.querySelector("#create-form").addEventListener
}
function showProduct(){
    document.querySelector("#list-container").innerHTML = "";
    for (const product of products){
        if (product.inStock === true){
        document.querySelector("#list-container").insertAdjacentHTML(
			"beforeend",
			/*html*/ ` 
        <li>Name of Product: ${product.name} ${product.price} ${product.inStock}</li>   
     

        
        `
		)}
    } 
        
    // DOM mangler lidt, den viser overskriften foran hvert item//
}

function newProduct(){

}