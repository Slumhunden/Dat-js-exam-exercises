"use strict";

window.addEventListener("load", initApp);

let product = [
	{ name: "cargopants", price: 42, Boolean: true },
	{ name: "fucks", price: 69, Boolean: false },
	{ name: "facts", price: 100, Boolean: true },
];

function initApp() {
	console.log("working");
    showProduct()
}
function showProduct(){
    document.querySelector("#list-container").innerHTML = "";
    const productInStock = product.sort((a, b)=> a.true - b.false) // i tvivl om hvordan det her fungerer, den "sorter" ikke men lister i hvertfald mine items//
    for (product of productInStock){
        document.querySelector("#list-container").insertAdjacentHTML(
			"beforeend",
			/*html*/ `
        <ul>List of Products:</ul> 
        <li>Name of Product: ${product.name}</li>
        <li>Price: ${product.price}</li>
        <li>In stock? ${product.Boolean}</li>
        
        `
		);
    }  if (Boolean = true){
        
    }
    // DOM mangler lidt, den viser overskriften foran hvert item//
}