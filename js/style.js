// бургер меню

document.querySelector(".header__burger").addEventListener("click", function () {
    document.querySelector(".burger").classList.add("active");
});
document.querySelector(".burger__close").addEventListener("click", function () {
    document.querySelector(".burger").classList.remove("active");
});


// переключение темы

const theme = document.querySelector('.header__theme');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');


theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    sun.classList.toggle('active');
    moon.classList.toggle('active');
});


// кнопка вверх

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    var scrollToTopButtons = document.getElementsByClassName("scrolltopbutton");
    for (var i = 0; i < scrollToTopButtons.length; i++) {
        var scrollToTopButton = scrollToTopButtons[i];
        if (isPageFullyScrolled()) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    }
}

var scrollToTopButtons = document.getElementsByClassName("scrolltopbutton");
for (var i = 0; i < scrollToTopButtons.length; i++) {
    scrollToTopButtons[i].addEventListener('click', scrollToTop);
}

function scrollToTop() {
    var scrollDuration = 300;
    var scrollStep = -window.scrollY / (scrollDuration / 15);


    document.documentElement.style.scrollBehavior = 'auto';
    var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollTo(0, window.scrollY + scrollStep);
        } else {
            clearInterval(scrollInterval);
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    }, 15);
}

function isPageFullyScrolled() {
    var content = document.querySelector('.main');
    var contentHeight = content.offsetHeight;
    var viewportHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    return (contentHeight - viewportHeight) <= scrollPosition;
}

// форма покупки

const buyButtons = document.querySelectorAll('.buy-button');
const popupOverlay = document.querySelector('.popup-overlay');
const popupForm = document.querySelector('.popup-form');
const closeButton = document.querySelector('.close-button');
const purchaseForm = document.querySelector('.purchase-form');
const body = document.querySelector('body');

buyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        popupOverlay.classList.add('is-open');
        popupForm.classList.add('is-open');
        body.classList.add('is-locked');
    });

});

closeButton.addEventListener('click', function () {
    popupOverlay.classList.remove('is-open');
    popupForm.classList.remove('is-open');
    body.classList.remove('is-locked');
});

purchaseForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Спасибо за покупку!'); 
    popupOverlay.classList.remove('is-open'); 
    popupForm.classList.remove('is-open'); 
    body.classList.remove('is-locked'); 
});

// Функция для форматирования даты

function getRandomDate() {
    var startDate = new Date(2022, 0, 1); 
    var endDate = new Date(); 
    var randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().slice(0, 10); 
}

function getDayInfo(dateString) {
    var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    var date = new Date(dateString);
    var weekNumber = Math.ceil(date.getDate() / 7);

    return days[date.getDay()] + ", " + weekNumber + " неделя " + months[date.getMonth()] + " " + date.getFullYear() + " года";
}

var dateElements = document.getElementsByClassName("date");
for (var i = 0; i < dateElements.length; i++) {
    var randomDate = getRandomDate();
    dateElements[i].textContent = getDayInfo(randomDate);
}