console.log("question 4 solution");
let div = document.getElementById("output");
let table = document.createElement("table");
let tbody = document.createElement("tbody");
for (i = 1; i <= 12; i++) {
    let row = document.createElement("tr");
    if (i % 4 == 0) {
        row.className = "multipleof4";

    }
    let tdata = document.createElement("td");
    let num = document.createTextNode(i);

    tdata.appendChild(num);
    row.appendChild(tdata);
    tbody.appendChild(row);
}
table.appendChild(tbody);
div.appendChild(table);
table.setAttribute("border", "1");