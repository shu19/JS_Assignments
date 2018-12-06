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
    if ( document.forms['frm']['name'].value === "") {
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


    var Toppings =[];

    if (document.getElementById("ExtraCheese").checked) {
        Toppings .push("Extra Cheese");
    }
    
    if (document.getElementById("Pepperoni").checked) {
        Toppings .push("Pepperoni");

    }
    
    if (document.getElementById("Olives").checked) {
        Toppings .push("Olives");

    }
    
    if (document.getElementById("Pepper").checked) {
        Toppings .push("Pepper");

    }
    
    if (document.getElementById("Bacon").checked) {
        Toppings .push("Bacon");

    }
    
    if (document.getElementById("Tomatoes").checked) {
        Toppings .push("Tomatoes");

    }
    
    if (document.getElementById("Mushrooms").checked) {
        Toppings .push("Mushrooms");

    }
    
    console.log(Toppings);

    for(i=0;i<Toppings.length;i++){
        insertRow(i,Toppings[i]);
    }


    document.getElementById("tName").innerHTML = document.getElementById("name").value;
    document.getElementById("tEmail").innerHTML = document.getElementById("email").value;
    document.getElementById("tAddress").innerHTML = document.getElementById("AddressText").value;
    document.getElementById("tDelivery").innerHTML = delivery;
    document.getElementById("tTip").innerHTML = document.getElementById("tip").value+" %";


    //  Total Price based on this formula: 
    //(base price + 1.5 * #of toppings + delivery fee)*1.0+tip. 
    //Where: base price= 10 and delivery is 5. 
    //For example, if 3 toppings are selected, delivery is NOT checked and 20% tip is selected, 
    //total is (10 + 1.5 * 3 + 0 ) * 1.2 = $17.4

    var basePrice=10;
    var deliveryCharge=0;
    if(delivery){
        deliveryCharge=5;
    }
    var tipPercent=document.getElementById("tip").value;
    var total=(basePrice + (1.5*Toppings.length) + deliveryCharge)*(1.0 + tipPercent/100);
    document.getElementById("tTotal").innerHTML =total;
    
}

function insertRow(i,Toppings){
    var table = document.getElementById("Summary");
    var nameRow = table.insertRow(i+4);

    var nameCell1 = nameRow.insertCell(0);
    nameCell1.innerHTML = "Toppings "+ ++i;

    var nameCell2 = nameRow.insertCell(1);
    nameCell2.innerHTML = Toppings;

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

function checkform()
    {
        var f = document.forms["frm"].elements;
        var cansubmit = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (cansubmit) {
            // document.getElementById('submitbutton').disabled = false;
            document.getElementById('submitbutton').disabled = !cansubmit;
        }
    }