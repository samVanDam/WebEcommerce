import Product from "./product.js";

"use strict";


export function getProducts() {
    //create array of products
    //name, price, listOfTags, description, imageURL
    
    let products = new Array(list.length);
    list.forEach(product => {
        products.push(product);
    });

    localStorage.setItem("products", JSON.stringify(products));
}