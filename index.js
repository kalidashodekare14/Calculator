
let output = document.getElementById('outputValue')


function appendNumber(number) {
    if (output.innerText === "0") {
        output.innerText = number
    }
    else {
        output.innerText += number
    }
}


function appendOperator(operator) {
    const lastChar = output.innerText.slice(-1)
    if (!["+", "-", "*", "/", "."].includes(lastChar)) {
        output.innerText += operator
    }
}

function deleteLast() {
    if (output.innerText.length > 1) {
        output.innerText = output.innerText.slice(0, -1)
    }
    else {
        output.innerText = "0"
    }
}


function calculator() {
    try {
        output.innerText = eval(output.innerText)
    }
    catch (error) {
        output.innerText = "Error"
    }
}


function calculatorReset() {
    output.innerText = "0"  
}

