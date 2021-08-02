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
  Отправка формы в блоке contact
*/

const formContact = document.querySelector('.contact__about');
const inputFirstname= formContact.querySelector('.contact__firstname');
const inputSurname = formContact.querySelector('.contact__surname');
const textareaMessage= formContact.querySelector('.contact__message');
const inputPhone= formContact.querySelector('.contact__phone');
const inputMail= formContact.querySelector('.contact__mail');
const buttonSendForm = formContact.querySelector('.contact__submit');

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
    clearForm(inputFirstname, inputSurname, textareaMessage, inputPhone, inputMail)
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

function clearForm(...elements) {
  elements.forEach(element => {
    element.value = '';
  });
}

/* team*/

function appendCard(container, cardElement) {
  container.append(cardElement)
}

const teamCardItem = [
  {
    img: "./images/Team/1.png",
    person: "Бобцов Алексей Алексеевич",
    work: "Директор, профессор, ДТН",
  },
  {
    img: "./images/Team/2.png",
    person: "Буханоский Александр Валерьевич",
    work: "Директор, руководитель, ДТН",
  },
  {
    img: "./images/Team/3.png",
    person: "Муромцев Дмитрий Ильич",
    work: "Руководитель, доцент, КТН",
  },
  {
    img: "./images/Team/4.png",
    person: "Матвеев Юрий Николаевич",
    work: "Руководитель, профессор, ДТН",
  },
  {
    img: "./images/Team/5.png",
    person: "Шалыто Анатолий Абрамович",
    work: "Профессор, ДТН",
  },
  {
    img: "./images/Team/6.png",
    person: "Колюбин Сергей Алексеевич",
    work: "Начальник, профессор, ДТН",
  },
  {
    img: "./images/Team/7.png",
    person: "Пыркин Антон Александрович",
    work: "Декан, профессор, ДТН",
  },
];

const teamWrapper = document.querySelector('.team__cards')

function addTeamCard(img, person, work) {
  const cardTemplate = document.querySelector('#person').content
  const cardElement = cardTemplate.querySelector('.team__card').cloneNode(true)
    cardElement.querySelector('.team__card-img').setAttribute('src', img)
    cardElement.querySelector('.team__card-img').setAttribute('alt', person)
    cardElement.querySelector('.team__card-title').textContent = person
    cardElement.querySelector('.team__card-subtitle').textContent = work

    return cardElement
}

/*publication*/

const newsContainer = document.querySelector('.news__container')
const newsCardItem = [
  {
    img: "./images/img-news/news-1.jpg",
    title: "Peregreen–modular database for efficient storage of historical tim…",
    subtitle: "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B…",
    text: "The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed of data processing operations execution but als…",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    img: "./images/img-news/news-2.jpg",
    title: "Intelligent sightseeing in immensely manifold cities: Case …",
    subtitle: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    text: "In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, distances of place from others in r…",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    img: "./images/img-news/news-3.jpg",
    title: "User Profiles Matching for Different Social Networks Based …",
    subtitle: "Timur Sokhin, Nikolay Butakov, Denis Nasonov",
    text: "It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk assessm…",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    img: "./images/img-news/news-4.jpg",
    title: "Orienteering Problem with Functional Profits for multi-sourc…",
    subtitle: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem with Functional Profits (OPFP), where the score of …",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    img: "./images/img-news/news-5.jpg",
    title: "Intellectual Execution Scheme of Iterative Computational Models …",
    subtitle: "Mikhail Melnik, Denis A Nasonov, Alexey Liniov",
    text: "In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also becomes more complex. This leads more and more often to the need to use high-performance computational clusters, such as supercomputers. Created m…",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
  {
    img: "./images/img-news/news-6.jpg",
    title: "Urban events prediction via convolutional neural networks a…",
    subtitle: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: "In today’s world, it is crucial to be proactive and be prepared for events which are not happening yet. Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods to a brand new area - event prediction models...",
    link: "https://scholar.google.ru/citations?hl=ru&user=r5WYVCIAAAAJ&view_op=list_works&sortby=pubdate"
  },
];

function addNews(img, title, subtitle, text, link) {
  const cardTemplate = document.querySelector('#news').content
  const cardElement = cardTemplate.querySelector('.news__item').cloneNode(true)
    cardElement.querySelector('.news__pic').setAttribute('src', img)
    cardElement.querySelector('.news__pic').setAttribute('alt', title)
    cardElement.querySelector('.news__title').textContent = title
    cardElement.querySelector('.news__subtitle').textContent = subtitle
    cardElement.querySelector('.news__announcement').textContent = text
    cardElement.querySelector('.news__link').setAttribute('href', link)

    const shareButton = cardElement.querySelector('.news__share-button')
    const shareContainer = cardElement.querySelector('.news__share-container')
    shareButton.addEventListener('click', () => {
      shareContainer.classList.toggle('news__share-container_opened')
  })

    return cardElement
}

function createCards() {

  teamCardItem.forEach(element => {
    appendCard(teamWrapper, addTeamCard(element.img, element.person, element.work))
    })

  newsCardItem.forEach(element => {
    appendCard(newsContainer, addNews(element.img, element.title, element.subtitle, element.text, element.link))
    })
  }

document.addEventListener('DOMContentLoaded', createCards() )
