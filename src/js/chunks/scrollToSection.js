//Прокрутка к выбранному разделу
function scrollToSection () {
    if(navbarLinks.length > 0){
        //Добавляем слушателя на каждую ссылку
        navbarLinks.forEach(navbarLink => {
            navbarLink.addEventListener('click', (e) => {

                const chosenLink = e.target;
                //Проверяет есть ли атр. goto и есть ли элемент с таким атр. в  html
                if (chosenLink.dataset.goto && document.querySelector(chosenLink.dataset.goto)){

                    onBurgerBtnClick(); //Выключаем бургер

                    const gotoSection = document.querySelector(chosenLink.dataset.goto);
                    //Высчитываем координаты выбранной секции
                    const gotoSectionValue = gotoSection.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight;
                    
                    window.scrollTo({
                        top:gotoSectionValue,
                        behavior: "smooth"
                    });
                    e.preventDefault(); 
                }
            })
        });
    }
}