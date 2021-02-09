// DOM Elements
const cardElement = document.querySelectorAll(".card"),
      popupInformationElement = document.querySelector(".popup__information"),
      popupImageElement = document.querySelector(".popup__image"),
      paginationControllerElements = document.querySelectorAll(".breadcrumbs__item");

// Init index of pagination
let paginationIndex = 0;

// Init cards queue and cards object
let cardsQueue = createQueueCardsForPagination(),
    cardsObject = formCardsArray(pets, cardsQueue[paginationIndex]);


// Initial render
cardElement.forEach((item, index) => renderCard(item, index));

function renderCard(item, index) {

  // set image and name to card
  item.children[0].children[0].attributes.src.nodeValue = cardsObject[index].img;
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

// prev page event
paginationControllerElements[0].addEventListener('click', () => {
  if (paginationIndex > 0) {
    paginationIndex = 0;
    cardsObject = formCardsArray(pets, cardsQueue[paginationIndex]);
    cardElement.forEach((item, i) => renderCard(item, i));
    paginationControllerElements[2].innerText = paginationIndex + 1;
    if(paginationIndex == 0) {
      updateControllersState(paginationControllerElements[0], false);
      updateControllersState(paginationControllerElements[1], false);
      updateControllersState(paginationControllerElements[3], true);
      updateControllersState(paginationControllerElements[4], true);
    } else {
      updateControllersState(paginationControllerElements[0], true);
      updateControllersState(paginationControllerElements[1], true);
      updateControllersState(paginationControllerElements[3], true);
      updateControllersState(paginationControllerElements[4], true);
    }
  }
})
paginationControllerElements[1].addEventListener('click', () => {
  if (paginationIndex > 0) {
    cardsObject = formCardsArray(pets, cardsQueue[--paginationIndex]);
    cardElement.forEach((item, i) => renderCard(item, i));
    paginationControllerElements[2].innerText = paginationIndex + 1;
    if(paginationIndex == 0) {
      updateControllersState(paginationControllerElements[1], false);
      updateControllersState(paginationControllerElements[0], false);
    } else {
      updateControllersState(paginationControllerElements[1], true);
      updateControllersState(paginationControllerElements[3], true);
      updateControllersState(paginationControllerElements[0], true);
      updateControllersState(paginationControllerElements[4], true);
    }
  }
});

// next page event
paginationControllerElements[3].addEventListener('click', () => {
  if (paginationIndex < cardsQueue.length - 1) {
    cardsObject = formCardsArray(pets, cardsQueue[++paginationIndex]);
    cardElement.forEach((item, i) => renderCard(item, i));
    paginationControllerElements[2].innerText = paginationIndex + 1;
    if(paginationIndex == cardsQueue.length - 1) {
      updateControllersState(paginationControllerElements[3], false);
      updateControllersState(paginationControllerElements[4], false);
    } else {
      updateControllersState(paginationControllerElements[1], true);
      updateControllersState(paginationControllerElements[3], true);
      updateControllersState(paginationControllerElements[0], true);
      updateControllersState(paginationControllerElements[4], true);
    }
  }
});
paginationControllerElements[4].addEventListener('click', () => {
  if (paginationIndex < cardsQueue.length - 1) {
    paginationIndex = cardsQueue.length - 1;
    cardsObject = formCardsArray(pets, cardsQueue[paginationIndex]);
    cardElement.forEach((item, i) => renderCard(item, i));
    paginationControllerElements[2].innerText = paginationIndex + 1;
    if(paginationIndex == cardsQueue.length - 1) {
      updateControllersState(paginationControllerElements[0], true);
      updateControllersState(paginationControllerElements[1], true);
      updateControllersState(paginationControllerElements[3], false);
      updateControllersState(paginationControllerElements[4], false);
    } else {
      updateControllersState(paginationControllerElements[0], true);
      updateControllersState(paginationControllerElements[1], true);
      updateControllersState(paginationControllerElements[3], true);
      updateControllersState(paginationControllerElements[4], true);
    }
  }
})

function updateControllersState(element, isEnabled = true) {
  if (isEnabled) {
    element.classList.remove('breadcrumbs__item_disable');
    element.classList.add('breadcrumbs__item_enable');
  } else {
    element.classList.remove('breadcrumbs__item_enable');
    element.classList.add('breadcrumbs__item_disable');
  }
}

function createQueueCardsForPagination() {
  let result = [];

  for(let i = 0; i < 6; i++) {
    result.push([]);
    for(let j = 0; j < 8;) {
      let temp = Math.floor(Math.random() * 8) + 1;
      if(result[i].includes(temp)) {
        temp = Math.floor(Math.random() * 8) + 1;
      } else {
        result[i].push(temp);
        j++;
      }
    }
  }

  return result;
}
