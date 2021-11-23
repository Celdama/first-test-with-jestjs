const calculator = require('./calculator')

test('calculator work', () => {
  expect(calculator.add(2, 4)).toBe(6)
  expect(calculator.substract(2, 4)).toBe(-2)
  expect(calculator.divide(2, 4)).toBe(0.5)
  expect(calculator.multiply(2, 4)).toBe(8)
})
