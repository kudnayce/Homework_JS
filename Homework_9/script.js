function result_task_1() {
	let str =  document.getElementById("arr_1").value;
	let arr = str.split(',');
	if (arr.length === 0) {
		alert("Массив не корректен");
		return;
	};
	/*
	- поиск минимального элемента в переданном массиве;
	- поиск максимально элемента в переданном массиве;
	- расчет среднего арифметического значения элементов переданного массива;
	- создание копии (клонирование) переданного массива.*/
	let res;
	res =
		"min  " 	    + working_with_array.min(arr) +"\n"  +
		"max  "  		+ working_with_array.max(arr) +"\n" +
		"avg  "   	    + working_with_array.avg(arr)	 +"\n" +
		"coppy_arr  "   + working_with_array.coppy_arr(arr);

	alert(res);
	//`${h}:${m}:${s}`
};
/*****************************************
 * *****************************************
 */

let present_tabs = [];
let win_prize;
let kolvo_try = 3;

function result_4() {
	kolvo_try = 3;
	let k = document.getElementById("colvotry").innerText ="Осталось попыток " + kolvo_try;
	
	let n = document.getElementById("kol_vo").value;

	generateTable(n,n);
	win_prize = get_win_prize();

	let td = document.querySelectorAll('.game_field TABLE TR TD');
	for (let i = 0; i < td.length; i++) {
		td[i].addEventListener("click", checkPrize);
	}
}

function generateTable(row, column){

	let table = '<table>';
	let a =0;
	for( let i = 1; i <= row; i++ ){

		table += '<tr>';

		for( let j = 1; j <= column; j++ ){
			table += '<td data-indexpres=' + a + '> </td>';
			present_tabs[a] = a;
			a += 1;
		}
		table += '</tr>';
	}
	table += '</table>';
	document.getElementById('table').innerHTML = table;
	console.log(present_tabs);
}



function checkPrize(e){
	if (kolvo_try <= 0) {
		return;
	}
	kolvo_try = kolvo_try -1;
	let k = document.getElementById("colvotry").innerText ="Осталось попыток " + kolvo_try;
	console.log(k);

	let win = win_prize.indexOf(parseInt(this.dataset.indexpres), 0);
	console.log(win);
	if (win > 0) {
		this.style.background = "green";
	}else
	{
		this.style.background = "black";
	};
}

function get_win_prize() {
	console.log("present_tabs" + present_tabs);
	let result = [];
	let arr = present_tabs.slice();
	for (let i=1; i<4;i++){
		result[i] = get_win_position(arr);
		try {
			arr.splice(result[i], 1);
		} catch (err) {
			// обработка ошибки
		}
	}

	console.log("win"+result);
	return result;

}
function get_win_position(arr) {
	let ind_win = Math.floor(Math.random() * arr.length);
	return arr[ind_win];
}
