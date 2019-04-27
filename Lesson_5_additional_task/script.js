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
};
// console.log(dataTime);
// let body = document.querySelector('body');
// let divTime = document.createElement('div');
// document.body.appendChild(divTime);
let body = document.querySelector('body');
let divTime = document.getElementsByClassName('time')[0];
// let divTime = document.createElement('div');
// document.body.appendChild(divTime);




// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами,
//  которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
// проверяем каждую позицию в dataTime, больше или меньше 10
// если меньше 10, то ставим 0 перед числом
//parseInt превращает строку в число
//let X = (условие) ? (выполняет если true) : (иначе выполняет, если false)  
function finalDateFunc() {
    let finalDateFunc = {};
    for (let i in dataTime) {
        finalDateFunc[i] = ( (parseInt(dataTime[i]) < 10 ) ? ('0'+dataTime[i]) : (dataTime[i]) );
    }
    return finalDateFunc;
    // console.log(finalDate);
}

let finalDate = finalDateFunc();
console.log(finalDate);
/// совмещаем всё в 1 строку
let dateString = `'` + finalDate.hour + ':' + finalDate.minute + ':' + 
    finalDate.second + '   '  + finalDate.dayOfMonth + '.' + finalDate.month + 
    '.' + finalDate.year + `'`;
// console.log(dateString);
divTime.innerText = dateString;


// 3) Напишите функцию, которая выводит на страницу текущий
//  день недели на русском языке (реализацию выбираете сами)
function whatDay() {
    let dayArr = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    let whatDay;
    for (let i = 0; i <= (finalDate.day); i++) {
        if (i == finalDate.day) {
            whatDay = dayArr[i];
        }
    }
    return whatDay;
}

let dayOfTheWeek = whatDay();
console.log(typeof(dayOfTheWeek) + dayOfTheWeek);

let divDay = document.getElementsByClassName('day')[0];
divDay.innerText = dayOfTheWeek;

// 4) Напишите функцию, которая выводит на страницу разницу
//  между двумя датами в количестве дней
//-----На странице создайте интерфейс для её отображения: как минимум - 3 input’a:
//  для двух ввода дат и вывода результата.


let text3 = document.getElementById('text3');

function checkDate() {

    let inputDate1 = document.getElementById('first_date').value;
    let inputDate2 = document.getElementById('second_date').value;

    let date1 = new Date(inputDate1);
    let date2 = new Date(inputDate2);
  
    if (date1.getTime() > date2.getTime()) {
        let timeDiff = Math.abs(date1.getTime() - date2.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        text3.value = diffDays;    
    } else {
        let timeDiff = Math.abs(date2.getTime() - date1.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        text3.value = diffDays;
    }
}
