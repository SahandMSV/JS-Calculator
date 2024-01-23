let parenthesisOpen = false;
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

    if (input.length == 1 || (input.endsWith('(-') && input.length == 2)) {
        input = 0;
        parenthesisOpen = false;
    }

    else if (input.endsWith(')')) {
        input = input.slice(0, -1);
        parenthesisOpen = true;
    }

    else if (input.endsWith('(-')) {
        input = input.slice(0, -2);
        parenthesisOpen = false;
    }

    else if (input.endsWith(' ÷ ') ||
        input.endsWith(' × ') ||
        input.endsWith(' + ') ||
        input.endsWith(' – ')) {
        input = input.slice(0, -3);
    }

    else if (input.endsWith('÷ √') ||
        input.endsWith('× √') ||
        input.endsWith('+ √') ||
        input.endsWith('– √')) {
        input = input.slice(0, -1);
    }

    else if (input != 0) {
        input = input.slice(0, -1);
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

    if (input == '0') {
        input = 0;
    }

    else if (input.endsWith(' ') || input.endsWith('√') || input.endsWith('-') ||
        input.endsWith('.') || input.match(/[0-9]$/)) {
        input += 0;
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_1() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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

    if (input == '0') {
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
    let separated = input.split(' ');
    let lastElement = separated.at(-1);

    if (input == '0') {
        lastElement += '.';
    }

    else if (input.endsWith(' ') || input.endsWith('√')) {
        lastElement += '0.';
    }

    else if (input.match(/[0-9]$/) && !input.endsWith('.') && !lastElement.includes('.')) {
        lastElement += '.';
    }

    separated.pop();
    separated.push(lastElement);
    input = separated.join(' ');

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_sqrt() {
    let input = document.getElementById('calculator_input').value;
    let separated = input.split(' ');
    let lastElement = separated.at(-1);

    if (input == '0') {
        lastElement = '√';
    }

    else if ((input == '√' || input == '√(-') && !input.includes(' ')) {
        lastElement = '0';
        parenthesisOpen = false;
    }

    else if (lastElement.includes('÷') || lastElement.includes('×') ||
            lastElement.includes('+') || lastElement.includes('–')) {
        lastElement += '√';
    }

    else if (input.endsWith('√')) {
        lastElement = lastElement.slice(0, -1);
    }

    else if (lastElement.startsWith('√')) {
        lastElement = lastElement.slice(1);
    }

    else {
        lastElement = '√' + lastElement;
    }

    separated.pop();
    separated.push(lastElement);
    input = separated.join(' ');

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_power() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith('²')) {
        input = input.slice(0, -1);
    }

    else if (!input.endsWith(' ') && !input.endsWith('√') && !input.endsWith('-')) {
        input += '²';
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_negation() {
    let input = document.getElementById('calculator_input').value;
    let separated = input.split(' ');
    let lastElement = separated.at(-1);

    if (input == '0') {
        lastElement = '(-';
        parenthesisOpen = true;
    }

    else if ((input.endsWith(' ') || input.endsWith('√')) && !parenthesisOpen) {
        lastElement += '(-';
        parenthesisOpen = true;
    }

    else if (lastElement.endsWith('√(-')) {
        lastElement = lastElement.slice(0, -2);
    }

    else if (lastElement.startsWith('√(-') && lastElement.endsWith(')')) {
        lastElement = lastElement.slice(3, -1);
        lastElement = '√' + lastElement;
    }

    else if (lastElement.startsWith('√(-') && lastElement.endsWith(')²')) {
        lastElement = lastElement.slice(3, -2);
        lastElement = '√' + lastElement + '²';
    }

    else if (lastElement.startsWith('√') && !parenthesisOpen) {
        lastElement = lastElement.slice(1);
        lastElement = '√(-' + lastElement + ')';
    }

    else if (lastElement.startsWith('-')) {
        lastElement = '(' + lastElement + ')';
    }

    else if (input.endsWith(')')) {
        lastElement = lastElement.slice(2, -1);
    }

    else if (input.endsWith(')²')) {
        lastElement = lastElement.slice(2, -2);
    }

    else if (!lastElement.endsWith('-') && parenthesisOpen) {
        lastElement += ')';
        parenthesisOpen = false;
    }

    else if (!lastElement.endsWith('-')) {
        lastElement = '(-' + lastElement + ')';
    }

    separated.pop();
    separated.push(lastElement)
    input = separated.join(' ')

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_devide() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0') {
        input += ' ÷ ';
    }

    else if (!input.endsWith(' ÷ ') && !input.endsWith(' × ') && !input.endsWith(' + ') &&
            !input.endsWith(' – ') && !input.endsWith('√') && !input.endsWith('.')) {
        if (!parenthesisOpen && !input.endsWith('-')) {
            input += ' ÷ ';
        }
        
        else if (parenthesisOpen && !input.endsWith('-')) {
            input += ') ÷ ';
            parenthesisOpen = false;
        }
    }

    else if (input.endsWith(' × ') || input.endsWith(' + ') || input.endsWith(' – ')) {
        input = input.slice(0, -3);
        input += ' ÷ ';
    }

    else if (input.endsWith('.')) {
        input = input.slice(0, -1);
        input += ' ÷ '
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_multiply() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0') {
        input += ' × ';
    }

    else if (!input.endsWith(' ÷ ') && !input.endsWith(' × ') && !input.endsWith(' + ') &&
            !input.endsWith(' – ') && !input.endsWith('√') && !input.endsWith('.')) {
        if (!parenthesisOpen && !input.endsWith('-')) {
            input += ' × ';
        }
        
        else if (parenthesisOpen && !input.endsWith('-')) {
            input += ') × ';
            parenthesisOpen = false;
        }
    }

    else if (input.endsWith(' ÷ ') || input.endsWith(' + ') || input.endsWith(' – ')) {
        input = input.slice(0, -3);
        input += ' × ';
    }

    else if (input.endsWith('.')) {
        input = input.slice(0, -1);
        input += ' × ';
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_plus() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0') {
        input += ' + ';
    }

    else if (!input.endsWith(' ÷ ') && !input.endsWith(' × ') && !input.endsWith(' + ') &&
            !input.endsWith(' – ') && !input.endsWith('√') && !input.endsWith('.')) {
        if (!parenthesisOpen && !input.endsWith('-')) {
            input += ' + ';
        }
        
        else if (parenthesisOpen && !input.endsWith('-')) {
            input += ') + ';
            parenthesisOpen = false;
        }
    }

    else if (input.endsWith(' ÷ ') || input.endsWith(' × ') || input.endsWith(' – ')) {
        input = input.slice(0, -3);
        input += ' + ';
    }

    else if (input.endsWith('.')) {
        input = input.slice(0, -1);
        input += ' + '
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_minus() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0') {
        input += ' – ';
    }

    else if (!input.endsWith(' ÷ ') && !input.endsWith(' × ') && !input.endsWith(' + ') &&
            !input.endsWith(' – ') && !input.endsWith('√') && !input.endsWith('.')) {
        if (!parenthesisOpen && !input.endsWith('-')) {
            input += ' – ';
        }
        
        else if (parenthesisOpen && !input.endsWith('-')) {
            input += ') – ';
            parenthesisOpen = false;
        }
    }

    else if (input.endsWith(' ÷ ') || input.endsWith(' × ') || input.endsWith(' + ')) {
        input = input.slice(0, -3);
        input += ' – ';
    }

    else if (input.endsWith('.')) {
        input = input.slice(0, -1);
        input += ' – ';
    }

    document.getElementById('calculator_input').value = input;
    error_alert_reset()
}

function btn_clear() {
    document.getElementById('calculator_input').value = 0;
    parenthesisOpen = false;
    error_alert_reset()
}

function equalToBtn() {
    let equation_raw = document.getElementById('calculator_input').value;
    let oldVal = equation_raw;
    let invalid_Syntax = false;

    // makes (some) operators calculable
    let equation = equation_raw.replace(/×/g, '*').replace(/÷/g, '/').replace(/–/g, '-');

    // syntax error check
    if (equation.includes('NaN') || oldVal.includes('NaN') || parenthesisOpen ||
        equation.endsWith('√') || equation.endsWith('.') || equation.endsWith(' ')) {
        invalid_Syntax = true;
    }

    // calculates all the powers
    if (equation.includes('²') && !invalid_Syntax) {
        let separated = equation.split(' ');
        for (let i = 0; i < separated.length; i++) {
            let element = separated.at(-i - 1);
    
            if (element.includes('÷') || element.includes('+') ||
                element.includes('×') || element.includes('–')) {
                continue;
            }
    
            else if (element.startsWith('√') && element.endsWith('²')) {
                element = element.slice(1, -1);
            }
    
            else if (element.endsWith('²)')) {
                element = element.slice(2, -2);
                element = Math.pow(element, 2);
                element = '-' + element;
            }
    
            else if (element.endsWith('²)²')) {
                element = element.slice(2, -3);
                element = Math.pow(element, 2);
                element = '-' + element;
                element = Math.pow(element, 2);
            }
    
            else if (element.endsWith(')²')) {
                element = element.slice(2, -2);
                element = Math.pow(element, 2);
            }
    
            else {
                element = element.slice(0, -1);
                element = Math.pow(element, 2);
            }
    
            separated[separated.length - i - 1] = element;
        }
    
        equation = separated.join(' ');
    
        if (equation.includes('NaN' && !invalid_Syntax)) {
            invalid_Syntax = true;
        }
    }

    // calculates all the radicals
    if (equation.includes('√') && !invalid_Syntax) {
        if (!equation.includes(' ')) {
            equation = equation.slice(1);
            equation = Math.sqrt(equation);
        } else {
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
            
            if (equation.includes('NaN' && !invalid_Syntax)) {
                invalid_Syntax = true;
            }
        }
        
        // floating point precision (cutted off)
        let precision = 4;
        if (equation.toString().includes('.') && !invalid_Syntax) {
            equation = equation.toString();
            let indexOfDecimal = equation.indexOf('.');
            equation = parseFloat(equation.substring(
                0, precision + equation.slice(0, indexOfDecimal + 1).length
            ));
        }
    }

    // 2nd syntax error check
    if (equation.includes('NaN') || oldVal.includes('NaN') || equation == oldVal ||
        equation.endsWith('√') || equation.endsWith('.') || equation.endsWith(' ')) {
        invalid_Syntax = true;
    }

    if (invalid_Syntax && equation != '0') {
        document.getElementById('calculator_input').value = oldVal;
        document.getElementById('error_alert').value = 'Invalid_Syntax';
    } else {
        equation = eval(equation);
        document.getElementById('calculator_input').value = equation;
    }
}