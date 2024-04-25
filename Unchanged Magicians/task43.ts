let Magician:string[]=["Harry Potter","Dumbell Door","Doctor Strange"]
function show_magician(Magician:string[]){
    for(let i=0;i<Magician.length;i++){
        console.log("Magician:"+Magician[i]);
    }
}
function make_great(Magician:string[]){
    let Modified_Magician_arr:string[]=[]
    for(let i=0;i<Magician.length;i++){ 
        Modified_Magician_arr.push(`${Magician[i]} The Great`)
    }return Modified_Magician_arr;
}
let Modified_Magician_arr=make_great(Magician.slice())
console.log("Original");
show_magician(Magician)
console.log("\n");
console.log("With The Great");
show_magician(Modified_Magician_arr)



