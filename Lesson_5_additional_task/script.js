// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами,
//  которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)

// 3) Напишите функцию, которая выводит на страницу текущий
//  день недели на русском языке (реализацию выбираете сами)

// 4) Напишите функцию, которая выводит на страницу разницу
//  между двумя датами в количестве дней

//На странице создайте интерфейс для её отображения: как минимум - 3 input’a:
//  для двух ввода дат и вывода результата.

// let a = getMonth();
// console.log(a);

var now = new Date();
console.log(now);
// // alert( now );

// var nowa = new Date(year, month, date, hours, minutes, seconds, ms);
// console.log(nowa);

// var nowaa = getFullYear();
// console.log(nowaa);

let x = new Date();
let d = {
    day: x.getDay(),
    month: (x.getMonth() + 1),
    year: x.getFullYear(),
    hour: x.getHours(),
    minute: x.getMinutes(),
    second: x.getSeconds()
}
console.log(d)

let D = {};
for (let n in d) {
    D[n] = (parseInt(d[n], 10) < 10 ) ? ('0'+d[n]) : (d[n]);
}

let z = D.day + '.' + D.month + '.' + D.year;
z = `'` + D.hour + ':' + D.minute + ':' + D.second + '  ' + z + `'`;
console.log(z)







// let x = new Date();
// let d = {
//     day: x.getDay(),
//     month: (x.getMonth() + 1),
//     year: x.getFullYear(),
//     hour: x.getHours(),
//     minute: x.getMinutes(),
//     second: x.getSeconds()
// }
// let D = {};
// for (let n in d) {
//     D[n] = (parseInt(d[n], 10) < 10 ) ? ('0'+d[n]) : (d[n]);
// }
// let z = D.day + '.' + D.month + '.' + D.year;
// z = z + ' - ' + D.hour + ':' + D.minute + ':' + D.second;
// console.log(z)

