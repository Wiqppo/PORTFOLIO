// ===== Бургер-меню =====
 
// ищем на странице кнопку с id="burger" и кладём её в переменную burger
var burger = document.getElementById('burger');
// ищем меню с id="menu" и кладём его в переменную menu
var menu = document.getElementById('menu');
 
// вешаем на бургер "слушатель": когда на кнопку нажмут (click), выполнится функция
burger.addEventListener('click', function () {
  // если у меню нет класса open, добавляем его; если есть, убираем (toggle = переключить)
  menu.classList.toggle('open');
  // проверяем, есть ли у меню класс open, и кладём ответ (true или false) в переменную isOpen
  var isOpen = menu.classList.contains('open');
  // записываем в атрибут aria-expanded, открыто ли меню (для программ чтения с экрана)
  burger.setAttribute('aria-expanded', isOpen);
  // если меню открыто, на кнопке показываем крестик, иначе три полоски (тернарный оператор)
  burger.textContent = isOpen ? '✕' : '☰';
// конец функции и конец addEventListener
});
 
// после клика по ссылке меню закрывается
 
// находим все ссылки (теги a) внутри меню, получаем список
var links = menu.querySelectorAll('a');
// цикл for: i начинается с 0, идём, пока i меньше количества ссылок, после каждого круга i увеличивается на 1
for (var i = 0; i < links.length; i++) {
  // берём ссылку под номером i и вешаем на неё слушатель клика
  links[i].addEventListener('click', function () {
    // убираем у меню класс open, поэтому меню прячется
    menu.classList.remove('open');
    // возвращаем на кнопку значок три полоски
    burger.textContent = '☰';
    // сообщаем, что меню теперь закрыто (значение 'false' записано как текст)
    burger.setAttribute('aria-expanded', 'false');
  // конец функции и конец addEventListener
  });
// конец цикла for
}
 
// ===== Светлая / тёмная тема =====
 
// находим кнопку смены темы с id="theme"
var themeBtn = document.getElementById('theme');
 
// объявляем функцию setTheme; в параметре isLight придёт true (светлая тема) или false (тёмная)
function setTheme(isLight) {
  // если нужна светлая тема
  if (isLight) {
    // добавляем к body класс light, и CSS перекрашивает сайт в светлые цвета
    document.body.classList.add('light');
    // меняем значок на кнопке на луну
    themeBtn.textContent = '☾';
  // иначе, то есть нужна тёмная тема
  } else {
    // убираем у body класс light, и сайт снова тёмный
    document.body.classList.remove('light');
    // возвращаем на кнопку значок солнца
    themeBtn.textContent = '☀';
  // конец блока if/else
  }
  // пробуем сохранить выбранную тему в память браузера (localStorage); если будет ошибка, catch её поймает и сайт не сломается
  try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch (e) {}
// конец функции setTheme
}
 
// при загрузке берём тему, которую выбрали в прошлый раз
 
// создаём переменную saved, пока в ней ничего нет (null)
var saved = null;
// пробуем прочитать из памяти браузера сохранённую тему; при ошибке просто идём дальше
try { saved = localStorage.getItem('theme'); } catch (e) {}
// вызываем setTheme: если сохранена 'light', передаём true (светлая), иначе false (тёмная)
setTheme(saved === 'light');
 
// вешаем на кнопку темы слушатель клика
themeBtn.addEventListener('click', function () {
  // смотрим, есть ли у body класс light; знак ! переворачивает ответ, поэтому тема меняется на противоположную
  setTheme(!document.body.classList.contains('light'));
// конец функции и конец addEventListener
});
 
// ===== Кнопка Show All в проектах =====
 
// находим кнопку с id="more" и сразу вешаем на неё слушатель клика
document.getElementById('more').addEventListener('click', function () {
  // this это кнопка, на которую нажали; читаем её aria-expanded и сравниваем с текстом 'true'; open = показаны ли сейчас скрытые проекты
  var open = this.getAttribute('aria-expanded') === 'true';
  // находим карточки проектов, которые скрыты (hid) или были показаны этой кнопкой (shown)
  var cards = document.querySelectorAll('.pc.hid, .pc.shown');
  // цикл по найденным карточкам: j начинается с 0 и растёт на 1, пока не дойдёт до конца списка
  for (var j = 0; j < cards.length; j++) {
    // класс hid добавляется, если open равно true (проекты прячем), и убирается, если false (показываем)
    cards[j].classList.toggle('hid', open);
    // класс shown делает наоборот: добавляется, когда проекты показываем
    cards[j].classList.toggle('shown', !open);
  // конец цикла for
  }
  // записываем в кнопку новое состояние: знак ! даёт противоположное значение, то есть было показано, станет скрыто, и наоборот
  this.setAttribute('aria-expanded', !open);
  // меняем надпись на кнопке: если проекты были показаны, пишем Show All, иначе Show Less
  this.textContent = open ? 'Show All →' : 'Show Less ↑';
// конец функции и конец addEventListener
});
 
// ===== Форма =====
 
// находим форму с id="f" и вешаем слушатель на событие submit (когда форму отправляют)
document.getElementById('f').addEventListener('submit', function (e) {
  // отменяем стандартное поведение формы, чтобы страница не перезагружалась (e это объект события)
  e.preventDefault();
  // находим абзац с id="msg" и пишем в него текст-сообщение, что форма пока не подключена к почте
  document.getElementById('msg').textContent = 'The form is not connected to email yet. Connect a service such as Formspree to receive messages.';
// конец функции и конец addEventListener
});
 
