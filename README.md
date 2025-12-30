
![Base-48 Standard Banner](banner.png)
# Base-48 Standard (B48) 🚀

Base-48 is a high-density, human-friendly numeral system. It was created to bridge the gap between **Base-16 (Hex)** and **Base-64**, offering better memory address compression while maintaining perfect readability.

## 💡 Why Base-48?

Standard Hexadecimal (Base-16) is great for machines but long for humans. Base-64 is compact but contains confusing characters (like `O`, `0`, `I`, `l`). 

**Base-48 solves this by:**
1. **Removing Confusion:** No look-alike characters.
2. **Efficiency:** Addresses are ~28% shorter than Hex.
3. **URL Safe:** Uses only alphanumeric characters.

## 🔠 The Official Alphabet
Our standard uses 48 carefully selected characters:
`0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqr`

## 📊 Comparison Table

| Format | Example Address | Length |
| :--- | :--- | :--- |
| Decimal | `1,000,000` | 7 chars |
| Hexadecimal | `F4240` | 5 chars |
| **Base-48** | **`8L9k`** | **4 chars** |

## 🛠️ Quick Start (JavaScript)

```javascript
import { encode, decode } from 'base48';

const myAddr = encode(415232); 
console.log(`B48 Address: ${myAddr}`); // Output: 3mP8
