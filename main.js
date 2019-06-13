//help the cashier return the right of change
window.alert('Help the cashier calculate the right change for this buyer')
//Instead of the original prompt, I have used the window alert to let viewer
//know what is expected of them.

var total = prompt("Total Due:");
total = parseFloat(total).toFixed(2);

//Programme input:
//Amount due
//Amount paid by the customer
var amountPaid = prompt("Amount Paid:");
amountPaid = parseFloat(amountPaid).toFixed(2);

//Programme output:
//Print change amount
//Print change breakdown: notes and coins
var changeDue = parseFloat(amountPaid - total).toFixed(2);

console.log(changeDue);
window.alert(changeDue); //I added this line to inform customer of their change

//UK Example:
//Banknotes:
//£50 - £20 - £10 - £5
//Coins:
//£2 - £1 - 50p - 20p - 10p - 5p - 2p - 1p
