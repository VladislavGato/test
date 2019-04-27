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
let body = document.querySelector('body');
let divTime = document.createElement('div');
document.body.appendChild(divTime);

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
};

let finalDate = finalDateFunc();
// console.log(finalDate);
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
};
let dayOfTheWeek = whatDay();
// console.log(dayOfTheWeek);

let divDay = document.createElement('div');
document.body.appendChild(divDay);
divDay.innerText = dayOfTheWeek;

// 4) Напишите функцию, которая выводит на страницу разницу
//  между двумя датами в количестве дней
//-----На странице создайте интерфейс для её отображения: как минимум - 3 input’a:
//  для двух ввода дат и вывода результата.
let timeData = {};

let divDate = document.createElement('div');
document.body.appendChild(divDate);

input11.readonly = true;
input11.value = dsfsdvs

let divInput1 = document.createElement('div');
divDate.appendChild(divInput1);
divInput1.innerText = '1 дата: ';
let input1 = document.createElement('input');
divInput1.appendChild(input1);

input1.addEventListener('input', function() {
    let items = input1.value;
    console.log(typeof(items) + ' ' + items);
	// timeData = items;
    // timeData = new Date(Date.parse(items)).getFullYear();
    timeData = new Date(Date.parse(items));

    console.log(timeData);
    
    // yearValue.value = new Date(Date.parse(time)).getFullYear();
    // input3.value = new Date(Date.parse(items)).setTime(milliseconds);
    input3.value = timeData;
    let MS_PER_SEC = 1000,
    SEC_PER_HR = 60 * 60,
    HR_PER_DAY = 24,
    MS_PER_DAY = MS_PER_SEC * SEC_PER_HR * HR_PER_DAY;
    let qwer = Math.round(timeData / MS_PER_DAY);
    console.log(qwer  );

});
// yearValue.value = new Date(Date.parse(time)).getFullYear();

let divInput2 = document.createElement('div');
divDate.appendChild(divInput2);
divInput2.innerText = '2 дата: ';
let input2 = document.createElement('input');
divInput2.appendChild(input2);
// setTime(milliseconds)






var theBigDay1 = new Date('July 1, 2015');
var theBigDay2 = new Date('July 1, 2016');

var sameAsBigDay1 = new Date();
var sameAsBigDay2 = new Date();
// sameAsBigDay.setTime(theBigDay.getTime());
sameAsBigDay1.setTime(theBigDay1.getTime());
sameAsBigDay2.setTime(theBigDay2.getTime());

console.log(sameAsBigDay1);
console.log(sameAsBigDay2);



let MS_PER_SEC = 1000,
    SEC_PER_HR = 60 * 60,
    HR_PER_DAY = 24,
    MS_PER_DAY = MS_PER_SEC * SEC_PER_HR * HR_PER_DAY;
let qwer = Math.round((sameAsBigDay2.getTime() - sameAsBigDay1.getTime()) / MS_PER_DAY);
console.log(qwer  );

// startBtn.addEventListener('click', function() {
// 	appData.startValue = true;
// 	time = prompt("Введите дату в формате YYYY-MM-DD", '');
// 	money = +prompt("Ваш бюджет на месяц?", '');

// 	while(isNaN(money) || money == "" || money == null ) {
// 		money = +prompt("Ваш бюджет на месяц?", '');
// 	}
// 	appData.budget = money;
// 	appData.timeData = time;
// 	budgetValue.textContent = money.toFixed();
// 	yearValue.value = new Date(Date.parse(time)).getFullYear();
// 	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
// 	dayValue.value = new Date(Date.parse(time)).getDate();
// });




let divInput3 = document.createElement('div');
divDate.appendChild(divInput3);
divInput3.innerText = '3 дата: ';
let input3 = document.createElement('input');
divInput3.appendChild(input3);




// appData.timeData = time;

// yearValue.value = new Date(Date.parse(time)).getFullYear();
// monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
// dayValue.value = new Date(Date.parse(time)).getDate();








// let div3 = div.cloneNode(false);
// let div4 = div.cloneNode(false);

// let div22 = document.createElement('div');
// document.body.appendChild(div22);

// let input = document.createElement('input');
// body.appendChild(div3);

// div3.appendChild(div4);
// div4.appendChild(input);


// div3.appendChild(div4);
// div4.appendChild(input);

// div3.appendChild(input);
// div3.appendChild(input);






// var theBigDay1 = new Date('July 1, 2015');
// var theBigDay2 = new Date('July 1, 2016');
// var sameAsBigDay1 = new Date();
// var sameAsBigDay2 = new Date();
// // sameAsBigDay.setTime(theBigDay.getTime());
// sameAsBigDay1.setTime(theBigDay1.getTime());
// sameAsBigDay2.setTime(theBigDay2.getTime());
// console.log(sameAsBigDay1);
// console.log(sameAsBigDay2);

// let MS_PER_SEC = 1000,
//     SEC_PER_HR = 60 * 60,
//     HR_PER_DAY = 24,
//     MS_PER_DAY = MS_PER_SEC * SEC_PER_HR * HR_PER_DAY;
// let qwer = Math.round((sameAsBigDay2.getTime() - sameAsBigDay1.getTime()) / MS_PER_DAY);
// console.log(qwer  );