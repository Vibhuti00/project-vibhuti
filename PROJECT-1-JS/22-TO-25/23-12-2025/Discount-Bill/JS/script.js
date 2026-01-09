let p_name = prompt("Enter Product Name");
let qty = prompt("Enter Product Quantity");
let price = prompt("Enter Product Price");

let total = qty * price;
let disc = total * 0.1;
let net_total = total - disc;

document.getElementById(`p_name`).innerText = p_name;
document.getElementById(`qty`).innerText = qty;
document.getElementById(`price`).innerText = price;
document.getElementById(`total`).innerText = total;
document.getElementById(`disc`).innerText = disc;
document.getElementById(`net_total`).innerText = net_total;
