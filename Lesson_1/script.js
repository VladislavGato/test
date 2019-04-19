function main() {
    'use strict';

    let money = +prompt("Ваш бюджет на месяц?"),
        time = prompt("Введите дату в формате YYYY-MM-DD"),
        appData = {
            expenses: {},
            optionalExpenses: {}, 
            income: [], 
            savings: false
        };
    //бюджет:
    appData.budget = money;
    //данные времени:
    appData.timeData = time;

    //Задать пользователю по 2 раза вопросы:
    let answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
        answer2 = prompt("Во сколько обойдется?");
    appData.expenses[answer1] = answer2;

    answer1 = prompt("Введите обязательную статью расходов в этом месяце");
    answer2 = prompt("Во сколько обойдется?");
    appData.expenses[answer1] = answer2;

    //Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
    let dayPerMonth = 30,
        budgetFor1Day = money / dayPerMonth;
    alert("Ваш бюджет на 1 день = " + ((budgetFor1Day).toFixed(2)) + 
          " рублей.");
}

main();