function caesarCipher(str, shift) {
    const shiftChar = (char, shift) => {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';

        if (!isUpperCase && !isLowerCase) {
            return char;
        }

        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

        const shiftedCharCode = ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base;

        return String.fromCharCode(shiftedCharCode);
    };

    return str
        .split('')
        .map((char) => shiftChar(char, shift))
        .join('');
}

module.exports = caesarCipher;