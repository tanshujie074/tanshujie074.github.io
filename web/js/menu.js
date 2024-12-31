// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .ri-menu-line");
let menuCloseBtn = document.querySelector(".nav-links .ri-close-line");
menuOpenBtn.onclick = function () {
    navLinks.style.right = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.right = "-100%";
}

// sidebar submenu open close js code
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}

let liveNewsArrow = document.querySelector(".live-news-arrow");
liveNewsArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}