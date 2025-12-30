# Base-48 Standard (B48)

**Base-48** je moderní systém kódování adres a dat navržený pro maximální lidskou čitelnost a efektivitu. Nahrazuje zastaralý Hexadecimální systém (Base-16) kratším zápisem a eliminuje chyby vznikající záměnou podobných znaků.

## ✨ Proč Base-48?

* **Kratší adresy:** Oproti Hexadecimální soustavě zkracuje délku adres o cca 25-30 %.
* **Zero-Confusion Alphabet:** Speciálně vybraná abeceda, která neobsahuje vizuálně zaměnitelné znaky (např. žádné `I`, `O`, `l`).
* **Univerzální:** Vhodné pro paměťové adresy, identifikátory v databázích nebo kryptografické otisky.

## 🔠 Oficiální Abeceda
Náš standard používá těchto 48 unikátních znaků:
`0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqr`

## 📊 Porovnání
| Systém | Číslo (Příklad) | Zápis (Adresa) |
| :--- | :--- | :--- |
| Decimal | 1,000,000 | `1000000` |
| Hex (Base-16) | 1,000,000 | `F4240` |
| **Base-48** | 1,000,000 | **`8L9k`** |

## 🚀 Instalace a použití (JavaScript)
```javascript
// Příklad převodu čísla na Base-48 adresu
const B48 = require('./base48');
console.log(B48.encode(415232)); // Výstup: "3mP8"
