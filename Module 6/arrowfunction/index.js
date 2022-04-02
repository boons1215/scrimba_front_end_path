// function speedWarning(speed) {
//     return `you are going at ${speed} mph!`
// }

const speedWarning = (speedLimit, actualSpeed) => {
    if (actualSpeed > speedLimit) {
        return `you are going at ${actualSpeed}`
    } else {
        return `you are ok`
    }
}

console.log(speedWarning(40, 50))

//

const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance) {
//     return Math.round(distance * 1.6)
// })

// console.log(distanceTraveledKm)

const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6)) 
console.log(distanceTraveledKm)

//

const alertSpend = amount => {
    return 'Warning!'
}

console.log(alertSpend())

//

const test = () => {
    return 'works'
}

console.log(test())

// 

const tas = (name, amount) => {
    return `${name}, ${amount}`
}

console.log(tas("asd", 12))

//

const bas = amount => {
    return `${amount}`
}

console.log(bas(12))

// 

const asdsads = amount => {
    if (amount > 50) {
        return `${amount}`
    }
}

console.log(asdsads(60))