/**
 * Base-48 Encoding Standard
 * Version: 1.0.0
 * Author: [Hrajto Mine/Hrajto]
 */

const ALPHABET = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqr";

export function encode(num) {
    let n = BigInt(num); // Převod na BigInt pro nekonečnou přesnost
    if (n === 0n) return ALPHABET[0];
    
    let res = "";
    while (n > 0n) {
        res = ALPHABET[Number(n % 48n)] + res;
        n = n / 48n;
    }
    return res;
}

export function decode(str) {
    return str.split('').reduce((acc, char) => {
        const index = ALPHABET.indexOf(char);
        if (index === -1) throw new Error(`Invalid character: ${char}`);
        return acc * 48n + BigInt(index);
    }, 0n);
}
