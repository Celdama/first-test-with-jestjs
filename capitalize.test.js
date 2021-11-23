const capitalize = require('./capitalize')

test('first letter capitalized', () => {
  expect(capitalize('first letter')).toBe('First letter')
})
