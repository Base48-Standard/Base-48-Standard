/**
 * Base-48 Encoding Standard
 * Version: 1.0.2
 * Author: [Hrajto Mine/Hrajto]
 */

const ALPHABET = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqr";

export function encode(num) {
    let n = BigInt(num);

    if (n < 0n) throw new Error("Base48: Negative numbers are not supported.");
    if (n === 0n) return ALPHABET[0];

    let res = "";
    while (n > 0n) {
        res = ALPHABET[Number(n % 48n)] + res;
        n = n / 48n;
    }
    return res;
}

export function decode(str) {
    if (typeof str !== 'string' || str.length === 0) {
        throw new Error("Base48: Input must be a non-empty string.");
    }

    return str.split('').reduce((acc, char) => {
        const index = ALPHABET.indexOf(char);

        // Tohle je ta klíčová "blbuvzdornost"
        if (index === -1) {
            throw new Error(`Base48 Invalid character: "${char}". Remember, we don't use 0, O, I, or l.`);
        }

        return acc * 48n + BigInt(index);
    }, 0n);
}
