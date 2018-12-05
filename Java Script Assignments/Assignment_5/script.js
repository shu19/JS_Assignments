function isNumber(x) {
    var val = "^[a-zA-Z0-9]{,30}";
    // var val = /^[0-9*]/i;
    // if (val.test(x)) {
    //     console.log(true);
    //     return true;
    //     //console.log(true);
    // } else {
    //     console.log(false);
    //     alert("Enter Valid number");
    //     return false;
    // }
    alert("check");
    if (x.value.length == 0) {
        alert("message");
        return false;
    } else {
        alert("true");
        return true;
    }
}

function IsEmpty() {
    if (document.forms['frm'].question.value === "") {
        alert("empty");
        return false;
    }
    return true;
}

function addRow() {

    var table = document.getElementById("Summary");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = "cell 1 text";

    var cell2 = row.insertCell(1);
    cell2.innerHTML = "cell 2 text";


    console.log("table e");


}
function tbl() {

    var delivery = false;
    rate_value = '';
    if (document.getElementById('delivery').checked) {
        delivery = true;
    } else if (document.getElementById('pickup').checked) {
        delivery = false;
    }

    if (document.getElementById("Mushrooms").checked) {

    }



    document.getElementById("tName").innerHTML = document.getElementById("name").value;
    document.getElementById("tEmail").innerHTML = document.getElementById("email").value;
    document.getElementById("tAddress").innerHTML = document.getElementById("AddressText").value;

}


function createTable() {
    var table = document.getElementById("Summary");

    var nameRow = table.insertRow(0);
    var nameCell1 = nameRow.insertCell(0);
    nameCell1.innerHTML = "Name";

    var nameCell2 = nameRow.insertCell(1);
    nameCell2.innerHTML = "Shubham";

    var emailRow = table.insertRow(1);
    var nameCell1 = nameRow.insertCell(0);
    nameCell1.innerHTML = "Name";


}

