let Magician:string[]=["Harry Potter","Dumbell Door","Doctor Strange"]
function show_magician(Magician:string[]){
    for(let i=0;i<Magician.length;i++){
        console.log("Magician:"+Magician[i]);
    }
}
function make_great(Magician:string[]){
    for(let i=0;i<Magician.length;i++){
        Magician[i]=Magician[i]+" The Great";
    }
}
make_great(Magician); // Modifies the original array
show_magician(Magician); // Shows modified names

