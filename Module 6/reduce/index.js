const rainJanuryByWeek = [10, 20, 0, 122]
// let t = 0;

// for (let i = 0; i < rainJanuryByWeek.length; i++) {
//     t += rainJanuryByWeek[i]
// }

// console.log(t)

const totalRainfallJanuary = rainJanuryByWeek.reduce(function(total, currentElement) {
    console.log('total: ' + total, 'currentElement: ' + currentElement)
    return total + currentElement
})

console.log(totalRainfallJanuary)

//

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const avgGrades = grades.reduce(function(total, current) {
    return total + current
}) / grades.length;

console.log(avgGrades)