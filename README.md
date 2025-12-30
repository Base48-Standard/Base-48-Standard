
![Base-48 Standard Banner](resources/banner.png)
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

## 🌐 Live Demo
Try the **Base-48 Standard Converter** online:  
[**https://base48-standard.github.io/Base-48-Standard/**](https://base48-standard.github.io/Base-48-Standard/)

## 📦 Installation

You can install the official Base-48 library via **NPM**:

```bash
npm install base48-standard
```
## 🛠️ Quick Start (JavaScript)

```javascript
import { encode, decode } from 'base48-standard';

const myAddr = encode(415232); 
console.log(`B48 Address: ${myAddr}`); // Output: 3mP8
```

❓ Frequently Asked Questions (FAQ)
1. Why 48 characters? Why not 32 or 64?
Base-48 is the "sweet spot." Base-32 is still quite long for large addresses, and Base-64 includes characters that are often used as delimiters (like + and /) or look too similar. Base-48 allows for significant compression while keeping every character distinct.

2. Which characters were removed and why?
We removed characters that cause transcription errors: 0 (zero), O (capital O), I (capital i), and l (lowercase L). This ensures that no matter what font you use, you can't misread a Base-48 address.

3. Is Base-48 case-sensitive?
Yes. To achieve high density with only 48 characters, the system distinguishes between uppercase and lowercase letters. For example, A is index 10, while a is index 37.

4. Is it faster than Hex?
For a computer, Hex is native. However, for a human, Base-48 is faster to read, type, and communicate because the strings are significantly shorter and lack "visual noise."
