const previousValue = document.querySelector(".first-value");
const currentValue = document.querySelector(".current-value");
const tempValue = document.querySelector(".temp-value");
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const clearAll = document.getElementById("clear_all");
const clearLastNum = document.getElementById("clear_last");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let prevNum = "";
let currNum = "";
let result = null;

let haveDec = false;
let lastOperation = "";

//Add
function addition(n1, n2) {
    let sum = (n1 + n2)
    return sum;
}

//Subtract
function subtraction(n1, n2) {
    if (n1 > n2) {
        return n1 - n2;
    } else {
        let sub = n1 - n2;
        return -sub;
    }
}

//Multiply
function multiplication(n1, n2) {
    return n1 * n2;
}

//Divide
function division(n1, n2) {
    return n1 / n2;
}

//Operators

function mathOperation() {
    if (lastOperation === "*") {
        result = parseFloat(result) * parseFloat(currNum);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(currNum);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(currNum);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(currNum);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(currNum);
    }
}

nums.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDec) {
            haveDec = true;
        } else if (e.target.innerText === "." && haveDec) {
            return;
        }
        currNum += e.target.innerText;
        currentValue.innerText = currNum;
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!currNum) return;
        haveDec = false;
        const operatorName = e.target.innerText;
        if (prevNum && currNum && lastOperation) {
            mathOperation(prevNum, currNum);
        } else {
            result = parseFloat(currNum);
        }

        tempResult(operatorName);
        lastOperation = operatorName;
    });
});

function tempResult(name = "") {
    prevNum += currNum + " " + name + " ";
    previousValue.innerText = prevNum;
    currentValue.innerText = "";
    currNum = "";
    tempValue.innerText = result;
}

equal.addEventListener("click", () => {
    if (!currNum || !prevNum) {
        return currentValue.innerText = "Error";
    };
    haveDec = false;
    mathOperation();
    tempResult();
    currentValue.innerText = result;
    tempValue.innerText = "";
    currNum = result;
    prevNum = "";
})

clearAll.addEventListener("click", () => {
    prevNum = "";
    currNum = "";
    previousValue.innerText = "";
    currentValue.innerText = "";
    result = "";
    tempValue.innerText = "";
});


clearLastNum.addEventListener("click", () => {
    currNum = currNum.slice(0, -1)
    currentValue.innerText = currNum;
})

window.addEventListener("keyup", (e) => {
    if (e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === ".") {
        clickNumbers(e.key);
    } else if (e.key === "/" ||
        e.key === "*" ||
        e.key === "-" ||
        e.key === "+" ||
        e.key === "%") {
        clickOperators(e.key);
    } else if (e.key === "=" || e.key === "Enter" || e.keyCode === 13) {
        clickEqual();
    }
})

function clickNumbers(key) {
    nums.forEach((num) => {
        if (num.innerText === key) {
            num.click();
        }
    })
}

function clickOperators(key) {
    operators.forEach((operator) => {
        if (operator.innerText === key) {
            operator.click();
        }
    })
}

function clickEqual() {
    equal.click();
}