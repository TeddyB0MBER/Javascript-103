console.log("This is the console");

let productName = prompt("enter Product name:"); // string "" '' ``
let productCost = prompt(" enter Product Cost"); // number 1,10000,1.3,0.5
let productQuantity = prompt("Enter Quantity");
const tax = 1.015 ; // The Number transforms the test into a number
let productTotal = Number(productCost) * Number(productQuantity) * tax;

document.write("<p> Product Name : " + productName + "</p>"); // concatenation
document.write("<p> Product cost : " + productCost + "</p>"); 
document.write("<p> Product quantity :" + productQuantity + "</p>");
document.write("<p> Product cost and quantity Total : " + productTotal + "</p>"); 

