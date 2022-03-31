const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

console.log(`My favourite film is ${favouriteFilm.title} starring ${favouriteFilm.star}. It's an ${favouriteFilm.genre} film that was directed by ${favouriteFilm.director} and released in ${favouriteFilm.year}`)

const {title, year, genre, star, director} = favouriteFilm

console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}`)

//

const dreamHoliday = {
    destination: 'Auston, Texas',
    activity: 'to visit the Tesla HQ',
    accommodation: 'luxury ranch',
    companion: 'Elon Musk'
}

console.log(`I would love to go to ${dreamHoliday.destination} ${dreamHoliday.activity}.
I'd sleep in a ${dreamHoliday.accommodation} and hang out with ${dreamHoliday.companion} all day.`)


//

const energyCostEuros = [140, 153, 164, 153, 128, 146]
const exchangeRate = 1.13

const energyCostDollars = energyCostEuros.map(function(euroCost) {
    return euroCost * exchangeRate
})

console.log(energyCostDollars)