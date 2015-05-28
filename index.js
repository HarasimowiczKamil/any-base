var Converter = require('./src/converter');

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string} srcAlphabet
 * @param {string} dstAlphabet
 *
 * @returns {function(number)}
 */
function anyBase(srcAlphabet, dstAlphabet) {
    var converter = new Converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string} number
     *
     * @return {string} number
     */
    return function (number) {
        return converter.convert(number);
    }
};

anyBase.BIN = '01';
anyBase.OCT = '01234567';
anyBase.DEC = '0123456789';
anyBase.HEX = '0123456789abcdef';

module.exports = anyBase;