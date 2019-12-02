
/*
Создать функцию которая выводит время
в html и обновляет значения каждую секунду.
Время выводить в формате чч:мм:cc, при этом
часы, минуты и секунды отобразить разными цветами.
 */
start_time();
function start_time() {
	var h,m,s,dt_start;

	dt_start = new Date();
	h = dt_start.getHours();
	m = get_format(dt_start.getMinutes());
	s = get_format(dt_start.getSeconds());
	get_format(m);
	document.getElementById("time").innerHTML =
		"<p style='color: " + generateColor() + "'> "+h+ ":"+"</p>"  +
		"<p style='color: " + generateColor() + "'> "+m+ ":"+"</p>"  +
		"<p style='color: " + generateColor() + "'> "+s+"</p>";
	setTimeout(start_time,1000);
}
function get_format(value) {
	if (String(value).length === 1){
		return "0" + value;
	}
	return  value;
}

function generateColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

/*
3. Создать светофор (красный, желтый,
зелёный). Переключать цвет у светофора
через каждые 2 сек сверху вниз и снизу вверх.
 */

var downward_direction = 0;
change_color_traffic(downward_direction);

function change_color_traffic() {
	let svg_9,svg_16,svg_17;
	svg_9  = document.getElementById("svg_9");//верхний
	svg_16 = document.getElementById("svg_16");
	svg_17 = document.getElementById("svg_17");

	if (svg_9.getAttribute("fill") === "red") {
		if (downward_direction === 0) {
			svg_9.setAttribute("fill", "gray");
			svg_16.setAttribute("fill", "yellow");
			svg_17.setAttribute("fill", "gray");
		}
		else if (downward_direction === 1) {
			svg_9.setAttribute("fill", "red");
			svg_16.setAttribute("fill", "gray");
			svg_17.setAttribute("fill", "gray");
			downward_direction = 0;
		}
	}
	else if (svg_16.getAttribute("fill") === "yellow") {
		if (downward_direction === 0 ) {
			svg_9.setAttribute("fill", "gray");
			svg_16.setAttribute("fill", "gray");
			svg_17.setAttribute("fill", "green");}

		else
		{
			svg_9.setAttribute("fill", "red");
			svg_16.setAttribute("fill", "gray");
			svg_17.setAttribute("fill", "gray");
		}
	}
	else if (svg_17.getAttribute("fill") === "green") {
		if (downward_direction === 1 ) {
			svg_9.setAttribute("fill", "red");
			svg_16.setAttribute("fill", "gray");
			svg_17.setAttribute("fill", "gray");
			downward_direction = 1;
		}
		else if (downward_direction === 0 )

			svg_9.setAttribute("fill", "gray");
		svg_16.setAttribute("fill", "yellow");
		svg_17.setAttribute("fill", "gray");
		downward_direction = 1;

	}

	setTimeout(change_color_traffic,2000);
}


