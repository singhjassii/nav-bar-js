// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let listArrow = document.querySelector(".list-arrow");
listArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}
let hotArrow = document.querySelector(".hot-arrow");
hotArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}
let pagesArrow = document.querySelector(".pages-arrow");
pagesArrow.onclick = function () {
  navLinks.classList.toggle("show4");
}
