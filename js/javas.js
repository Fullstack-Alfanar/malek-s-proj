
function reset1() {

    document.getElementById("info").value = "";
    document.getElementById("noteT").value = "";
    document.getElementById("noteD").value = "";

}


function enter(d1, d2, d3, i) {

    let tbdy = document.getElementById("fath");
    let div = document.createElement("div");
    div.id = "note";
    let div1 = document.createElement("div");
    let divpos = document.createElement("div");
    divpos.id = "pos";
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");



    let label1 = document.createElement("label");
    label1.id = "infoL";
    let label2 = document.createElement("label");
    label2.id = "dateL";
    let label3 = document.createElement("label");
    label3.id = "timeL";
    let label4 = document.createElement("label");
    label4.id = "IdL";
    let span = document.createElement("span");

    label1.textContent = d1;
    label2.textContent = d2;
    label3.textContent = d3;
    label4.textContent = i;
    span.className = "bi bi-x-circle";
    span.style.visibility = "hidden";
    div.onmouseover = function () {
        span.style.visibility = "visible";
    };
    span.onclick = function () {
        div1.removeChild(label1);
        div2.removeChild(label2);
        div3.removeChild(label3);


        divpos.removeChild(div2);
        divpos.removeChild(div3);
        div.removeChild(span);
        div.removeChild(div1);
        div.removeChild(divpos);
        tbdy.removeChild(div);
        let arr1 = [];
        if (localStorage.getItem("savePorj")) {
            arr1 = JSON.parse(localStorage.getItem("savePorj"));
        }



        for (let j = 0; j < arr1.length; j++) {
            console.log(arr1[j].count == label4.textContent);
            if (arr1[j].count == label4.textContent) {
                arr1.splice(j, 1);
            }
        }
        localStorage.setItem("savePorj", JSON.stringify(arr1));
    };


    div1.appendChild(label1);
    div2.appendChild(label2);
    div3.appendChild(label3);

    divpos.appendChild(div2);
    divpos.appendChild(div3);
    div.appendChild(span);
    div.appendChild(div1);
    div.appendChild(divpos);
    tbdy.appendChild(div);

    if (localStorage.getItem("count")) {
        var c = JSON.parse(localStorage.getItem("count"));
    }
    if (c == label4.textContent) {
        anim(div);
    }

}

function send() {
    let arr = [];
    let elemnts = [];
    let i = 0;

    if (localStorage.getItem("savePorj")) {
        arr = JSON.parse(localStorage.getItem("savePorj"));
    }
    if (localStorage.getItem("count")) {
        i = JSON.parse(localStorage.getItem("count"));
    }


    elemnts[0] = document.getElementById("info");
    elemnts[1] = document.getElementById("noteT");
    elemnts[2] = document.getElementById("noteD");
    elemnts[3] = document.getElementById(i++);

    var obj = {
        info: elemnts[0].value,
        time: elemnts[1].value,
        date: elemnts[2].value,
        count: i
    }
    // elemnts[0].value = '';
    // elemnts[1].value = '';
    // elemnts[2].value = '';
    if (!(obj.info == "" || obj.time == "" || obj.date == "")) {
        arr.push(obj);
        localStorage.setItem("savePorj", JSON.stringify(arr));
        localStorage.setItem("count", JSON.stringify(i));
        localStorage.setItem("infor", JSON.stringify(elemnts[0].value));
        localStorage.setItem("timer", JSON.stringify(elemnts[1].value));
        localStorage.setItem("dater", JSON.stringify(elemnts[2].value));
        enter(obj.info, obj.time, obj.date, i);
        console.log(elemnts[0].value);
        location.reload();
    }
    else { alert("Dont leave empty felids"); }

}
function show() {

    let arr1 = [];
    if (localStorage.getItem("savePorj")) {
        arr1 = JSON.parse(localStorage.getItem("savePorj"));
    }
    for (let i = arr1.length - 1; i > 0; i--) {
        let da1 = arr1[i].info;
        let da2 = arr1[i].time;
        let da3 = arr1[i].date;
        let da4 = arr1[i].count;
        enter(da1, da2, da3, da4);
    }
}
function anim(obj) {
    obj.style.animation = "fadein 3s";
}
window.onload = function () {
    let s = JSON.parse(localStorage.getItem("infor"));
    document.getElementById("info").value = s;

    let s1 = JSON.parse(localStorage.getItem("timer"));
    document.getElementById("noteT").value = s1;

    let s2 = JSON.parse(localStorage.getItem("dater"));
    document.getElementById("noteD").value = s2;
}
show();


