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
    document.getElementById('error_alert').value = '';
}

function btn_0() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith('.') || input.endsWith('√') || input.endsWith(' ')) {
        input += 0;
    }

    // else if () {
        
    // }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
} // unfinished

function btn_1() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 1;
    }

    else if (input == 0) {
        input = 1;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_2() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 2;
    }

    else if (input == 0) {
        input = 2;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_3() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 3;
    }

    else if (input == 0) {
        input = 3;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_4() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 4;
    }

    else if (input == 0) {
        input = 4;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_5() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 5;
    }

    else if (input == 0) {
        input = 5;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_6() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 6;
    }

    else if (input == 0) {
        input = 6;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_7() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 7;
    }

    else if (input == 0) {
        input = 7;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_8() {
    let input = document.getElementById('calculator_input').value;

    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 8;
    }

    else if (input == 0) {
        input = 8;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_9() {
    let input = document.getElementById('calculator_input').value;
    
    if (input.endsWith(' ') || input.endsWith('√') ||
        input.endsWith('.') || input.match(/[1-9]$/)) {
        input += 9;
    }

    else if (input == 0) {
        input = 9;
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_dote() {
    let input = document.getElementById('calculator_input').value;
    let alreadyDecimal = false;
    if (input.includes(' ')) {
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
    
        if (input.endsWith('.') == false && alreadyDecimal == false) {
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

    // adds a radical before the last typed number that ends with a number [1-9]
    else if (input.match(/[1-9]$/) || input.match('²')) {
        let radicand = '';
        let alreadyRadical = false;

        if (input.includes(' ')) {
            for (let i = 1; i < input.length; i++) {
                if (input.charAt(input.length - i) == '') {
                alreadyRadical = true;
                break;
                }
                
                if (input.charAt(input.length - i) == ' ') { break; }
                
                radicand = input.charAt(input.length - i) + radicand;
            }
            
            let lastIndexOf_number = input.lastIndexOf(radicand);
            
            if (alreadyRadical == false) {
                input = input.slice(0, lastIndexOf_number) + '√' + radicand;
            }
            
            else {
                input = input.slice(0, lastIndexOf_number - 1) + radicand;
            }
            
        }
        
        else if (input.includes(' ') == false && input.includes('√')) {
            input = input.slice(1);
        }
        
        else if (input.includes('√') == false) {
            input = '√' + input;
        }
    }

    // ends with an operator (except ' – ')
    else if (input.endsWith(' ÷ ') ||
            input.endsWith(' × ') ||
            input.endsWith(' + ')) {
        input += '√';
    }

    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

function btn_power() {
    let input = document.getElementById('calculator_input').value;
    
    if (input.endsWith('²') == false &&
        input.endsWith(' ') == false &&
        input.endsWith('√') == false) {
        input += '²';
    }
    
    document.getElementById('calculator_input').value = input;
    document.getElementById('error_alert').value = '';
}

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
    
    // calculates all the powers
    while (equation.includes('²')) {
        let exponent = equation.slice(
            equation.lastIndexOf(' ', equation.search('²')) + 1, // index of the first number
            equation.search('²') // index of the first power found
            ); // extracted number to be powered by 2
        equation = equation.replace(exponent + '²', Math.pow(exponent, 2)); // result
    } // unfinished
    
    // calculates all the radicals
    while (equation.includes('√') && equation.endsWith('√') == false) {
        // the first radical found
        let radicalIndex = equation.search('√');
        
        // the first whitespace after the first radical found
        let radicandEndIndex = equation.indexOf(' ', radicalIndex);
        if (radicandEndIndex == -1) { radicandEndIndex = equation.length; }
        
        // radicand is the number insie the √
        let radicand = equation.slice(radicalIndex + 1, radicandEndIndex);
        // returns NaN if the radical negative or incalculable
        let result = Math.sqrt(radicand);
        
        // floating point precision (cutted off)
        if (result.toString().includes('.')) {
            let result_str = result.toString();
            result = parseFloat(result_str.substring(0, 5));
        }
        
        let calculatedRadical;
        if (result != NaN) {
            calculatedRadical = equation.replace('√' + radicand, result);
            equation = calculatedRadical;
        } else {
            equation = NaN;
        }
    }
    
    let noResult = false;
    if (equation == NaN || equation.endsWith(' ') || equation.includes('√') ||
        oldVal == NaN) {
        noResult = true;
    }
    
    // let Invalid_Syntax = false;
    if (noResult == true) {
        document.getElementById('calculator_input').value = oldVal;
        document.getElementById('error_alert').value = 'Invalid_Syntax';
    }
    
    else {
        equation = eval(equation);
        document.getElementById('calculator_input').value = equation;
    }
}