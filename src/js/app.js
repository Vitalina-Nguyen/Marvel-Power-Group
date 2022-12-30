const navBtn = document.querySelector("#navbarBtn"),
  navbar = document.querySelector("#navbar"),
  navbarLinksList = document.querySelector(".navbar__links"),
  navbarLinks = document.querySelectorAll(".navbar__links"),
  body = document.body,
  navbarContactBtn = document.querySelector("#navbar-contact-us"),
  sendFormBtn = document.querySelector("#send-form"),
  form = document.querySelector("#form"),
  nextPageBtn = document.querySelector(".next-page");

window.addEventListener("DOMContentLoaded", () => {
  scrollToSection();
  navigationLines();
});

window.addEventListener("scroll", () => {
  navigationLines();
  changeColor();
  changeHeaderColor();
});

window.addEventListener("resize", closeBurgerMenu);
navBtn.addEventListener("click", onBurgerBtnClick);
nextPageBtn.addEventListener("click", (e) => {
  scrollForMore(e);
});
sendFormBtn.addEventListener("click", sendFormError);
sendFormBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});
