function main() {
  'use strict';

  let money = +prompt("Ваш бюджет на месяц?", ''),
      time = prompt("Введите дату в формате YYYY-MM-DD", '');

  let appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {}, 
      income: [], 
      savings: false
  };

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

  // вариант цикла с while
  // let i = 0;
  // while (i < 2) {
  //   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
  //       b = prompt("Во сколько обойдется?", '');

  //   if ( (a != null) && (b != null) && (typeof(a) === 'string') &&
  //        (typeof(b) === 'string') && (a != '') && (b != '') &&
  //        (a.length < 50) && (b.length < 50) ) {
  //     console.log("done");
  //     appData.expenses[a] = b;
  //   } else {
  //     console.log("Повторите ввод ещё раз");
  //     i--;
  //   }
  //   i++;
  // }

  // вариант цикла с do 
  // let i = 0;
  // do {
  //   let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
  //       b = prompt("Во сколько обойдется?", '');

  //   if ( (a != null) && (b != null) && (typeof(a) === 'string') &&
  //        (typeof(b) === 'string') && (a != '') && (b != '') &&
  //        (a.length < 50) && (b.length < 50) ) {
  //     console.log("done");
  //     appData.expenses[a] = b;
  //   } else {
  //     console.log("Повторите ввод ещё раз");
  //     i--;
  //   }
  //   i++;
  // }
  // while (i < 2);

  appData.moneyPerDay = appData.budget / 30;

  alert("Ежедневный бюджет: " + (appData.moneyPerDay).toFixed(2) );

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

main();