setTimeout (function(){
    console.log("async");

}, 1000);

console.log("synchronous");

// URL of the API endpoint to fetch data about the Pokémon "Ditto"
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";


// A variable to hold the fetched data, initialized as null
let results = null;

// An asynchronous function to fetch Pokémon data from the provided URL
async function getPokemon(url) {
  // 'fetch' is used to make a network request to the API
  // 'await' is used because 'fetch' returns a promise, meaning it takes time to get the response
  const response = await fetch(url);
  console.log(response);

  // Check if the response status is 'ok' (HTTP status in the range of 200-299 indicates success)
  if (response.ok) {
    // The response data is in JSON format, but we need to parse it first
    // 'response.json()' also returns a promise, so we 'await' it to get the parsed JSON data
    const data = await response.json();

    // Pass the data to another function to do something with it (like logging it)
    doStuff(data);
  }
}

// A function to handle the fetched data (here we just assign it to the 'results' variable and log it)
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }

async function getPokemonList(url) {
const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      doStuffList(data);}
    }
      
      
function doStuffList(data) {
        console.log(data);
        const pokeListElement = document.querySelector("#outputList");
        const pokeList = data.results;
        pokeList.forEach((currentItem) => {
          const html = `<li>${currentItem.name}</li>`;
          // note the += here...
          pokeListElement.innerHTML += html;
        });
      }

// Call the 'getPokemon' function to initiate the fetch request
getPokemon(url);

// This console.log runs *before* the fetch completes, because 'fetch' is asynchronous
// Since 'results' has not been updated yet, this will log 'null' at this point
console.log("second: ", results);
getPokemonList(urlList);

const parkUrl = "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=A8AtTg2KI95rU5Ln3FCOkcTHFlePlfOd8WmxjBFn"

async function getJASON(){
    let data;
    const response = await fetch(parkUrl);
    if (response.ok) {
        data = await response.json();
        document.querySelector("#outputParks").innerHTML = data.data[0].fullName;
        console.log(data);
    }
    else{
        console.log("error");
    }
}

getJASON();