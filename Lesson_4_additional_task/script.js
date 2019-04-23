// 1) У вас есть: function getFriendlyNumbers(start, end) {}
// Необходимо реализовать функцию которая подсчитывает дружественные числа в заданном диапазоне;
// ·        Сигнатура функции - getFriendlyNumbers(start, end);
// ·        start - начало диапазона;
// ·        end - конец диапазона;
// 2) Функция должна возвращать массив из пар дружественных чисел
// Например:
// ·        Для диапазона от 1 до 300 функция должна вернуть [[220, 284]]
// ·        Для диапазона от 1 до 100 функция должна вернуть пустой массив
// ·        Для диапазона от 284 до 500 функция должна вернуть пустой массив
// 3) В случае, если переданы не правильные аргументы (неправильный тип данных (только числа!),
// start > end, отрицательный диапазон, дробные числа), функция должна вернуть false.
// ·        Числа должны находится в правильном порядке
// ·        [284, 220] – неправильно
// ·        Пары дружественных чисел не должны повторяться
// ·        [[220, 284], [284, 220]] – неправильно

// function getFriendlyNumbers(start, end) {
//     return []
// }


// module.exports = {
//     firstName: 'Name',
//     secondName: 'Surname',
//     task: getFriendlyNumbers
// }
// getFriendlyNumbers(start, end);


//////////////////////////////


// 220 284
// дружественные числа
let start = 1;
let end = 300;

ter = [];

 // 5

for (let i = start; i < end; i++) {
    let A = start; // 1
    let B;

    for (let i = pos1; pos1 < pos222; i++) {
        if (isFrendly(pos1, pos2) == true) {
            console.log(true);
        }
    }

    pos222++

}








console.log(isFrendly(start, end));

function isFrendly(num1, num2) {
    return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
}
function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}
function getDivisors(num) {
    let arr = []; // в массив будем накапливать нужные нам делители
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {  // если num делится на текущее число которое мы смотрим в цикле i (статок от деления равен 0)
            arr.push(i);
        }
    }
    return arr;
}
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//////////////














// console.log(getSum([1, 2, 3]));
