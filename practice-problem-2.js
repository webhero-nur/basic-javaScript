/**
 * Lary's final exam result is just got published. He receive 75.25, 65, 80, 35.45 and 99.50 marks in Mathematics, Biology, Chemistry, Physics and Bangla respectively.
 * Find the average marks of Lary's result to exactly 2 decimal points.
 */


var mathematicsNumber = 75.25;
var biologyNumber = 65;
var chemistryNumber = 80;
var physicsNumber = 35.45;
var banglaNumber = 99.50;
var averageNumber = ((mathematicsNumber + biologyNumber + chemistryNumber + physicsNumber + banglaNumber) / 5).toFixed(2);
console.log(averageNumber);