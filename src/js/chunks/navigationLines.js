const first = document.querySelector("#first"),
  second = document.querySelector("#second"),
  third = document.querySelector("#third"),
  fourth = document.querySelector("#fourth"),
  fifth = document.querySelector("#fifth"),
  sixth = document.querySelector("#sixth"),
  lines = document.querySelectorAll(".item-line"), //Линии
  sectionNames = document.querySelectorAll(".page"), //Блоки с названиями страниц
  navigation = document.querySelector("#navigation");


  
  el = [first, second, third, fourth, fifth, sixth]; //Элементы страницы
  elLine = Array.prototype.slice.call(lines);
  elSection = Array.prototype.slice.call(sectionNames);
  length = 6;

  function onScreen(i) {
    elLine[i].style.width = "50px";
    elSection[i].classList.remove("none");
  }
  function outOfScreen(i) {
    elLine[i].style.width = "30px";
    elSection[i].classList.add("none");
  }
    


//Изменение внешнего вида навигационной линии
function navigationLines() {
  if (document.documentElement.clientWidth >= 767) {
    const breakpoint = document.documentElement.clientHeight / 4 + navbar.offsetHeight; //Точка где меняется раздел в навигации 
    for (i = 0; i < length; i++) {
      let elCurrentTop = el[i].getBoundingClientRect().top + document.documentElement.scrollTop,
          elCurrentBottom = el[i].getBoundingClientRect().bottom + document.documentElement.scrollTop;

      if ( window.pageYOffset + breakpoint >= elCurrentTop
           && window.pageYOffset + breakpoint <= elCurrentBottom) {
        onScreen(i);
      } else {
        outOfScreen(i);
      }
    }
  }
}

// Функция определяект позицию в документе и каким цветом менять navigation
function changeColor() {
  if (document.documentElement.clientWidth >= 767) {

    let navPosMiddle = document.documentElement.clientHeight / 2; //Позиция середны части элемента navigation относительно верха окна браузера
    let sixthTop = sixth.getBoundingClientRect().top + document.documentElement.scrollTop; //Расстояние от начала документа до верхней части Contact
    let secondTop = second.getBoundingClientRect().top + document.documentElement.scrollTop; //Расстояние от начала документа до верхней части Contact

    if ((window.pageYOffset + navPosMiddle) > secondTop
        && window.pageYOffset + navPosMiddle < sixthTop){
          colorsChanging("white", "black")
    } else colorsChanging("black", "white")
  }
}

// Функция замены цвета элементов
function colorsChanging (currentCol, newCol) {
  if (navigation.classList.contains(currentCol)) {
    navigation.classList.remove(currentCol);
    navigation.classList.add(newCol);
    lines.forEach( line => {
      line.classList.remove(currentCol);
      line.classList.add(newCol);
    });
  } 
}
