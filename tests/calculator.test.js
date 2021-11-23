import { add, substract, divide, multiply } from '../code/calculator'

test('calculator work', () => {
  expect(add(2, 4)).toBe(6)
  expect(substract(2, 4)).toBe(-2)
  expect(divide(2, 4)).toBe(0.5)
  expect(multiply(2, 4)).toBe(8)
})
