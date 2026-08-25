const display = document.getElementById("display");
const historyDisplay = document.getElementById("historyDisplay");

const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const equalBtn = document.getElementById("equalBtn");

const modeBtn = document.getElementById("modeBtn");
const ansBtn = document.getElementById("ansBtn");

const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

let expression = "";
let lastAnswer = 0;
let angleMode = "DEG";

let history = [];


/* -----------------------------
   DISPLAY
----------------------------- */

function updateDisplay() {

    display.value = expression || "0";

}


/* -----------------------------
   BUTTON INPUT
----------------------------- */

document.querySelectorAll("[data-value]").forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        addValue(value);

    });

});


function addValue(value) {

    if (expression === "Error") {

        expression = "";

    }

    /* Scientific constants */

    if (value === "pi") {

        expression += "π";

    }

    else if (value === "e") {

        expression += "e";

    }

    else {

        expression += value;

    }

    updateDisplay();

}


/* -----------------------------
   CLEAR
----------------------------- */

clearBtn.addEventListener("click", () => {

    expression = "";

    historyDisplay.textContent = "";

    updateDisplay();

});


/* -----------------------------
   DELETE
----------------------------- */

deleteBtn.addEventListener("click", () => {

    expression = expression.slice(0, -1);

    updateDisplay();

});


/* -----------------------------
   DEG / RAD
----------------------------- */

modeBtn.addEventListener("click", () => {

    if (angleMode === "DEG") {

        angleMode = "RAD";

        modeBtn.textContent = "RAD";

    }

    else {

        angleMode = "DEG";

        modeBtn.textContent = "DEG";

    }

});


/* -----------------------------
   ANSWER
----------------------------- */

ansBtn.addEventListener("click", () => {

    expression += lastAnswer;

    updateDisplay();

});


/* -----------------------------
   CALCULATE
----------------------------- */

equalBtn.addEventListener("click", calculate);


function calculate() {

    if (!expression) {

        return;

    }

    try {

        const originalExpression = expression;

        let result = evaluateExpression(expression);

        if (!Number.isFinite(result)) {

            throw new Error("Invalid calculation");

        }

        result = Number(result.toFixed(12));

        lastAnswer = result;

        historyDisplay.textContent =
            originalExpression + " =";

        expression = String(result);

        addHistory(originalExpression, result);

        updateDisplay();

    }

    catch (error) {

        historyDisplay.textContent = "Invalid expression";

        expression = "Error";

        updateDisplay();

    }

}


/* -----------------------------
   EXPRESSION EVALUATOR
----------------------------- */

function evaluateExpression(input) {

    let exp = input;

    /* Constants */

    exp = exp.replace(/π/g, "Math.PI");

    exp = exp.replace(/\be\b/g, "Math.E");


    /* Powers */

    exp = exp.replace(
        /(\d+(?:\.\d+)?)\^2/g,
        "($1**2)"
    );

    exp = exp.replace(
        /(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g,
        "($1**$2)"
    );


    /* Square root */

    exp = exp.replace(
        /sqrt\(/g,
        "Math.sqrt("
    );


    /* Logarithm */

    exp = exp.replace(
        /log\(/g,
        "Math.log10("
    );


    /* Natural logarithm */

    exp = exp.replace(
        /ln\(/g,
        "Math.log("
    );


    /* Trigonometric functions */

    if (angleMode === "DEG") {

        exp = exp.replace(
            /sin\(/g,
            "Math.sin(Math.PI/180*("
        );

        exp = exp.replace(
            /cos\(/g,
            "Math.cos(Math.PI/180*("
        );

        exp = exp.replace(
            /tan\(/g,
            "Math.tan(Math.PI/180*("
        );

        exp = fixTrigParentheses(exp);

    }

    else {

        exp = exp.replace(
            /sin\(/g,
            "Math.sin("
        );

        exp = exp.replace(
            /cos\(/g,
            "Math.cos("
        );

        exp = exp.replace(
            /tan\(/g,
            "Math.tan("
        );

    }


    /* Factorial */

    exp = convertFactorials(exp);


    /* Percentage */

    exp = exp.replace(
        /(\d+(?:\.\d+)?)%/g,
        "($1/100)"
    );


    /*
       Basic mathematical characters
    */

    exp = exp.replace(/×/g, "*");

    exp = exp.replace(/÷/g, "/");

    exp = exp.replace(/−/g, "-");


    /*
       Security check:
       Only allow mathematical characters
    */

    if (!/^[0-9+\-*/().,\sA-Za-z_*]+$/.test(exp)) {

        throw new Error("Invalid characters");

    }


    /*
       Evaluate mathematical expression
    */

    return Function(
        `"use strict"; return (${exp})`
    )();

}


/* -----------------------------
   TRIG PARENTHESIS FIX
----------------------------- */

function fixTrigParentheses(exp) {

    /*
       Converts:
       sin(30)
       into:
       Math.sin(Math.PI/180*(30))
    */

    exp = exp.replace(
        /Math\.sin\(Math\.PI\/180\*\(([^()]*)\)/g,
        "Math.sin(Math.PI/180*($1))"
    );

    exp = exp.replace(
        /Math\.cos\(Math\.PI\/180\*\(([^()]*)\)/g,
        "Math.cos(Math.PI/180*($1))"
    );

    exp = exp.replace(
        /Math\.tan\(Math\.PI\/180\*\(([^()]*)\)/g,
        "Math.tan(Math.PI/180*($1))"
    );

    return exp;

}


/* -----------------------------
   FACTORIAL
----------------------------- */

function factorial(number) {

    if (number < 0 || !Number.isInteger(number)) {

        throw new Error("Invalid factorial");

    }

    if (number > 170) {

        throw new Error("Number too large");

    }

    let result = 1;

    for (let i = 2; i <= number; i++) {

        result *= i;

    }

    return result;

}


function convertFactorials(exp) {

    const factorialRegex =
        /(\d+(?:\.\d+)?)!/g;

    return exp.replace(
        factorialRegex,
        (_, number) => `factorial(${number})`
    );

}


/* -----------------------------
   HISTORY
----------------------------- */

function addHistory(expressionText, result) {

    history.unshift({
        expression: expressionText,
        result: result
    });

    if (history.length > 10) {

        history.pop();

    }

    renderHistory();

}


function renderHistory() {

    historyList.innerHTML = "";

    history.forEach(item => {

        const div = document.createElement("div");

        div.className = "history-item";

        div.innerHTML = `
            <span class="history-expression">
                ${item.expression}
            </span>

            <span class="history-result">
                ${item.result}
            </span>
        `;

        div.addEventListener("click", () => {

            expression = String(item.result);

            updateDisplay();

        });

        historyList.appendChild(div);

    });

}


clearHistory.addEventListener("click", () => {

    history = [];

    renderHistory();

});


/* -----------------------------
   KEYBOARD SUPPORT
----------------------------- */

document.addEventListener("keydown", event => {

    const key = event.key;

    if (
        /[0-9+\-*/().]/.test(key)
    ) {

        addValue(key);

    }

    else if (key === "Enter" || key === "=") {

        calculate();

    }

    else if (key === "Backspace") {

        expression =
            expression.slice(0, -1);

        updateDisplay();

    }

    else if (key === "Escape") {

        expression = "";

        updateDisplay();

    }

    else if (key === "%") {

        addValue("%");

    }

});