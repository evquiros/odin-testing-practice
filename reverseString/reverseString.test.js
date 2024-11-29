const reverseString = require('./reverseString')

test('Returns reversed string', () => {
    expect(reverseString('hello')).toBe('olleh')
})