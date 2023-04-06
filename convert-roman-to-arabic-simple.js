function convertToRoman(num) {
    const romanToArabic = [
        ['M', 1000], // 0
        ['CM', 900], // 1
        ['D', 500], // 2
        ['CD', 400], // 3
        ['C', 100], // 4
        ['XC', 90], // 5
        ['L', 50], // 6
        ['XL', 40], // 7
        ['X', 10], // 8
        ['IX', 9], // 9
        ['V', 5], // 10
        ['IV', 4], // 11
        ['I', 1], // 12
    ]

    let currentNum = num
    let roman = ''

    romanToArabic.forEach((el, index) => {
        console.log(el)
        if (currentNum === 0) {
            return
        }

        const totalRoman = Math.floor(currentNum / el[1])
        roman = roman + Array(totalRoman).fill(el[0]).join('')
        currentNum -= el[1] * totalRoman
    })

    return roman
}

console.log(convertToRoman(9));