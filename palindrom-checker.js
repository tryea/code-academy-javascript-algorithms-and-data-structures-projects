function palindrome(str) {
    str = str.replace(/[\W_]+/g, '').toLowerCase()
    console.log({ str })
    let newStr = str.split('').reverse().join('')

    if (str !== newStr) {
        return false
    }
    return true;
}

module.exports = palindrome