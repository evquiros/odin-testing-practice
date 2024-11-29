const calculator = require('./calculator');

test('Returns the sum of two given numbers', () => {
    expect(calculator.sum(1, 2)).toBe(3)
})

test('Returns the substraction of two given numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1)
})

test('Returns the multiplication of two given numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2)
})

test('Returns the division of two given numbers', () => {
    expect(calculator.divide(2, 1)).toBe(2)
})