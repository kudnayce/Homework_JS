function task_1() {
	let arr_A = document.getElementById("arr_A").value;
	let arrB = document.getElementById("arrB").value;
	let res = array_comparison(arr_A,arrB);
	alert(res);
}

let array_comparison = (A="",B="")=>{
	if (A === B && B ===""){
		return true;
	}

	let array_a = A.split(',');
	let array_b = B.split(',');
	if (A ===""){
		array_a = [];
	}
	if (B===""){
		array_b=[];
	}
	if (array_a.length !== array_b.length){
		return false;
	}
	for (let i=0; i < array_a.length;i++){
		if(array_a[i] !== array_b[i]){
			return false;
		}

	}
	return true;
};

function task_2() {
	let start_d = document.getElementById("start_d").value;
	let finish_d = document.getElementById("finish_d").value;
	let step_d = document.getElementById("step_d").value;
	let res;
	if (step_d !== "") {
		res = get_array_task_2(start_d,finish_d,parseInt(step_d))}
	else
		res = get_array_task_2(start_d,finish_d);
	console.log(res);
	alert(res);
}

/*Если есть способ решения легче(без цикла) дайте знать*/
function get_array_task_2(start,finish,step = 1) {
	let res = [];
	start = parseInt(start);
	finish = parseInt(finish);

	if(typeof start !== 'number'||typeof finish !== 'number'|| typeof step !== 'number'){
		alert("Все поля должны быть числом! ");
		return res;
	}
	if( start > finish){alert("Старт диапазона должен быть меньше финиша "); return res};

	let dif = finish - start;
	let temp=0;
	let its_first = true;
	for(let i = 0; i < dif; i++){
		if (its_first){
			temp = start;
			res[i]=start;
			its_first = false}
		else
			temp = temp + step;
		if (finish<temp){break;}
		res[i] =temp;
	}
	return res;
}
/*
Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент,
а она выводит его содержимое.
 */
let student = {
	name:'',
	surname:'',
	age:0,//Как по умолчанию то? типов нет!)?
	interest:[],
	place_of_traing:'',
};

pack_student();
//Для начала научимся заполнять объект
function pack_student(){
	student.name = "victor";
	student.surname = "Kudrin";
	student.age = 26;
	student.place_of_traing = "KGTU";
	student.interest[0] = "Футбол";
	student.interest[1] = "IT dev";
}

console_obj(student);

function console_obj(obj){
	console.log(obj);
}

/*
test_appi();
function test_appi() {
	// 1. Создаём новый объект XMLHttpRequest
	var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL
	xhr.open("GET", "https://uinames.com/api/");

// 3. Отсылаем запрос
	xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
	if (xhr.status != 200) {
		// обработать ошибку
		alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
		// вывести результат
		console.log( xhr.responseText ); // responseText -- текст ответа.
	}
}
*/


