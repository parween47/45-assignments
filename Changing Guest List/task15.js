"use strict";
var GuestList = ["Ali", "Faizan", "Furqan"];
console.log("I am glad to invite you for dinner,my dear friend", GuestList[0]);
console.log("I am glad to invite you for dinner,my dear friend", GuestList[1]);
console.log("I am glad to invite you for dinner,my dear friend", GuestList[2]);
console.log('Sorry! ' + GuestList[1] + "  can\'t come to the dinner party today.");
//Adding new guest 
GuestList[1] = "Imran";
console.log("I am glad to invite you for dinner,my dear friend", GuestList[0]);
console.log("I am glad to invite you for dinner,my dear friend", GuestList[1]);
console.log("I am glad to invite you for dinner,my dear friend", GuestList[2]);
