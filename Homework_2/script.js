function result_one() {

    let num_month = parseInt(document.getElementById("num_month").value);

    if (isNaN(num_month)) {
        alert("Введите число");
        return;
    }

    if (num_month > 12 || num_month===0){
        alert("В году 12 месяцев.Введите число от 1 до 12");
    }

    switch (num_month)  {
        case 1:
        case 2:
        case 3:
            alert("Зима");
            break;
        case 4:
        case 5:
        case 6:
            alert("Весна");
            break;
        case 7:
        case 8:
        case 9:
            alert("Лето");
            break;
        default:
            alert("Осень");

    }
}

function result_two() {
    var num_ed = parseInt(document.getElementById("num_ed").value);
    var L_lenght = parseFloat(document.getElementById("L_lenght").value);
    var res;
    if (isNaN(num_ed) || num_ed ===0 || num_ed > 4 ) {
        alert("Введите корректный номер единицы");
        return;
    }

    if (isNaN(L_lenght)) {
        alert("Введите корректную длину отрезка L");
        return;
    }

    switch (num_ed) {
        case 1:
            //дм
            res=L_lenght/10;
            break;
        case 2:
            //км
            res = L_lenght*1000;
            break;
        case 3:
            //метр
            res = L_lenght;
            break;
        case 4:
            //сантиметр
            res = L_lenght/100;
            break;
    }


    alert("Длинна метров: "+ res);

}

function result_three() {
    var ch = parseFloat(document.getElementById("ch").value);
    var res ="";
    var abs;
    abs = Math.abs(ch);
    if (isNaN(ch)) {
        alert("Введите число");
        return;
    }

    if (abs>999){
        alert("Число должно быть в периоде +-999");
        return;
    }


    if (ch<0){
        res = "Отрицательное";
    }
    else if (ch>0){
        res = "Положительное"}
    else if (ch===0){
        alert("Нулевое число");
        return;
    }


    if (abs < 10 ){
        res = res + " Однозначное";
    }
    else if (abs < 100 && abs > 10 || abs === 10){
        res = res + " Двузначное";
    }else
    {
        res = res + " Трехзначное";
    }

    alert(res + " число");
}

function result_four() {

    let gr = 100;

    for (let i = 1; i <= gr; i++) {

        if (!(i % 3) && !(i % 5)) {
            console.log(`${i} Three and Five`);
        } else if ((i % 3) && !(i % 5)) {
            console.log(`${i} Five`);
        } else if (!(i % 3)) {
            console.log(`${i} Three`);
        } else {
            console.log(`${i}`);
        }
    }
}

function result_five() {
    var year = document.getElementById("year").value;

    if (isNaN(year)) {
        alert("Введите число");
        return;
    }

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        alert("Год " + year + " Високосный");
    }
    else
    {
        alert("Год " + year + " - не високосный.");
    }
}