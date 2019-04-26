// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
//Создаем объект Date с текущей датой и временем:
let time = new Date();
let dataTime = {
    day: time.getDay(), //Возвращает день недели (0-6) указанной даты по местному времени(понедельник, итд)
    dayOfMonth: time.getDate(), //Возвращает день месяца (1-31) указанной даты по местному времени.
    month: (time.getMonth() + 1), //month – месяц от 0 до 11.
    year: time.getFullYear(), // год
    hour: time.getHours(), // Возвращает часы (0-23)
    minute: time.getMinutes(),// Возвращает минуты (0-59)
    second: time.getSeconds()// Возвращает секунды (0-59)
}
// console.log(dataTime)

// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами,
//  которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
// проверяем каждую позицию в dataTime, больше или меньше 10
// если меньше 10, то ставим 0 перед числом
//parseInt превращает строку в число
//let X = (условие) ? (выполняет если true) : (иначе выполняет, если false)  
let finalDate = {};
for (let i in dataTime) {
    finalDate[i] = ( (parseInt(dataTime[i]) < 10 ) ? ('0'+dataTime[i]) : (dataTime[i]) );
}
// console.log(finalDate);
let dateString = `'` + finalDate.hour + ':' + finalDate.minute + ':' + 
    finalDate.second + ' '  + finalDate.dayOfMonth + '.' + finalDate.month + 
    '.' + finalDate.year + `'`;
console.log(dateString);

// 3) Напишите функцию, которая выводит на страницу текущий
//  день недели на русском языке (реализацию выбираете сами)
let dayArr = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];
let dayOfTheWeek;
for (let i = 0; i <= (finalDate.day); i++) {
    if (i == finalDate.day) {
        dayOfTheWeek = dayArr[i];
    }
}
console.log(dayOfTheWeek);

////// ещё один вариант через if else
// let dayOfTheWeek;
// if (finalDate.day == 1) {
//     dayOfTheWeek = 'Понедельник';
// } else if (finalDate.day == 2) {
//     dayOfTheWeek = 'Вторник';
// } else if (finalDate.day == 3) {
//     dayOfTheWeek = 'Среда';
// } else if (finalDate.day == 4) {
//     dayOfTheWeek = 'Четверг';
// } else if (finalDate.day == 5) {
//     dayOfTheWeek = 'Пятница';
// } else if (finalDate.day == 6) {
//     dayOfTheWeek = 'Суббота';
// } else {
//     dayOfTheWeek = 'Суббота';
// }

// 4) Напишите функцию, которая выводит на страницу разницу
//  между двумя датами в количестве дней
//-----На странице создайте интерфейс для её отображения: как минимум - 3 input’a:
//  для двух ввода дат и вывода результата.







