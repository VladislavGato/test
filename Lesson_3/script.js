function main() {
  'use strict';

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
      savings: true
  };

  function chooseExpenses() {
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
  }
  chooseExpenses();



  // вызывать функцию для определения необязательных расходов необязательно
  // но я включил вызов для наглядности 
  // сделал аналогично функции chooseExpenses()
  function chooseOptExpenses() {
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
  }
  chooseOptExpenses();


  // расчет дневного бюджета
  function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  }
  detectDayBudget();
 
  function detectLevel() {
    if( appData.moneyPerDay < 700) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 700 && appData.moneyPerDay <= 2500) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2500) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  }
  detectLevel();

  function checkSavings() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent =+prompt("Под какой процент?");
      
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  }
  checkSavings();
}
main();