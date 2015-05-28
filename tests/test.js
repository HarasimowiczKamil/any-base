var Converter = require('../src/converter'),
hex2bin = new Converter('0123456789abcdef', '01'),
bin2hex = new Converter('01', '0123456789abcdef'),
dec2hex = new Converter('0123456789', '0123456789abcdef'),
hex2dec = new Converter('0123456789abcdef', '0123456789'),
oct2dec = new Converter('01234567', '0123456789'),
dec2otc = new Converter('0123456789', '01234567'),
shorter = new Converter('0123456789', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-.,'),
unshorter = new Converter('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-.,', '0123456789');

function test (a, b, desc) {
    if (a === b) {
        console.log('\033[32mOK: ' + desc + '\033[0m');
    } else {
        console.error('\033[31mFAIL: ' + desc + '\033[0m');
    }
}

test(hex2bin.convert('2d5e'), '10110101011110', 'hex2bin(2d5e) === 10110101011110');
test(bin2hex.convert('10110101011110'), '2d5e', 'hex2bin(10110101011110) === 2d5e');
test(dec2hex.convert('11614'), '2d5e', 'hex2bin(11614) === 2d5e');
test(hex2dec.convert('2d5e'), '11614', 'hex2bin(2d5e) === 11614');
test(oct2dec.convert('26536'), '11614', 'hex2bin(26536) === 11614');
test(dec2otc.convert('11614'), '26536', 'hex2bin(11614) === 26536');

var short = shorter.convert('123456789123456789');
test(unshorter.convert(short), '123456789123456789', 'unshorter(shorter(123456789123456789)) === 123456789123456789');
