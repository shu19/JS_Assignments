    var number1 ;
    var number2;

function calculator() {
    var operation = prompt("\n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide \n 5. Exponent  \n 6. Mean \n 7. Quit");

    
    switch (parseInt(operation)) {
        case 1:
            setInput();
            document.getElementById("result").value = parseInt(number1) + parseInt(number2);
            break;
        case 2:
            setInput();
            document.getElementById("result").value = parseInt(number1) - parseInt(number2);
            break;
        case 3:
            setInput();
            document.getElementById("result").value = parseInt(number1) * parseInt(number2);

            break;
        case 4:
            setInput();
            document.getElementById("result").value = parseInt(number1) / parseInt(number2);

            break;
        case 5:
            var base = prompt("Enter base");
            while (!isNumber(base)) {
                base = prompt("Enter base");
            }
            var exponent = prompt("Enter exponent");
            while (!isNumber(exponent)) {
                exponent = prompt("Enter exponent");
            }

            document.getElementById("result").value = Math.pow(base, exponent);

            break;
        case 6:
            mean();
            break;

        case 7:

            break;

        default:
            alert('Please Enter number between 1 to 7');
            break;


    }

}

function mean() {
    var sum = 0;
    var count = 0;
    var number = prompt("Enter number");
    while (!isNumber(number)) {
        number = prompt("Enter exponent");
    }

    while (number != "***") {
        if (number != "***") {
            count++;
            sum += parseInt(number);
            number = prompt("Enter number");
            while (!isNumber(number)) {
                number = prompt("Enter exponent");
            }
        
        }
    }
    document.getElementById("result").value = sum / count;

}

function setInput() {
    
    number1 = prompt("Enter 1st Number");
    while (!isNumber(number1)) {
        number1 = prompt("Enter 1st Number");
    }

    number2 = prompt("Enter 2nd Number");
    while (!isNumber(number2)) {
        number2 = prompt("Enter 2nd Number");
    }

}

function isNumber(x) {
    // var val="^[a-zA-Z0-9]{,30}";
    var val = /^[0-9*]/i;
    if (val.test(x)) {
        console.log(true);
        return true;
        //console.log(true);
    } else {
        console.log(false);
        alert("Enter Valid number");
        return false;
    }
}