const randomStrings = require('../index')


describe('Test funtionality RandomString', () => {
    test('Typeof is string', () => {
        expect(typeof(randomStrings())).toBe('string')
    })
    test('Not exists task', () => {
        expect(randomStrings()).not.toMatch('Learn dance')
    })
})