"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlaceToVisit = ["Madina", "Baghdad", "Ajmer", "Istanbol", "Ziarat"];
// original
console.log(PlaceToVisit);
// alphabetical
console.log([...PlaceToVisit].sort());
// original
console.log(PlaceToVisit);
// reverse alphabetical
console.log([...PlaceToVisit].sort().reverse());
// original
console.log(PlaceToVisit);
// reverse array
PlaceToVisit.reverse();
console.log(PlaceToVisit);
// reverse again back to normal
PlaceToVisit.reverse();
console.log(PlaceToVisit);
// alphabetical with change in array
PlaceToVisit.sort();
console.log(PlaceToVisit);
// reverse alphabetical with change in array
PlaceToVisit.sort().reverse();
console.log(PlaceToVisit);
