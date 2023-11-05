function normalizeName(name) {
    res = name
    s = res.split(' ')
    res = ''
    for (var i = 0; i < s.length; i++) {
        ss = s[i]
        res = res + ss.substring(0, 1).toUpperCase()
        res = res + ss.substring(1).toLowerCase() 
        res = res + ' '
    }
    return res
}

function normalizeBirthday(birthday) {
    res = birthday
    s = res.split('/')
    res = ''
    if (s.length !== 3) return false
    if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false

    day = parseInt(s[0])
    month = parseInt(s[1])
    year = parseInt(s[2])

    if (month > 12 || month < 1) return false
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day <= 0 || day > 31) return false
    } else if (month === 2) {
        if (year % 4 === 0 && year % 100 !== 0) {
            if (day <= 0 || day > 29) return false
        } else {
            if (day <= 0 || day > 28) return false
        }
    } else {
        if (day <= 0 || day > 30) return false
    }
    date = new Date()
    if (year > date.getFullYear() || year < 1900) return false
    return true
}

let date = '20/6/2003'
console.log(normalizeBirthday(date));