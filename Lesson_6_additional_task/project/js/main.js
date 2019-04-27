
let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],

	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
	appData.startValue = true;
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while(isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	countBtn.disabled = false;
	countBtn.style.background = 'green';
});


expensesBtn.disabled = true;
expensesBtn.style.background = 'red';

expensesItem.forEach( item => {	
    item.addEventListener('input', () => {
        if(item.value != ''){
          expensesBtn.disabled = false;
          expensesBtn.style.background = 'green';
        } else {
          expensesBtn.disabled = true;
          expensesBtn.style.background = 'red';
        }
    });
});


expensesBtn.addEventListener('click', function() {
	if (appData.startValue == true) {
		let sum = 0;
		expensesItem.textContent = '';
		if (appData.expensesItemValue = true) {
			for (let i = 0; i < expensesItem.length; i++) {
				let a = expensesItem[i].value,
					b = expensesItem[++i].value;
			


				if ( (typeof(a) != null) && (typeof(b) != null) && 
					(typeof(a) === 'string') && (a != '') && (b != '') &&
					(a.length < 50) && (b.length < 50) && (!isNaN(b)) ) {
					console.log("Всё верно");
					appData.expenses[a] = b;
					sum += +b;
				} else {
					console.log("Повторите ввод ещё раз");
					// i = i - 1;         
				} 
			}
			
			appData.expensesSum = sum;
			expensesValue.textContent = sum;
			appData.expensesSum = '';

		}
	
	}
});

optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.background = 'red';

optionalExpensesItem.forEach( item => {	
    item.addEventListener('input', () => {
        if(item.value != ''){
			optionalExpensesBtn.disabled = false;
			optionalExpensesBtn.style.background = 'green';
        } else {
			optionalExpensesBtn.disabled = true;
			optionalExpensesBtn.style.background = 'red';
		}		
		// if(item.value != '') {
		// 	appData.optionalExpensesNumber++;
		// } else {
		// 	appData.optionalExpensesNumber--;
		// }
    });
});


optionalExpensesBtn.addEventListener('click', function() {
	if (appData.startValue == true) {
		// for (let i = 1; i < 4; i++) {
		// 	let opt = prompt("Статья необязательных расходов?");
		
		// 	if ( (opt != null) && (typeof(opt) === 'string') &&
		// 		 (opt != '') && (opt.length < 12) ) {
		// 		console.log("Статья необязательных расходов done");
		// 		appData.optionalExpenses[i] = opt;
		// 	} else {
		// 		console.log("Статья необязательных расходов - ошшибка");
		// 		i--;         
		// 	}
		// }
		// appData.optionalExpensesNumber = 0;
		optionalExpensesValue.textContent = '';// обнуляем перед повторным вводом

		for (let i = 0; i < optionalExpensesItem.length; i++) {
			let opt = optionalExpensesItem[i].value,
				checkLang = /^[А-Яа-яЁё]+$/;

			if (checkLang.test(opt) == true ) {
				appData.optionalExpenses[i] = opt;
				optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';	
				// appData.optionalExpensesNumber += 1;
			}
			
		}
	}
});
countBtn.disabled = true;
countBtn.style.background = 'red';

countBtn.addEventListener('click', function() {
	if (appData.startValue == true) {
		if(appData.budget != undefined) {
			// appData.moneyPerDay = (appData.budget / 30).toFixed();
			// dayBudgetValue.textContent = appData.moneyPerDay;

			appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
			dayBudgetValue.textContent = appData.moneyPerDay;

			if( appData.moneyPerDay < 100) {
				levelValue.textContent = "Минимальный уровень достатка";
			} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
				levelValue.textContent = "Средний уровень достатка";
			} else if (appData.moneyPerDay > 2000) {
				levelValue.textContent = "Высокий уровень достатка";
			} else {
				levelValue.textContent = "Произошла ошибка";
			}
		} else {
			dayBudgetValue.textContent = 'Произошла ошибка';
		}
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.startValue == true) {
		if (appData.savings == true) {
			appData.savings = false;
		} else {
			appData.savings = true;
		}
	}	
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100  * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100  * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {}, 
    income: [], 
	savings: false,
	startValue: false,//нажали ли СТАРТ
	expensesSum: 0, // сумма обязательных трат
	expensesItemValue: false // состояние кнопки утв. обяз.расх
	// optionalExpensesNumber: 0
};
















