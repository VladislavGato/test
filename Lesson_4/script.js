// function main() {
//     'use strict';

// }
// main();

let money, time;
  
function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
  
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();
    
  
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {}, 
    income: [], 
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
                
            if ( (a != null) && (b != null) && (typeof(a) === 'string') &&
                 (typeof(b) === 'string') && (a != '') && (b != '') &&
                 (a.length < 50) && (b.length < 50) ) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("Повторите ввод ещё раз");
                i--;         
            } 
        }
    },
    detectDayBudget: function () {  // расчет дневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if( appData.moneyPerDay < 700) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 700 && appData.moneyPerDay <= 2500) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2500) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent =+prompt("Под какой процент?");
                
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() { //определение необязательных расходов
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?");
        
            if ( (a != null) && (typeof(a) === 'string') &&
                 (a != '') && (a.length < 12) ) {
                console.log("Статья необязательных расходов done");
                appData.optionalExpenses[i] = a;
            } else {
                console.log("Статья необязательных расходов - ошшибка");
                i--;         
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            // 1 пункт
            if ( (items != null) && (typeof(items) === 'string') &&
                 (items != '') ) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то ещё?'));
                appData.income.sort();
            } else {
                console.log("Произошла ошибка");
                i--;         
            }  
        }

        // 2 пункт
        appData.income.forEach( function(item, i, mass) { 
            alert('Способы доп. заработка: ' + (i+1) + ': ' +
                item + " (массив: " + mass + ')');
        }); //Товары должны начинаться с 1, а не с 0.
        // беру товарс с индексом 0, вывожу его же с номером 1
    }
};

// 3 пункт
// вариант 1  -   без вывода функций и объектов, которые вроде
//  как нельзявывести через for in
// for (let key in appData) {
//     if (typeof(appData[key]) == 'object' || 
//         typeof(appData[key]) == "function") {
//         continue;
//     } else {
        
//         console.log('Наша программа включает в себя данные:  ' +
//                      key + ': ' + appData[key]);
//     } 
// }
// вариант 2  -  выводит всё
for (let key in appData) {
    console.log('Наша программа включает в себя данные:  ' +
                 key + ': ' + appData[key]);
}
