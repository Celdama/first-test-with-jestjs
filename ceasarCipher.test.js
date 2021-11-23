const ceaserCipher = require('./ceasarCipher')

test('string cipher by 1', () => {
  expect(ceaserCipher('hello')).toBe('ifmmp')
})

test('string cipher keeping the same case', () => {
  expect(ceaserCipher('Hello')).toBe('Ifmmp')
  expect(ceaserCipher('HelLo')).toBe('IfmMp')
})

test('string cipher work on punctuation', () => {
  expect(ceaserCipher('Hello.')).toBe('Ifmmp/')
  expect(ceaserCipher('Hello?')).toBe('Ifmmp@')
  expect(ceaserCipher('Hello!')).toBe('Ifmmp"')
})

test('string cipher work with white space', () => {
  expect(ceaserCipher('Hello World')).toBe('Ifmmp!Xpsme')
  expect(ceaserCipher('hello world')).toBe('ifmmp!xpsme')
})