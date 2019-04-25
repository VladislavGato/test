
//1 Получить кнопку "Начать расчет" через id
let srat = document.getElementById('start');


//2 Получить все блоки в правой части программы через классы (которые имеют
//  класс название-value, начиная с <div class="budget-value"></div> и 
// заканчивая <div class="yearsavings-value"></div>)
let budgetValue = document.getElementsByClassName('budget-value');
let daybudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value');
let incomeValue = document.getElementsByClassName('income-value');
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
let yearsavingsValue = document.getElementsByClassName('yearsavings-value');


//3 Получить поля(input) c обязательными расходами
//  через класс. (class=”expenses-item”)
let expenses1name = document.getElementsByClassName('expenses-item')[0];
let expenses2price = document.getElementsByClassName('expenses-item')[1];
let expenses3name = document.getElementsByClassName('expenses-item')[2];
let expenses4price = document.getElementsByClassName('expenses-item')[3];


//4 Получить кнопки “Утвердить” и “Рассчитать”
//  через Tag, каждую в своей переменной.
let expensesItemBtn = document.getElementsByTagName('button')[0]; 
let optionalexpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];


//5 Получить поля для ввода необязательных расходов (optionalexpenses-item)
//  при помощи querySelectorAll
let optionalexpenses1 = document.querySelectorAll('.optionalexpenses-item')[0];
let optionalexpenses2 = document.querySelectorAll('.optionalexpenses-item')[1]; 
let optionalexpenses3 = document.querySelectorAll('.optionalexpenses-item')[2]; 


//6 Получить оставшиеся поля через querySelector (статьи возможного
//  дохода, чекбокс, сумма, процент, год, месяц, день)  
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
