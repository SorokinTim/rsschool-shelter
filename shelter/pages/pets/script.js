const menuItemsOutput = document.querySelectorAll(".header__menu-item"),
      burgerIconElement = document.querySelector(".header__burger"),
      burgerIconShowedElement = document.querySelector(".burger__icon"),
      shadowElement = document.querySelector(".shadow"),
      burgerElement = document.querySelector(".burger"),
      activeMenuElement = document.querySelector(".burger__item_active")
      cardButtonElements = document.querySelectorAll(".card__outline-btn"),
      popupElement = document.querySelector(".popup"),
      popupCloserElement = document.querySelector(".popup__cancel");


// init project
initialState();

function initialState() {
  // disable menu items
  menuItemsOutput[2].style.cursor = 'not-allowed';
  menuItemsOutput[2].firstElementChild.className = "disabled";
  menuItemsOutput[3].style.cursor = 'not-allowed';
  menuItemsOutput[3].firstElementChild.className = "disabled";

}

burgerIconElement.addEventListener('click', () => {
  shadowElement.classList.add("shadow_active");
  burgerElement.classList.add("burger_active");
  burgerElement.style.transform = "translate(0, 0)";
  burgerIconShowedElement.style.transform = "rotate(90deg)";
  burgerIconElement.style.transform = "rotate(90deg)";
});

burgerIconShowedElement.addEventListener('click', () => {
  burgerElement.style.transform = "translate(320px, 0)";
  setTimeout(() => shadowElement.classList.remove("shadow_active"), 600);
  burgerIconShowedElement.style.transform = "rotate(0deg)";
  burgerIconElement.style.transform = "rotate(0deg)";
});

shadowElement.addEventListener('click', () => {
  burgerElement.style.transform = "translate(320px, 0)";
  setTimeout(() => shadowElement.classList.remove("shadow_active"), 600);
  burgerIconShowedElement.style.transform = "rotate(0deg)";
  burgerIconElement.style.transform = "rotate(0deg)";
  popupElement.style.visibility = "hidden";
})

activeMenuElement.addEventListener('click', () => {
  burgerElement.style.transform = "translate(320px, 0)";
  setTimeout(() => shadowElement.classList.remove("shadow_active"), 600);
  burgerIconShowedElement.style.transform = "rotate(0deg)";
  burgerIconElement.style.transform = "rotate(0deg)";
})

cardButtonElements.forEach(elem => {
  elem.addEventListener('click', () => {
    popupElement.style.visibility = "visible";
    shadowElement.classList.add("shadow_active");
  });
});

popupCloserElement.addEventListener('click', () => {
  popupElement.style.visibility = "hidden";
  shadowElement.classList.remove("shadow_active");
})
