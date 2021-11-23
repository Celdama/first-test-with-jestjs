import capitalize from '../code/capitalize'

test('first letter capitalized', () => {
  expect(capitalize('first letter')).toBe('First letter')
})
