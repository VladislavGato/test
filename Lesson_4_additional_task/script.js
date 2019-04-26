// Необходимо реализовать функцию которая подсчитывает дружественные
// числа в заданном диапазоне и возвращает массив из пар дружественных чисел
// Сигнатура функции - getFriendlyNumbers(start, end);
// start - начало диапазона;
// end - конец диапазона;
// Для диапазона от 1 до 300 функция должна вернуть [[220, 284]]
// Для диапазона от 1 до 100 функция должна вернуть пустой массив
// Для диапазона от 284 до 500 функция должна вернуть пустой массив
// Для диапазона от 1 до 1211 функция должна вернуть [[220, 284], [1184, 1210]]
// В случае, если переданы не правильные аргументы (неправильный тип данных 
// (только числа!), start > end, отрицательный диапазон, дробные числа),
//  функция должна вернуть false.

// console.log(getFriendlyNumbers(1, 300));
// console.log(getFriendlyNumbers(1, 100));
// console.log(getFriendlyNumbers(284, 500));
console.log(getFriendlyNumbers(1, 1211));


function getFriendlyNumbers(start, end) {
	let resultArrFunc = [], // массив из пар дружественных чисел
		  numbersArr = {}; // объект числами и их суммами делителей
	  
	// ищем все числа с их делителями
	if ( (typeof(start) === 'number') && (typeof(end) === 'number') &&
         (start <= end) && (start > 0) && (start > 0) &&
          ((~~start) === start) && ((~~end) === end)) { //проверяем все числа
	  for (let startNum = start; startNum <= end; startNum++) { 
			let dividersSum = 0; // сумма всех делителей числа
			//Округление битовым операторам ~~ до целого,
			// обрезая десятичную часть
		  for (let i = 1; i < startNum; i++) {
				let divider = startNum / i; // делитель
		    if ( (~~divider) === divider ) { // является ли делитель целым числом
		    	dividersSum += i; //суммируем все делители 
        }
      }
      //в объект складываем пары число: сумма делителей
      numbersArr[startNum] = dividersSum; // 
		}
	} else {
		return false; //  иначе вернет выдаст false
	}
	//  иначе вернет пустой массив resultArrFunc
  // console.log(numbersArr);
	for (let i in numbersArr) { // проверяет каждое число объекта numbersArr
		for (let j in numbersArr) { // с каждым другим
			let resultNum = [], // массив с 
					num1 = numbersArr[j], // сумма делителей числа j
					num2 = numbersArr[i]; // сумма делителей числа i
      //число i должно быть равно сумме делителей числа j, и наоборот,
      // число i должно быть меньше суммы делителей числа i
			if (i == num1 && j == num2 && i < num2) {
				resultNum.push(+i); // + преобразует строку в число
				resultNum.push(+j); // и добавляет в первый массив
				resultArrFunc.push(resultNum); // добавить в итоговый массив
			}
		}
	}
  return resultArrFunc; // выдать результат или пустой массив
}	

