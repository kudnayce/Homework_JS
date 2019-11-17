function result_one() {
    var ploshad_uchastka = document.forma_z1.ploshad_uchastka.value;
    var dlina = document.forma_z1.dlina.value;
    var visota = document.forma_z1.visota.value;
    let res = (100 * ploshad_uchastka) % (dlina * visota);
    document.forma_z1.quest_one.value = res;
}

function result_two() {

    var oval = document.forma_z2.oval.value;
    var vyrezanniy_oval = document.forma_z2.vyrezanniy_oval.value;
    document.forma_z2.quest_two.value = (100 * oval) - vyrezanniy_oval;

}

function max_ch() {
    var ch_1 = document.forma_z_3.ch_1.value;
    var ch_2 = document.forma_z_3.ch_2.value;
    var ch_3 = document.forma_z_3.ch_3.value;
    res = 0;
    res = Math.max(ch_1, ch_2, ch_3);
    document.forma_z_3.quest_3.value = res;
}

function min_ch() {
    var ch_1 = document.forma_z_3.ch_1.value;
    var ch_2 = document.forma_z_3.ch_2.value;
    var ch_3 = document.forma_z_3.ch_3.value;
    res = 0;
    res = Math.min(ch_1, ch_2, ch_3);
    document.forma_z_3.quest_3.value = res;
}

function result_four() {
    var res;
    let granica = parseFloat(document.getElementById("granica").value);
    let ch_2 = parseFloat(document.getElementById("ch_2").value);
    let ch_3 = parseFloat(document.getElementById("ch_3").value);

    let sr1 = Math.abs(granica - ch_2);
    let sr2 = Math.abs(granica - ch_3);

    if (sr1 < sr2) {
        res = ch_2;
    } else if (sr2 < sr1) {
        res = ch_3;
    } else {
        res = ch_2 + "=" + ch_3;
    }

    document.getElementById("quest_4").value = res;
}