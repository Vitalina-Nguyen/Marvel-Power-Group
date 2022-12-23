const header = document.querySelector('.header');

function changeHeaderColor () {
    if (window.pageYOffset > 3) {
        header.style.background = "#FFFFFF";
    }
    else header.style.background = "transparent";
}