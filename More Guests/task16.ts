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



