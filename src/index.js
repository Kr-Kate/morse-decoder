const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codeMorze = '';
    let result = '';
    let j = 9;
    for(let i = 0; i < expr.length; i++) {
        if(i % 2 === 0) {
            if(expr[i] == 1) {
                if(expr[i + 1] == 1) {
                    codeMorze = codeMorze + '-';
                }
                else{
                    codeMorze = codeMorze + '.';
                }
            }
            else if(expr[i] == '*') {
                result = result + ' ';
                i += 10;
                j += 10;
            }
        }
        if(i === j) {
                result = result + MORSE_TABLE[codeMorze];
                codeMorze = '';
                j += 10;
            }
    }
    return result;
}

module.exports = {
    decode
}
