"use strict";
let items = [];
function makeSandwiches(...items) {
    let ingredients = items.join(" ");
    console.log(`Your sandwich is ready with ${ingredients}; Enjoy your meal!`);
}
makeSandwiches("tomato", "beaf", "Slice");
makeSandwiches("potato", "onion", "cheese");
makeSandwiches("chilli", "cheese", "chicken");
