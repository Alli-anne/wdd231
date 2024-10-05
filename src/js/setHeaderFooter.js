import { parkInfoTemplate, footerTemplate} from "./templates.mjs";

function setHeaderInfo(data) {

    let disclaimerLink = document.querySelector(".disclaimer a")
    
    disclaimerLink.innerHTML = data.fullName
    
    disclaimerLink.href = data.url
    
    let park = document.getElementsByClassName("hero-banner__title")[0]
    
    park.innerHTML = data.fullName
    
    document.querySelector('.hero-banner__title').innerHTML = data.name;
    
    document.querySelector('.designation').innerHTML = data.designation;
    
    document.querySelector('.states').innerHTML = data.states;
    
    let banner_img = document.querySelector('.hero-banner img');
    
    banner_img.src = data.images[0].url;
    banner_img.alt = data.images[0].altText;
    
    document.querySelector('.hero-banner__image').innerHTML = data.images.url;
    
    document.querySelector('.hero-banner__image').innerHTML = data.images.altText;
    };
function setFooter(data) {
    const footerEl = document.querySelector(".park-footer");
    footerEl.innerHTML = footerTemplate(data);
}
export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
}