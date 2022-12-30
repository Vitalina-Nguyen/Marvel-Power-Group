//Проверка открыта ли бургер меню при расширении экрана 
function closeBurgerMenu () {
    if (document.documentElement.clientWidth >= 768) {
        if (navbarLinksList.classList.contains('open')) {
            navbarLinksList.classList.toggle('open');
            navBtn.classList.toggle('open');
            body.style.overflow = 'unset';
        }
    }
}



// Фун-ция меняет знак бургера на крестик, открывает / закрывает бургер меню
function onBurgerBtnClick () {
    if (document.documentElement.clientWidth < 767) {
        if (navbarLinksList.classList.toggle('open')) {
            body.style.overflow = 'hidden';
            navBtn.classList.toggle('open');
    
        } else {
            body.style.overflow = 'unset';
            navBtn.classList.toggle('open');
        }
    }
}



