"use strict";
var month_1 = "january";
var month_2 = "febuary";
console.log("EUALITY AND INEQUALITY TEST WITH STRING");
if (month_1 == month_2) {
    console.log(true);
}
else {
    console.log(false);
}
if (month_1 != month_2) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("\nTEST FOR LOWERCASE");
if ("JANUARY".toLowerCase() === month_1) {
    console.log(true);
}
else {
    console.log(false);
}
if ("FEBUARY".toLowerCase() === month_1) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("\nTEST FOR COMPARISON OPERATOR WITH NUMBERS");
console.log("equality test");
var a = 5 === 5;
console.log(a);
console.log("inequality test");
var b = 5 !== 5;
console.log(b);
console.log("less than test");
var c = 5 < 10;
console.log(c);
console.log("greater than test");
var d = 5 > 10;
console.log(d);
console.log("greater than and equal to test");
var e = 5 >= 5;
console.log(e);
console.log("less than and equal to test");
var f = 5 <= 1;
console.log(f);
var school = "Nasra";
var campus = "North Karachi";
console.log("\nAND OPETATOR");
var a = school != "Alkhair" && campus == "Norht Karachi";
console.log(a);
var b = school == "Alkhair" && campus == "Norht Karachi";
console.log(b);
console.log("\nOR OPETATOR");
var c = school != "Alkhair" || campus == "Nazimabad";
console.log(c);
var d = school == "Alkhair" || campus == "Nazimabad";
console.log(d);
console.log("\nARRAY TEST");
var arr = ["1", "2", "3", "4", "5"];
console.log("in array");
console.log("1" in arr);
console.log("not in array");
console.log("8" in arr);
