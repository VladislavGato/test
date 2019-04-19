function main() {
    'use strict';

    let num = 33721;

    //число в строку; разделяем в массив из букв
    num = String(num);
    num = num.split('');

    //перемножаем все числа массива
    let result = num.reduce(function(sum, current) {
        return sum * current
    }, 1);

    //Полученный результат возвести в степень 3,
    //используя только 1 оператор (Math.pow не подходит)
    result **= 3;

    //Вывести на экран первые 2 цифры полученного числа
    //превращаем в строку, выбираем первые 2 символа,
    // превращаем в число и выводим в alert
    let string = String(result);
    string = string.substr(0,2);
    string = parseInt(string);
    alert(string);
}

main();