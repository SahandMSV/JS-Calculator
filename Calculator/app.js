function copyToClipboard() {
    let input = document.getElementById('calculator_input').value;

    document.getElementById('copy_btn').addEventListener('click', function() {
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

    else if (input.length == 1) {
        input = 0;
    }

    else if (input.endsWith(' ÷ ') == true ||
            input.endsWith(' × ') == true ||
            input.endsWith(' + ') == true ||
            input.endsWith(' – ') == true) {
                let oldVal = input;
                input = oldVal.slice(0, -3);
    }

    else if (input.endsWith('÷ √') == true ||
            input.endsWith('× √') == true ||
            input.endsWith('+ √') == true ||
            input.endsWith('– √') == true) {
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
    document.getElementById('error_alert').value = '';
}

function btn_0() {
    let input = document.getElementById('calculator_input').value;

    if (input == '0.') {
        input += 0;
    } 

    else if (input == '0') {
        input = 0;
    }

    else {
        input += 0;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_1() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 1;
    }

    else {
        input += 1;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_2() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 2;
    }

    else {
        input += 2;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_3() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 3;
    }

    else {
        input += 3;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_4() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 4;
    }

    else {
        input += 4;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_5() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 5;
    }

    else {
        input += 5;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_6() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 6;
    }

    else {
        input += 6;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_7() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 7;
    }

    else {
        input += 7;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_8() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 8;
    }

    else {
        input += 8;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_9() {
    let input = document.getElementById('calculator_input').value;

    if (input == 0 && input.length == 1) {
        input = 9;
    }

    else {
        input += 9;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_dote() {
    let input = document.getElementById('calculator_input').value;

    if (input.includes('.')) {
        input = '0.';
    }

    else {
        input += '.';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_sqrt() {
    let input = document.getElementById('calculator_input').value;

    // ends with 0
    if (input == 0) {
        input = '√';
    }

    // adds a radical before the last typed number ends with a number [1-9]
    else if (input.match(/[1-9]$/)) {
        let whole_number = '';
        let alreadyRadical = false;
        if (input.includes(' ')) {
            for (let i = 1; i < input.length; i++) {
                if (input.charAt(input.length - i) == '√') {
                alreadyRadical = true;
                break;
                }
    
                if (input.charAt(input.length - i) == ' ') { break; }
    
                whole_number = input.charAt(input.length - i) + whole_number;
            }
            let lastIndexOf_number = input.lastIndexOf(whole_number);
    
            if (alreadyRadical == false) {
                input = input.slice(0, lastIndexOf_number) + '√' + whole_number;
            } else {
                input = input.slice(0, lastIndexOf_number - 1) + whole_number;
            }

            
        } else if (input.includes('√') == false) {
            input = '√' + input;
        } else if (input.includes(' ') == false && input.includes('√')) {
                input = input.slice(1);
        }
    }

    // ends with an operator
    else if (input.endsWith(' ÷ ') == true ||
            input.endsWith(' × ') == true ||
            input.endsWith(' + ') == true ||
            input.endsWith(' – ') == true) {
        input += '√';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_power() {
    let input = document.getElementById('calculator_input').value;
    input += '(';
    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('disabledBtn1');
    var tooltipContainer = document.getElementById('tooltip_container1');
    inputElement.addEventListener('mouseover',
    function() {
        tooltipContainer.style.display = 'block';
    });

    inputElement.addEventListener('mouseout',
    function() {
        tooltipContainer.style.display = 'none';
    });
});

function btn_percentage() {
    let input = document.getElementById('calculator_input').value;
    input += ')';
    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('disabledBtn2');
    var tooltipContainer = document.getElementById('tooltip_container2');
    inputElement.addEventListener('mouseover',
    function() {
        tooltipContainer.style.display = 'block';
    });

    inputElement.addEventListener('mouseout',
    function() {
        tooltipContainer.style.display = 'none';
    });
});

function btn_devide() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false) {
        input += ' ÷ ';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_multiply() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false) {
        input += ' × ';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_plus() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false &&
        input.endsWith('√') == false) {
        input += ' + ';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_minus() {
    let input = document.getElementById('calculator_input').value;

        if (input == 0) {
            input = '– ';
        }

    else if (input.endsWith(' ÷ ') == false &&
        input.endsWith(' × ') == false &&
        input.endsWith(' + ') == false &&
        input.endsWith(' – ') == false) {
        input += ' – ';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_clear() {
    document.getElementById('calculator_input').value = 0;
    document.getElementById('error_alert').value = '';
}

function equalToBtn() {
    let equation = document.getElementById('calculator_input').value;
    let oldVal = equation;
    // makes input calculable (excpt for √)
    let equation_formatted = equation.replace(/×/g, '*').replace(/÷/g, '/').replace(/–/g, '-');
    equation = equation_formatted;
    
    // calculates all the radical
    while (equation.includes('√')) {
        if (equation.endsWith('√') || equation.includes('√ ')) {
            break;
        }
        // the first radical found
        let radicalIndex = equation.search('√');
        // the first whitespace after the first radical found
        let radicandEndIndex = equation.indexOf(' ', radicalIndex);

        if (radicandEndIndex == -1) {
            radicandEndIndex = equation.length;
        }

        // radicand is the number insie the √
        let radicand = equation.slice(radicalIndex + 1, radicandEndIndex);
        // returns NaN if the radical negative or incalculable
        let result = Math.sqrt(radicand);
        if (result.toString().includes('.') == true) {
            let result_str = result.toString();
            result = parseFloat(result_str.substring(0, 5));
        }
        
        let calculatedRadical;
        if (result !== NaN) {
            calculatedRadical = equation.replace('√' + radicand, result);
            equation = calculatedRadical;
        } else {
            equation = NaN;
        }
    }

    if (equation == NaN) {
        document.getElementById('error_alert').value = 'NaN';
    }
    
    // let Invalid_Syntax = false;
    else if (equation.endsWith(' ') ||
        equation.includes('√')) {
        document.getElementById('calculator_input').value = oldVal;
        document.getElementById('error_alert').value = 'Invalid_Syntax';
    } else {
        equation = eval(equation);
        document.getElementById('calculator_input').value = equation;
    }
}