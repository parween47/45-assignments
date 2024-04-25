let items:string[]=[]
function makeSandwiches(...items:string[]){
    let ingredients=items.join(" ")
    console.log(`Your sandwich is ready with ${ingredients }; Enjoy your meal!`);
}
makeSandwiches("tomato","beaf" ,"Slice")
makeSandwiches("potato","onion","cheese")
makeSandwiches("chilli","cheese","chicken")