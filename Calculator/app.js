function error_alert_reset() {
    document.getElementById('error_alert').value = '';
}

function copyToClipboard() {
    let input = document.getElementById('calculator_input').value;

    document.getElementById('copy_btn').addEventListener('click', function () {
        copyFunction(input);
    });
}

function copyFunction(input) {
    navigator.clipboard.writeText(input)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error copying text to clipboard', err);
        });
}

function btn_del() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input = 0;
    }

    else if (input.length == 1 || (input.endsWith('(-') && input.length == 2)) {
        input = 0;
    }

    else if (input.endsWith('(-')) {
        input = oldVal.slice(0, -2);
    }

    else if (input.endsWith(' ÷ ') ||
        input.endsWith(' × ') ||
        input.endsWith(' + ') ||
        input.endsWith(' – ')) {
        let oldVal = input;
        input = oldVal.slice(0, -3);
    }

    else if (input.endsWith('÷ √') ||
        input.endsWith('× √') ||
        input.endsWith('+ √') ||
        input.endsWith('– √')) {
        let oldVal = input;
        input = oldVal.slice(0, -1);
    }

    else if (input != 0) {
        let oldVal = input;
        input = oldVal.slice(0, -1);
        if (input == '') {
            input = 0;
        }
    }

    else if (input.endsWith('.')) {
        input = 0;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_0() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 0;
    }

    else if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 0;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
} // unfinished

function btn_1() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 1;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 1;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_2() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 2;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 2;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_3() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 3;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 3;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_4() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 4;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 4;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_5() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 5;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 5;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_6() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 6;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 6;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_7() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 7;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 7;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_8() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 8;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 8;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_9() {
    let input = document.getElementById('calculator_input').value;

    if (input[0] == 0 && input.length == 1) {
        input = 9;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 9;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_dote() {
    let input = document.getElementById('calculator_input').value;
    let alreadyDecimal = false;

    if (input.endsWith('.')) {
        input = input.Substring(0, input.Length - 1)
    }

    else if (input.endsWith(' ') || input.endsWith('√')) {
        input += '0.';
    }

    else if (input.includes(' ')) {
        for (let i = 1; i < input.length; i++) {

            // check if the last typed number already contains a decimal
            if (input.charAt(input.length - i) == '.') {
                alreadyDecimal = true;
                break;
            }

            // or not
            if (input.charAt(input.length - i) == ' ') {
                break;
            }
        }
    }

    else if (input.includes(' ') == false && input.includes('.')) {
        alreadyDecimal = true;
    }

    if (input.endsWith('.') == false && alreadyDecimal == false) {
        input += '.';
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_sqrt() {
    let input = document.getElementById('calculator_input').value;

    // ends with 0
    if (input == 0) {
        input = '√';
    }

    else if (input.endsWith(' ÷ ') ||
        input.endsWith(' × ') ||
        input.endsWith(' + ') ||
        input.endsWith(' – ')) {
        input += '√';
    }

    else if (input[0] == '√' && input.length != 1 && input.includes(' ') == false) {
        input = input.slice(1);
    }

    else if (input.match(/[1-9]$/) || input.endsWith("²")) {
        let calculated = false;
        let alreadyRadical = false;
        let separated = input.split(" ");
        if (separated.at(-1).startsWith("√")) {
            alreadyRadical = true;
        } else {
            alreadyRadical = false;
        }

        if (input.endsWith("√")) {
            input.substring(0, input.length - 1);
            calculated = true;
        }

        else {
            if (alreadyRadical == false) {
                let lastElement = separated.at(-1);
                separated.pop();
                separated.push("√" + lastElement);
            } else {
                let lastElement = separated.at(-1);
                separated.pop();
                separated.push(lastElement.slice(1));
            }
        }

        if (calculated == false) {
            input = separated.join(" ");
        }
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_power() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith('²')) {
        input = input.slice(0, -1);
    }

    else if (input.endsWith(' ') == false &&
        input.endsWith('√') == false) {
        input += '²';
    }

    else if (parenthesisOpen == true) {
        input += ')²';
        parenthesisOpen = false;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

let parenthesisOpen = false;
function btn_negation() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input = '(-';
        parenthesisOpen = true;
    }

    else if (parenthesisOpen == true) {
        input += ')';
        parenthesisOpen = false;
    }

    else if (input.endsWith(' ') || input.endsWith('√')) {
        input += '(-';
        parenthesisOpen = true;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_devide() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input += ' ÷ ';
    }

    else if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false &&
        input.endsWith('.') == false) {
        if (parenthesisOpen == false) {
            input += ' ÷ ';
        } else {
            input += ') ÷ ';
            parenthesisOpen = false;
        }
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_multiply() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input += ' × ';
    }

    else if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false &&
        input.endsWith('.') == false) {
        if (parenthesisOpen == false) {
            input += ' × ';
        } else {
            input += ') × ';
            parenthesisOpen = false;
        }
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_plus() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input += ' + ';
    }

    else if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false &&
        input.endsWith('.') == false) {
        if (parenthesisOpen = false) {
            input += ' + ';
        } else {
            input += ') + ';
            parenthesisOpen = false;
        }
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_minus() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0) {
        input += ' – ';
    }

    else if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false &&
        input.endsWith('.') == false) {
        if (parenthesisOpen == false) {
            input += ' – ';
        } else {
            input += ') – ';
            parenthesisOpen = false;
        }
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_clear() {
    document.getElementById('calculator_input').value = 0;
    error_alert_reset()
}

function equalToBtn() {
    let equation_raw = document.getElementById('calculator_input').value;
    let oldVal = equation_raw;
    let invalid_Syntax = false;

    // makes (some) operators calculable
    let equation = equation_raw.replace(/×/g, '*').replace(/÷/g, '/').replace(/–/g, '-');

    // syntax error check
    if (equation.includes('NaN') || oldVal.includes('NaN') ||
        equation.endsWith('√') || equation.endsWith('.') || equation.endsWith(' ')) {
        invalid_Syntax = true;
    }

    // calculates all the powers
    if (equation.includes('²') && invalid_Syntax == false) {
        let separated = equation.split(' ');
        for (let i = 0; i < separated.length; i++) {
            let element = separated.at(-i - 1);
            
            if (element.includes('÷') || element.includes('+') ||
                element.includes('×') || element.includes('–')) {
                continue;
            }
            
            else if (element.endsWith('²')) {
                if (element.startsWith('√')) {
                    element = element.slice(1).slice(0, -1);
                    separated[separated.length - i - 1] = element;
                    continue;
                }
                element = element.slice(0, -1);
                element = Math.pow(element, 2);
                separated[separated.length - i - 1] = element;
            }
        }
        
        equation = separated.join(' ');
        
        if (equation.includes('NaN' && invalid_Syntax == false)) {
            invalid_Syntax = true;
        }
    }

    // calculates all the radicals
    if (equation.includes('√') && Invalid_Syntax == false) {
        let separated = equation.split(' ');
        for (let i = 0; i < separated.length; i++) {
            let element = separated.at(-i - 1);
            
            if (element.includes('÷') || element.includes('+') ||
                element.includes('×') || element.includes('–')) {
                continue;
            }
            
            else if (element.endsWith('√')) {
                element = element.slice(1);
                console.log(element);
                element = Math.sqrt(element);
                separated[separated.length - i - 1] = element;
            }
        }
        
        equation = separated.join(' ');
        
        if (equation.includes('NaN' && invalid_Syntax == false)) {
            invalid_Syntax = true;
        }
    } // incomplete

    if (invalid_Syntax == true) {
        document.getElementById('calculator_input').value = oldVal;
        document.getElementById('error_alert').value = 'Invalid_Syntax';
    } else {
        equation = eval(equation);
        document.getElementById('calculator_input').value = equation;
    }
}