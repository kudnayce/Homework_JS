function task_1() {
    var arr_a = [ 12, 4, 3, 10, 1, 20 ];
    var arr_b = [-3, -7, -100, -33];
    var arr_c;

    console.log("A: " + arr_a);
    console.log("B: " + arr_b);

    arr_c = arr_b.concat(arr_a);
    console.log("C: " + arr_c );
}

function getRandomPeriods(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}


function task_2() {
    var area = [ null, null, null, null, null, null, null, null, null ];
    var container = document.getElementById('container');

    container.innerHTML = "";

    for (let i=0; i < area.length;i++)
    {
        var p = document.createElement('p');

        switch (getRandomPeriods(0,3)) {
            case 0:
                p.innerHTML = "0";
                break;
            case 1:
                p.innerHTML = "X";
                break;
            default:
                p.innerHTML = " ";
                break;
        }
        container.appendChild(p);
    }
}

function task_3() {
    console.clear();
    var arr_a = [12,4,3,10,1,20],min,max;

    console.log("До: " + arr_a);

    var its_first = true,ind_del_1,ind_del_2;

    for (let i=0; i < arr_a.length; i++){

        if (its_first) {
            min = arr_a[i];
            max = arr_a[i];
            its_first = false;
            ind_del_1 = i;
            ind_del_2 = i;
            continue;
        }

        if (min > arr_a[i]){
            ind_del_1 = i;
        }
        if (max < arr_a[i]){
            ind_del_2 = i;
        }

        min  = Math.min(min,arr_a[i]);
        max  = Math.max(max,arr_a[i]);

    }
    console.log("min: " + min);
    console.log("max: " + max);

    console.log(ind_del_1);
    console.log(ind_del_2);

    delete arr_a[ind_del_1];
    delete arr_a[ind_del_2];
    console.log("После: " + arr_a);

}