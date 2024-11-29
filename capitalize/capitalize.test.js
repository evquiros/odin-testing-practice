const capitalize = require('./capitalize')

test('Return first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello')
})