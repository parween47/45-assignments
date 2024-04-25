"use strict";
var PersonName = "Ubaid Farhan";
console.log("lowerCase:", PersonName.toLowerCase());
console.log("UpperCase:", PersonName.toUpperCase());
console.log("TitleCase:", PersonName.replace(/\b\w/g, c => c.toUpperCase()));
