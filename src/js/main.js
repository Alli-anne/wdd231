import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.js";
import { mediaCardTemplate } from "./templates.mjs";


function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = data.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
  enableNavigation();}



  function enableNavigation() {
    const menuButton = document.querySelector("#global-nav-toggle");
    const globalNav = document.querySelector(".global-nav");
    
    menuButton.addEventListener("click", (ev) => {
      // Toggle the 'show' class on the global nav menu
      globalNav.classList.toggle("show");
  
      // Update aria-expanded attribute based on menu visibility
      const isExpanded = globalNav.classList.contains("show");
      menuButton.setAttribute("aria-expanded", isExpanded);
  
      // Toggle the visibility of "MENU" and "CLOSE" icons
      const closedIcon = document.querySelector(".global-nav__toggle--closed");
      const openIcon = document.querySelector(".global-nav__toggle--open");
      closedIcon.style.display = isExpanded ? "none" : "flex";
      openIcon.style.display = isExpanded ? "flex" : "none";
    });
  }


init();




