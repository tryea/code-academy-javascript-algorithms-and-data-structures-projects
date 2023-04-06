function convertToRoman(num) {
    const romanToArabic = [
        ['M', 1000], // 0
        ['D', 500], // 1
        ['C', 100], // 2
        ['L', 50], // 3
        ['X', 10], // 4
        ['V', 5], // 5
        ['I', 1], // 6
    ]

    let currentNum = num
    let roman = ''

    romanToArabic.forEach((el, index) => {
        console.log(el)
        if (currentNum === 0) {
            return
        }
        if (currentNum > el[1] && index === 0) {
            const totalRoman = Math.floor(currentNum / el[1])
            roman = roman + Array(totalRoman).fill(el[0]).join('')
            currentNum -= el[1] * totalRoman
        } else if (currentNum > el[1] && index % 2 === 1 && index < 6) {
            if (currentNum > romanToArabic[index - 1][1] - romanToArabic[index + 1][1]) {
                roman = roman + romanToArabic[index + 1][0] + romanToArabic[index - 1][0]
                currentNum -= romanToArabic[index - 1][1] - romanToArabic[index + 1][1]
            } else {
                const totalRoman = Math.floor(currentNum / el[1])
                roman = roman + Array(totalRoman).fill(el[0]).join('')
                currentNum -= el[1] * totalRoman
            }
        } else if (index < 6 && console.log(el[1] - romanToArabic[index + 1][1]) && currentNum >= (el[1] - romanToArabic[index + 1][1])) {
            roman += romanToArabic[index + 1][0] + el[0]
            currentNum -= (el[1] + romanToArabic[index + 1][1])
        } else {
            if (index === 5) {
                if (currentNum < el[1] && currentNum === el[1] - romanToArabic[index + 1][1]) {
                    roman = roman + romanToArabic[index + 1][0] + el[0]
                    currentNum -= (el[1] - romanToArabic[index + 1][1])
                } else if (currentNum === el[1]) {
                    roman = el[0]
                    currentNum -= el[1]
                }
            } else {
                const totalRoman = Math.floor(currentNum / el[1])
                roman = roman + Array(totalRoman).fill(el[0]).join('')
                currentNum -= el[1] * totalRoman
            }

        }
    })

    return roman
}

console.log(convertToRoman(400));