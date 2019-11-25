function task_1() {
	var artikl = document.getElementById("artikl").value;

	var temp = 0;
	var ch = 0, error = "";

	for (var i = 0; i < artikl.length; i++) {
		ch = parseInt(artikl[i]);

		if (isNaN(ch)){
			error = error + "Не удалось перевести в целое число ["+artikl[i] + "] \n";
			continue;
		}
		temp = temp + ch;
	}
	if(error !=""){
		alert(error);
	};
	alert("Сумма чисел в строке не включая ошибок: " + temp);
}
function task_2() {
	var str =  document.getElementById("str").value;
	var symbol =  document.getElementById("symbol").value;
	var res = str.replace(new RegExp(symbol,'g'),symbol+symbol);

	alert(res);
}

function task_3() {
	/*3. Проверить что введенный пароль удовлетворяет
	следующим условиям сложности:
	- длинна от
	9 символов;
	- содержит обязательно английские буквы верхнего и нижнего регистра;
	- содержит более двух цифр;
	- содержит обязательно один из неалфавитных символов (например, !, $, #, %).*/
	var pw = document.getElementById("password").value;
	var
		regMinLen = false,
		eng_small_big = false,
		two_number = false,
		one_special_symbol = false;

	if (/\d{9,99999}$/.test(pw)){
		regMinLen = true;
	}

	if (/[a-zA-Z]{2,}/.test(pw)){
		eng_small_big=true;
	}

	if (/\d{2,}/.test(pw)){
		two_number=true;
	}

	if (/\W/.test(pw)){
		one_special_symbol=true;
	}

	alert("Длинна от 9 символов: " + regMinLen +"\r"+"содержит обязательно английские буквы верхнего и нижнего регистра:" + eng_small_big+
		"\r" + "- содержит более двух цифр: " + two_number + "\r" +
		"- содержит обязательно один из неалфавитных символов (например, !, $, #, %).*/ " + one_special_symbol)




	//console.log(pw.match(regMinLenght));




}
