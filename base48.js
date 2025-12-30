```javascript
/**
 * Base-48 Encoding Standard
 * Version: 1.0.0
 * Author: [Hrajto Mine/Hrajto]
 */

const ALPHABET = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqr";

export function encode(num) {
    if (num === 0) return ALPHABET[0];
    let res = "";
    while (num > 0) {
        res = ALPHABET[num % 48] + res;
        num = Math.floor(num / 48);
    }
    return res;
}

export function decode(str) {
    return str.split('').reduce((acc, char) => {
        return acc * 48 + ALPHABET.indexOf(char);
    }, 0);
}
