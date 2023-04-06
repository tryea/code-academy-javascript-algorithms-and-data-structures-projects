function rot13(str) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z',
    ]

    const strArr = str.split('')
    let newStr = ''

    strArr.forEach((char) => {
        if (/([A-Z])$/.test(char)) {
            let currentStrIndex = alphabet.findIndex((alphabet) => {
                return char === alphabet
            })

            let newStrIndex = currentStrIndex - 13 < 0 ? 26 + (currentStrIndex - 13) : currentStrIndex - 13

            let newChar = alphabet[newStrIndex]
            newStr += newChar
        } else {
            // console.log(el)
            newStr += char
        }
    })


    return newStr;
}

console.log(rot13("SERR PBQR PNZC"));