function main() {
    'use strict';

    let num = 33721;
    //Вывести в консоль произведение (умножение) цифр этого числа
    let result = 3*3*7*2*1;
    console.log(result);

    //Полученный результат возвести в степень 3,
    // используя только 1 оператор (Math.pow не подходит)
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