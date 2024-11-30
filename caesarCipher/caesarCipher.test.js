const caesarCipher = require('./caesarCipher');

describe('Caesar Cipher', () => {
    test('Shifts letters correctly with wrapping (positive shift)', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Handles case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('Leaves punctuation and spaces unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('Handles negative shifts with wrapping', () => {
        expect(caesarCipher('abc', -3)).toBe('xyz');
    });

    test('Works with a shift of 0 (no change)', () => {
        expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
    });

    test('Handles large shifts (greater than 26)', () => {
        expect(caesarCipher('abc', 29)).toBe('def'); // Same as a shift of 3
    });

    test('Handles large negative shifts (less than -26)', () => {
        expect(caesarCipher('abc', -29)).toBe('xyz'); // Same as a shift of -3
    });
});
