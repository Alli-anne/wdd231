const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "A8AtTg2KI95rU5Ln3FCOkcTHFlePlfOd8WmxjBFn";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}

async function renderClimbingList() {
  const listElement = document.querySelector("#outputList");
  const data = await getJson("activities/parks?q=climbing");
  const html = results.data[0].parks.map(listTemplate);
  listElement.innerHTML = html.join("");
}

function listTemplate(item){
    return `<li><a href="${item.url}">${item.fullName}</li>`
}



renderClimbingList();