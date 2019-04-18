function main() {
    'use strict';

    let money = +prompt("Ваш бюджет на месяц?");
    let time = prompt("Введите дату в формате YYYY-MM-DD");

    let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
    let answer2 = prompt("Во сколько обойдется?");

    let appData = {};
    //бюджет:
    appData.budget = money;
    //данные времени:
    appData.timeData = time;

    //объект с обязательными расходами:
    appData.expenses = {};
    appData.expenses[answer1] = answer2;

    //объект с необязательными расходами(оставляем пока пустым):
    appData.optionalExpenses = {};

    // массив данных с доп. доходом (оставляем пока пустым):
    appData.income = [];

    appData.savings = false;

    //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
    let dayPerMonth = 30;
    let budgetFor1Day = money / dayPerMonth;
    alert("Ваш бюджет на 1 день = " + ((budgetFor1Day).toFixed(2)) + 
          " рублей.");
}

main();