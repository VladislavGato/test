//////////////////////  1 - Восстановить порядок в меню, добавить пятый пункт
// возмем и переметим children[2] поставив перед children[1]
let menu = document.querySelector('.menu'); //
menu.insertBefore(menu.children[2], menu.children[1]); 

let li = document.createElement('li');// создали элемент li с тегом li
li.classList.add('menu-item'); // присвоили элементу li класс menu-item
menu.appendChild(li); // добавили в конец родителя(menu) элемент li
li.innerHTML = 'Пятый пункт'; // добавили текст в тег li
//добавим в родителя(menu) элемент li на место
// дочернего(на 0 месте), сдвинув его:
// menu.insertBefore(li, menu.children[0]);


///////////////////// 2 - Заменить картинку заднего фона на другую из папки img
// меняем на путь до нужной картинки, ОТ index.html
// let body = document.getElementsByTagName('body');
let body = document.querySelector('body');
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

///////////////////// 3 - Поменять заголовок, добавить слово "подлинную"
// ( Получится - "Мы продаем только подлинную технику Apple")
// .textContent = 'новый текст' заменяет имеющийся текст новым
let title = document.querySelector('#title');// находим по id
title.textContent = 'Мы продаем только подлинную технику Apple';

////////////////////////4 - Удалить рекламу со страницы
// let column = document.querySelector('.column');
// let adv = document.querySelector('.adv');
// column.removeChild(adv);

//у нас два разных column? нужно удалить второй ( column[1] )
// .querySelector получает только ПЕРВЫЙ элемент, нам не подходит
let column = document.querySelectorAll('.column'), // находим ВСЕ column
    adv = document.querySelector('.adv');
column[1].removeChild(adv); // во втором column удаляем adv


///////////////////////// 5 - Спросить у пользователя отношение к технике apple
// и записать ответ в блок на странице с id "prompt"
let promptAnswer = document.querySelector('#prompt'), //
    question = prompt('Какое у вас отношение к технике Apple?', '');
promptAnswer.innerHTML = question;

