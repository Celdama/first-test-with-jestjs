const reverse = require('./reverse')

test('string reversed', () => {
  expect(reverse('hello world')).toBe('dlrow olleh')
})