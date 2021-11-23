const ceaserCipher = (string) => {
  const letterArray = [...string]
  const charCode = getCharCodeLetter(letterArray)
  const newCharCode = shiftCharCode(charCode, 1)
  const cipherString = cipher(newCharCode);
  return cipherString
}

const cipher = (arrayOfLetter) => {
  const arrayLetterCipher = []

  arrayOfLetter.forEach(letter => {
    const cipherLetter = String.fromCharCode(letter)
    arrayLetterCipher.push(cipherLetter)
  })

  return arrayLetterCipher.join("")

}

const shiftCharCode = (array, shiftedValue) => {
  const shiftedArray = []

  array.forEach(letter => {
    shiftedArray.push(letter + shiftedValue)
  })

  return shiftedArray
}

const getCharCodeLetter = (letters) => {
  const charCodeForEachLetter = []


  letters.forEach((letter) => {
    const number = letter.charCodeAt()
    charCodeForEachLetter.push(number)
  })

  return charCodeForEachLetter
}


module.exports = ceaserCipher