import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.js";
import { mediaCardTemplate} from "./templates.mjs";
const parkData = getParkData();


function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}
  
function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoEl.innerHTML = html.join("");
}
  

  
setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);





