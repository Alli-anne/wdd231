import {getRecipes} from "./recipes.mjs";

const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data){
    console.log(data);
    const  recipeContainer = document.querySelector(".recipe");
    // multiples items in an array to loop though all of them we use  the .map()method
    const html = data.recipes.map(recipeTemplate);
    recipeContainer.innerHTML = html.join("");
}

function recipeTemplate(info) {
    return `<div class="recipe">
            <h2>${info.recipe_name}</h2>
            <img src="${info.images}" alt="${info.notes}"/>
    `;
}
setCookieInfo(cookieData);