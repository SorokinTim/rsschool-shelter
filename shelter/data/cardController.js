// DOM Elements
const cardElement = document.querySelectorAll(".card"),
      popupInformationElement = document.querySelector(".popup__information"),
      popupImageElement = document.querySelector(".popup__image"),
      sliderControllerElements = document.querySelectorAll(".arrow");

// Init cards queue and cards object
let cardsQueue = createQueueCards(3),
    cardsObject = formCardsArray(pets, cardsQueue);

// Initial render
cardElement.forEach((item, index) => renderCard(item, index));


sliderControllerElements[1].addEventListener("click", () => {
  let tempObjItem = cardsObject.splice(0, 1);
  cardsObject.splice(cardsObject.length, 0, tempObjItem[0]);
  cardElement.forEach((item, i) => renderCard(item, i));
});

sliderControllerElements[0].addEventListener("click", () => {
  let tempObjItem = cardsObject.splice(cardsObject.length-1, 1);
  cardsObject.splice(0, 0, tempObjItem[0]);
  cardElement.forEach((item, i) => renderCard(item, i));
});

function renderCard(item, index) {

  // set image and name to card
  item.children[0].attributes.src.nodeValue = cardsObject[index].img;
  item.children[1].innerText = cardsObject[index].name;
  item.children[2].addEventListener('click', () => {

    // get list element with information
    const popupListElement = popupInformationElement.children[3];

    // init information about pet in popup
    popupInformationElement.children[0].innerText = cardsObject[index].name;
    popupInformationElement.children[1].innerText = `${cardsObject[index].type} - ${cardsObject[index].breed}`;
    popupInformationElement.children[2].innerText = cardsObject[index].description;

    // init information about pet in popup (list)
    popupListElement.children[0].children[1].innerText = cardsObject[index].age;
    popupListElement.children[1].children[1].innerText = cardsObject[index].inoculations.join(", ");
    popupListElement.children[2].children[1].innerText = cardsObject[index].diseases.join(", ");
    popupListElement.children[3].children[1].innerText = cardsObject[index].parasites.join(", ");

    // init image in popup
    popupImageElement.children[0].attributes.src.nodeValue = cardsObject[index].img;
  });
}
