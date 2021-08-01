const popup = document.querySelector(".popup");
const cardLabBtn = document.querySelectorAll(".lab__card-button");
const headerMenuBtn = document.querySelector(".header-menu__button");
const headerMenuCloseBtn = document.querySelector(".header-menu__close-button");
const headerMenu = document.querySelector(".header-menu__menu");

//Функция добавления класса для открытия
function openPopup(element) {
  element.classList.add("popup_opened");
}

//Функция удаления класса для закрытия
function closePopup(element) {
  element.classList.remove("popup_opened");
}

//Открытие и закрытие Гамбургера
headerMenuBtn.addEventListener("click", function () {
  headerMenu.classList.add("header-menu__menu_opened");
});
headerMenuCloseBtn.addEventListener("click", function () {
  headerMenu.classList.remove("header-menu__menu_opened");
});

// Открытие и закрытие Popup
cardLabBtn.forEach((button) =>
  button.addEventListener("click", function () {
    openPopup(popup);
  })
);

document
  .querySelector(".popup-lab__close")
  .addEventListener("click", function () {
    closePopup(popup);
  });
popup.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
});
/*
  Смена карточек в блоке educatin
*/

const cardGraduateSchool = {
  title: "Образовательные программы аспирантуры в области МО и КТ",
  liList: ["аспирантуры1", "аспирантуры2", "аспирантуры3"],
  photolinkImg: "./images/graduate-school.jpg",
};

const cardMagistrStudents = {
  title: "Образовательные программы магистратуры в области МО и КТ",
  liList: [
    "Прикладные технологии искусственного интеллекта;",
    "Машинное обучение и искусственный интеллект;",
    "Биометрические информационные системы;",
    "Речевые информационные системы;",
    "Когнитивные вычисления и квантовый интеллект;",
    "Большие данные и экстренные вычисления;",
    "Семантические системы и инженерия знаний;",
    "Технологии разработки компьютерных игр",
  ],
  photolinkImg: "./images/magistr-students.jpg",
};

const card = document.querySelector(".card");
const title = card.querySelector(".card__title");
const list = card.querySelector(".card__list");
const photo = card.querySelector(".card__photo");
const buttonGroup = document.querySelector(".button-group");
const buttonGraduateSchool = document.querySelector(".button__graduate-school");
const buttonMagistrStudents = document.querySelector(
  ".button__magistr-students"
);

buttonGroup.addEventListener("click", function (e) {
  setActiveElement(e, "button-group__button", "button-group__button__active");
});

buttonGraduateSchool.addEventListener("click", function () {
  handlerCard(cardGraduateSchool);
});

buttonMagistrStudents.addEventListener("click", function () {
  handlerCard(cardMagistrStudents);
});

function handlerCard(cardObj) {
  title.textContent = cardObj.title;
  clearUl(list);
  for (let i = 0; i < cardObj.liList.length; i++) {
    const li = document.createElement("li");
    li.innerText = cardObj.liList[i];
    li.setAttribute("class", "card__item");
    list.appendChild(li);
  }
  photo.src = cardObj.photolinkImg;
}

function clearUl(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/*
  Отправка формы в блоке contact
*/

const formContact = document.querySelector(".contact__about");
const inputFirstname = formContact.querySelector(".contact__firstname");
const inputSurname = formContact.querySelector(".contact__surname");
const textareaMessage = formContact.querySelector(".contact__message");
const inputPhone = formContact.querySelector(".contact__phone");
const inputMail = formContact.querySelector(".contact__mail");
const buttonSendForm = formContact.querySelector(".contact__submit");

buttonSendForm.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    requestFields(
      inputFirstname.value,
      inputSurname.value,
      textareaMessage.value,
      inputPhone.value,
      inputMail.value
    )
  ) {
    const formObj = {
      firstName: inputFirstname.value,
      surname: inputSurname.value,
      message: textareaMessage.value,
      phone: inputPhone.value,
      email: inputMail.value,
    };
    clearForm(
      inputFirstname,
      inputSurname,
      textareaMessage,
      inputPhone,
      inputMail
    );
    console.log(formObj);
    return formObj;
  }
});

function requestFields(...arrayFields) {
  result = arrayFields.every((element) => {
    if (element !== "" && element !== undefined) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}

function clearForm(...elements) {
  elements.forEach((element) => {
    element.value = "";
  });
}

/*
  Фильтрация карточек
*/

const cardContainer = document.querySelector(".projects__cards");
const btnGoz = document.querySelector(".projects__item__type_goz");
const btnSpec = document.querySelector(".projects__item__type_spec");
const btnDev = document.querySelector(".projects__item__type_dev");
const btnAll = document.querySelector(".projects__item__type_all");

const initialCards = [
  {
    linkImg: "images/gazprom-logo.svg",
    description:
      "(Гос) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "goz",
    linkBackground: "url(images/sber-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(Спец) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "spec",
    linkBackground: "url(images/gazprom-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(Спец) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "spec",
    linkBackground: "url(images/sber-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(Гос) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "goz",
    linkBackground: "url(images/sber-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(In dev) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "dev",
    linkBackground: "url(images/gazprom-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(In dev) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "dev",
    linkBackground: "url(images/gazprom-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(In dev) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "dev",
    linkBackground: "url(images/gazprom-background.jpg)",
  },
  {
    linkImg: "images/sber-logo.svg",
    description:
      "(In dev) Направление включает в\u00A0себя исследования и\u00A0разработки технологий МО\u00A0и\u00A0КТ.",
    type: "dev",
    linkBackground: "url(images/gazprom-background.jpg)",
  },
];

function createCard(cardData) {
  const cardTemplate = document.querySelector("#project-card").content;
  const cardElement = cardTemplate
    .querySelector(".projects__cards-item")
    .cloneNode(true);
  cardElement.setAttribute(
    "style",
    `background-image: ${cardData.linkBackground}`
  );
  cardElement.querySelector(".projects-card__description").textContent =
    cardData.description;
  cardElement.querySelector(".projects-card__logo").src = cardData.linkImg;
  cardElement.querySelector(".projects-card__logo").alt = cardData.type;
  return cardElement;
}

function addCard(cardElement, cardContainer) {
  const card = createCard(cardElement);
  cardContainer.prepend(card);
}

initialCards.forEach((item) => {
  addCard(item, cardContainer);
});

function initilTypeCards(type, cardList) {
  cardList.forEach(function (el) {
    if (el.type === type) {
      addCard(el, cardContainer);
    }
    if (type === "all") {
      addCard(el, cardContainer);
    }
  });
}

btnGoz.addEventListener("click", function (e) {
  clearUl(cardContainer);
  setActiveElement(e, "projects__item", "projects__item_active");
  initilTypeCards("goz", initialCards);
});

btnSpec.addEventListener("click", function (e) {
  clearUl(cardContainer);
  setActiveElement(e, "projects__item", "projects__item_active");
  initilTypeCards("spec", initialCards);
});

btnAll.addEventListener("click", function (e) {
  clearUl(cardContainer);
  setActiveElement(e, "projects__item", "projects__item_active");
  initilTypeCards("all", initialCards);
});

btnDev.addEventListener("click", function (e) {
  clearUl(cardContainer);
  setActiveElement(e, "projects__item", "projects__item_active");
  initilTypeCards("dev", initialCards);
});

function setActiveElement(e, elemntGroup, nameActivClass) {
  const items = document.querySelectorAll(`.${elemntGroup}`);
  const target = e.target;
  for (let i = 0; i < items.length; i++) {
    if (target.classList.contains(elemntGroup)) {
      items[i].classList.remove(nameActivClass);
      target.classList.add(nameActivClass);
    }
  }
}
