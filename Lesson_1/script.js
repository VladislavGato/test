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

  //Задать пользователю по 2 раза вопросы:
  let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
      answer2 = prompt("Во сколько обойдется?"),
      answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
      answer4 = prompt("Во сколько обойдется?");

  appData.expenses[answer1] = answer2;
  appData.expenses[answer3] = answer4;


  //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
  alert("Ваш бюджет на 1 день = " + (appData.budget / 30).toFixed(2) + 
        " рублей.");
}

main();