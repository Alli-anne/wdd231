import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

let disclaimerLink = document.querySelector(".disclaimer a")

disclaimerLink.innerHTML = parkData.fullName

disclaimerLink.href = parkData.url

let park = document.getElementsByClassName("hero-banner__title")[0]

park.innerHTML = parkData.fullName

document.querySelector('.hero-banner__title').innerHTML = parkData.name;

document.querySelector('.designation').innerHTML = parkData.designation;

document.querySelector('.states').innerHTML = parkData.states;

let banner_img = document.querySelector('.hero-banner img');

banner_img.src = parkData.images[0].url;
banner_img.alt = parkData.images[0].altText;

document.querySelector('.hero-banner__image').innerHTML = parkData.images.url;

document.querySelector('.hero-banner__image').innerHTML = parkData.images.altText;




