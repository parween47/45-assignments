var GuestList=["Ali","Faizan","Furqan"]
console.log("I am glad to invite you for dinner,my dear friend",GuestList[0]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[1]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[2]);
console.log('Sorry! '+GuestList[1]+"  can\'t come to the dinner party today.");
//Adding new guest 
GuestList[1]= "Imran";
console.log("I am glad to invite you for dinner,my dear friend",GuestList[0]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[1]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[2]);
console.log('This is to inform you all,that we found a bigger dinner table.');
GuestList.unshift("Yaqoob"); 
GuestList.splice(1,0, "Usman"); 
GuestList.push( "Zeeshan");  

console.log("I am glad to invite you for dinner,my dear friend",GuestList[0]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[1]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[2]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[3]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[4]);
console.log("I am glad to invite you for dinner,my dear friend",GuestList[5]);
console.log("Sorry! I can invite only two people for dinner.");
let guest_6=GuestList.pop();
console.log(guest_6+",I am sorry to inform you that I can invite only two people for dinner.");

let guest_5=GuestList.pop();
console.log(guest_5+",I am sorry to inform you that I can invite only two people for dinner.");

let guest_4=GuestList.pop();
console.log(guest_4+",I am sorry to inform you that I can invite only two people for dinner.");

let guest_3=GuestList.pop();
console.log(guest_3+",I am sorry to inform you that I can invite only two people for dinner.");

console.log(GuestList[0]+',You are still invited in party');
console.log(GuestList[1]+',You are still invited in party');

GuestList.pop();
GuestList.pop();

console.log(GuestList);