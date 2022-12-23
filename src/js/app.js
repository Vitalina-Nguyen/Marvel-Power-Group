const navBtn = document.querySelector('#navbarBtn'),
      navbar = document.querySelector('#navbar'),
      navbarLinksList = document.querySelector('.navbar__links'),
      navbarLinks = document.querySelectorAll('.navbar__links'),
      body = document.body,
      navbarContactBtn = document.querySelector('#navbar-contact-us'),
      sendFormBtn = document.querySelector('#send-form')

 

window.addEventListener('DOMContentLoaded', deleteNavbarContactBtn);
window.addEventListener('DOMContentLoaded', scrollToSection);
window.addEventListener('DOMContentLoaded', deleteNavbarContactBtn);
window.addEventListener('DOMContentLoaded', navigationLines);
window.addEventListener("scroll", navigationLines);
window.addEventListener("scroll", changeColor);
window.addEventListener("scroll", changeHeaderColor);
window.addEventListener("resize", deleteNavbarContactBtn);
navBtn.addEventListener("click", onBurgerBtnClick);
sendFormBtn.addEventListener("click", sendFormError);














