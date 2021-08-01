const popup = document.querySelector('.popup');
const cardLabBtn = document.querySelectorAll('.lab__card-button');
const headerMenuBtn = document.querySelector('.header-menu__button');
const headerMenuCloseBtn = document.querySelector('.header-menu__close-button');
const headerMenu = document.querySelector('.header-menu__menu');

//Функция добавления класса для открытия
function openPopup(element) {
  element.classList.add('popup_opened');
}

//Функция удаления класса для закрытия
function closePopup(element) {
  element.classList.remove('popup_opened');
}

//Открытие и закрытие Гамбургера
  headerMenuBtn.addEventListener('click', function () {
    headerMenu.classList.add('header-menu__menu_opened');
})
  headerMenuCloseBtn.addEventListener('click', function () {
    headerMenu.classList.remove('header-menu__menu_opened');
  })

// Открытие и закрытие Popup
  cardLabBtn.forEach(button => button.addEventListener("click", function() {
    openPopup(popup);
  }));

  document.querySelector('.popup-lab__close').addEventListener('click', function () {
    closePopup(popup);
  })
  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  })
  /*
  Смена карточек в блоке educatin
*/

const cardGraduateSchool = {
  title: "Образовательные программы аспирантуры в области МО и КТ",
  liList: ["аспирантуры1", "аспирантуры2", "аспирантуры3"],
  photoUrl: "./images/graduate-school.jpg",
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
  photoUrl: "./images/magistr-students.jpg",
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
  const button = document.querySelectorAll(".button-group__button");
  const target = e.target;
  for (let i = 0; i < button.length; i++) {
    if (target.classList.contains("button-group__button")) {
      button[i].classList.remove("button-group__button__active");
      target.classList.add("button-group__button__active");
    }
  }
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
  photo.src = cardObj.photoUrl;
}

function clearUl(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


/*
  Отправка формы в блоке callback
*/

const formCallBack = document.querySelector('.callback__about');
const inputFirstname= formCallBack.querySelector('.callback__firstname');
const inputSurname = formCallBack.querySelector('.callback__surname');
const textareaMessage= formCallBack.querySelector('.callback__message');
const inputPhone= formCallBack.querySelector('.callback__phone');
const inputMail= formCallBack.querySelector('.callback__mail');
const buttonSendForm = formCallBack.querySelector('.callback__submit');

buttonSendForm.addEventListener('click', function(event) {
  event.preventDefault();
  if(requestFields(inputFirstname.value, inputSurname.value, textareaMessage.value, inputPhone.value, inputMail.value)){
    const formObj = {
      'firstName' : inputFirstname.value,
      'surname' : inputSurname.value,
      'message' : textareaMessage.value,
      'phone' : inputPhone.value,
      "email" : inputMail.value,
    }
    console.log(formObj)
    return formObj;
  }
})


function requestFields(...arrayFields) {
  result = arrayFields.every(element => {
    if(element !== '' && element !== undefined) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
