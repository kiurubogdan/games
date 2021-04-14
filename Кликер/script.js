'use strict';

/* 
 ****- Code by Kiuru Bogdan -****
 */

console.log('<== Хочешь читерить? ==>');
//--------------------------------------------------------------------

function CheckLoad() {
	if (localStorage.getItem("money") !== "undefined") {
		Load();
	}
}

var money = 0;
var body = document.getElementById('body');
var moneySecond = 0;
var bysec = 0;
var plusMoney = 1;
var clickup = 1;
var level = 0;

// ЦЕНЫ
var levelup_cena = 50;
var Rak_cena = 10;
var MonBySec_cena = 10;
var rar_cena = 120;
var C_cena = 1000;
var D_cena = 10000;
var K_cena = 80000;
var N_cena = 200000;
var B_cena = 1200000;

// Счётчики
var ClickUp = 0;
var M = 0;
var V = 0;
var C = 0;
var D = 0;
var K = 0;
var N = 0;
var B = 0;

// FUNCTIONS

function Working() {
	money = money + plusMoney;
	document.getElementById('money').innerHTML = ('Ваши деньги: ' + money + '$ ');
}

function Rak() {
	if (money >= Rak_cena) {
		money = money - Rak_cena;
		Rak_cena = Math.round(Rak_cena * 1.2);
		plusMoney += clickup;
		ClickUp += 1;
		if (ClickUp % 10 === 0 && ClickUp !== 0) {
			clickup *= 2;
		}
		document.getElementById('money').innerHTML = ('Ваши деньги: ' + ' ' + money + '$');
		document.getElementById('Rak').innerHTML = ('+' + clickup + '$ к клику. цена: ' + Rak_cena + '$');
	}
}

function LevelUp() {
	if (money >= levelup_cena) {
		money = money - levelup_cena;
		plusMoney += 1;
		levelup_cena = Math.round(levelup_cena * 1.2);
		level += 1;
		if (level <= 5) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Ребёнок');
		} else if (level > 5 && level <= 10) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Мечтатель');
			body.classList.remove('rank-1');
			body.classList.add('rank-2');
		} else if (level > 10 && level <= 20) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Тренирующийся');
			body.classList.remove('rank-2');
			body.classList.add('rank-3');
		} else if (level > 20 && level <= 30) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Новый Космонавт');
			body.classList.remove('rank-3');
			body.classList.add('rank-4');
		} else if (level > 30 && level <= 50) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Космонавт');
			body.classList.remove('rank-4');
			body.classList.add('rank-5');
		} else if (level > 50 && level <= 75) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Ветеран');
			body.classList.remove('rank-5');
			body.classList.add('rank-6');
		} else if (level > 75 && level <= 100) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Исследователь системы');
			body.classList.remove('rank-6');
			body.classList.add('rank-7');
		} else if (level > 100 && level <= 125) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Покоритель системы');
			body.classList.remove('rank-7');
			body.classList.add('rank-8');
		} else if (level > 125 && level <= 150) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Исследователь галактики');
			body.classList.remove('rank-8');
			body.classList.add('rank-9');
		} else if (level > 150 && level <= 200) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Покоритель галактики');
			body.classList.remove('rank-9');
			body.classList.add('rank-10');
		} else if (level === 200) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Исследователь Вселенной');
			alert('Поздравляю! Ты прошел игру!');
			body.classList.remove('rank-10');
			body.classList.add('rank-11');
		} else if (level > 200 && level < 1000) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + 'Исследователь Вселенной');
			body.classList.remove('rank-10');
			body.classList.add('rank-11');
		} else if (level === 1000) {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + '???');
			body.classList.remove('rank-11');
			body.classList.add('rank-12');
			alert('Ты до сих пор играешь?');
		} else {
			document.getElementById('rank').innerHTML = ('Твой ранг: ' + '???');
		}
		document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + money + '$');
		document.getElementById('level').innerHTML = ('Ваш уровень:' + ' ' + level);
		document.getElementById('levelup').innerHTML = ('Повысить уровень:' + ' ' + levelup_cena + '$');
	} else {
		window.alert('Недостаточно денег');
	}
}

function Money_Second() {
	money = Math.round(money + moneySecond);
	document.getElementById('money').innerHTML = ('Ваши деньги:' + ' ' + money + '$ ');
}

function MoneyBySecond() {
	if (money >= MonBySec_cena) {
		money = money - MonBySec_cena;
		MonBySec_cena = Math.round(MonBySec_cena * 1.2);
		moneySecond += 1;
		bysec += 1;
		M += 1;
		document.getElementById('M_Second').innerHTML = ('Купить запчасти. цена: ' + MonBySec_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('M').innerHTML = (M);
		Save();
	} else {
		window.alert('Недостаточно денег');
	}
}

function Rar() {
	if (money >= rar_cena) {
		money = money - rar_cena;
		rar_cena = Math.round(rar_cena * 1.2);
		moneySecond += 10;
		bysec += 10;
		V += 1;
		document.getElementById('V_Second').innerHTML = ('Улучшить крылья. цена: ' + rar_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('V').innerHTML = (V);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Car() {
	if (money >= C_cena) {
		money = money - C_cena;
		C_cena = Math.floor(C_cena * 1.2);
		moneySecond += 50;
		bysec += 50;
		C += 1;
		document.getElementById('C_Second').innerHTML = ('Улучшить прочность. цена: ' + C_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('C').innerHTML = (C);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Dar() {
	if (money >= D_cena) {
		money = money - D_cena;
		D_cena = Math.floor(D_cena * 1.2);
		moneySecond += 100;
		bysec += 100;
		D += 1;
		document.getElementById('D_Second').innerHTML = ('Улучшить топливный бак. цена: ' + D_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('D').innerHTML = (D);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Kar() {
	if (money >= K_cena) {
		money = money - K_cena;
		K_cena = Math.floor(K_cena * 1.2);
		moneySecond += 500;
		bysec += 500;
		K += 1;
		document.getElementById('K_Second').innerHTML = ('Улучшить двигатель. цена: ' + K_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('K').innerHTML = (K);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Nar() {
	if (money >= N_cena) {
		money = money - N_cena;
		N_cena = Math.floor(N_cena * 1.2);
		moneySecond += 1000;
		bysec += 1000;
		N += 1;
		document.getElementById('N_Second').innerHTML = ('Улучшить двойной двигатель. цена: ' + N_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('N').innerHTML = (N);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Bar() {
	if (money >= B_cena) {
		money = money - B_cena;
		B_cena = Math.floor(B_cena * 1.2);
		moneySecond += 5000;
		bysec += 5000;
		B += 1;
		document.getElementById('B_Second').innerHTML = ('Улучшить тройной двигатель. цена: ' + B_cena + '$');
		document.getElementById('bysec').innerHTML = ('В секунду: ' + bysec);
		document.getElementById('B').innerHTML = (B);
	} else {
		window.alert('Недостаточно денег');
	}
}

function Save() {
	localStorage.setItem("money", money);
	localStorage.setItem("moneySecond", moneySecond);
	localStorage.setItem("bysec", bysec);
	localStorage.setItem("plusMoney", plusMoney);
	localStorage.setItem("clickup", clickup);
	localStorage.setItem("level", level);

	localStorage.setItem("MonBySec_cena", MonBySec_cena);
	localStorage.setItem("levelup_cena", levelup_cena);
	localStorage.setItem("Rak_cena", Rak_cena);
	localStorage.setItem("rar_cena", rar_cena);
	localStorage.setItem("C_cena", C_cena);
	localStorage.setItem("D_cena", D_cena);
	localStorage.setItem("K_cena", K_cena);
	localStorage.setItem("N_cena", N_cena);
	localStorage.setItem("B_cena", B_cena);

	localStorage.setItem("ClickUp", ClickUp);
	localStorage.setItem("M", M);
	localStorage.setItem("V", V);
	localStorage.setItem("C", C);
	localStorage.setItem("D", D);
	localStorage.setItem("K", K);
	localStorage.setItem("N", N);
	localStorage.setItem("B", B);
}

function Load() {
	money = parseInt(localStorage.getItem("money"));
	moneySecond = parseInt(localStorage.getItem("moneySecond"));
	bysec = parseInt(localStorage.getItem("bysec"));
	plusMoney = parseInt(localStorage.getItem("plusMoney"));
	clickup = parseInt(localStorage.getItem("clickup"));
	level = parseInt(localStorage.getItem("level"));

	MonBySec_cena = parseInt(localStorage.getItem("MonBySec_cena"));
	levelup_cena = parseInt(localStorage.getItem("levelup_cena"));
	Rak_cena = parseInt(localStorage.getItem("Rak_cena"));
	rar_cena = parseInt(localStorage.getItem("rar_cena"));
	C_cena = parseInt(localStorage.getItem("C_cena"));
	D_cena = parseInt(localStorage.getItem("D_cena"));
	K_cena = parseInt(localStorage.getItem("K_cena"));
	N_cena = parseInt(localStorage.getItem("N_cena"));
	B_cena = parseInt(localStorage.getItem("B_cena"));

	ClickUp = parseInt(localStorage.getItem("ClickUp"));
	M = parseInt(localStorage.getItem("M"));
	V = parseInt(localStorage.getItem("V"));
	C = parseInt(localStorage.getItem("C"));
	D = parseInt(localStorage.getItem("D"));
	K = parseInt(localStorage.getItem("K"));
	N = parseInt(localStorage.getItem("N"));
	B = parseInt(localStorage.getItem("B"));
}
setInterval('Money_Second()', 1000);
