// ===== Бургер-меню =====
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
burger.addEventListener('click', function () {
  menu.classList.toggle('open');
  var isOpen = menu.classList.contains('open');
  burger.setAttribute('aria-expanded', isOpen);
  burger.textContent = isOpen ? '✕' : '☰';
});
// после клика по ссылке меню закрывается
var links = menu.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    menu.classList.remove('open');
    burger.textContent = '☰';
    burger.setAttribute('aria-expanded', 'false');
  });
}
// ===== Светлая / тёмная тема =====
var themeBtn = document.getElementById('theme');
function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add('light');
    themeBtn.textContent = '☾';
  } else {
    document.body.classList.remove('light');
    themeBtn.textContent = '☀';
  }
  try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch (e) {}
}
// при загрузке берём тему, которую выбрали в прошлый раз
var saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
setTheme(saved === 'light');
themeBtn.addEventListener('click', function () {
  setTheme(!document.body.classList.contains('light'));
});
// ===== Кнопка Show All в проектах =====
document.getElementById('more').addEventListener('click', function () {
  var open = this.getAttribute('aria-expanded') === 'true';
  var cards = document.querySelectorAll('.pc.hid, .pc.shown');
  for (var j = 0; j < cards.length; j++) {
    cards[j].classList.toggle('hid', open);
    cards[j].classList.toggle('shown', !open);
  }
  this.setAttribute('aria-expanded', !open);
  this.textContent = open ? 'Show All →' : 'Show Less ↑';
});
// ===== Форма =====
document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('msg').textContent = 'The form is not connected to email yet. Connect a service such as Formspree to receive messages.';
});