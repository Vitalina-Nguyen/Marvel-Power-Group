//Добавление/удаление кнопки contact us из navbar 
function deleteNavbarContactBtn () {
    if (document.documentElement.clientWidth >= 768) {
        navbarContactBtn.classList.add('none');
    }
    else navbarContactBtn.classList.remove('none');
}



// Фун-ция меняющая знак бургера на крестик
function onBurgerBtnClick () {
    if (document.documentElement.clientWidth < 767) {
        if (navbarLinksList.classList.toggle('open')) {
            body.style.overflow = 'hidden';
            navBtn.classList.toggle('open')
    
        } else {
            body.style.overflow = 'unset';
            navBtn.classList.toggle('open')
        }
    }
}



