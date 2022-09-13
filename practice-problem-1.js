/*
 * Harry's mother give Harry $1000. He was asked to buy 1kg apple and 1kg orange.
 * 1kg apple price is $400 and 1kg orange price is $300.
 * after buying both apple and orange how much money shopkeeper will return?
 */

var givenMoney = 1000;
console.log("Money Given to Harry by his mom: $" + givenMoney);
var applePrice = 400;
console.log("Apple Price: $" + applePrice);
var orangePrice = 300;
console.log("Orange Prce: $" + orangePrice);
var totalPrice = applePrice + orangePrice;
var returnPrice = givenMoney - totalPrice;
console.log("Shopkeeper will return: $" + returnPrice)