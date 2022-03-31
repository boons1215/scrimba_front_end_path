const animalForRelease1 = {
    name: 'Tilly',
    species: 'tiger',
    weightKg: 56,
    age: 2,
    dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
    name: 'Nelly',
    species: 'elephant',
    weightKg: 320,
    age: 16,
    dateOfRelease: '03-02-2022'
}

function Animal(data){
    this.name = data.name
    this.species = data.species
    this.weightKg = data.weightKg
    this.age = data.age
    this.dateOfRelease = data.dateOfRelease  
    this.summariesAnimal = function() {
		console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`) 
    }
}

const tillyTheTiger = new Animal(animalForRelease1)
const nellyTheElephant = new Animal(animalForRelease2)
console.log(tillyTheTiger)
nellyTheElephant.summariesAnimal()

//


const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
    costPerNightChild: 180,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
    costPerNightChild: 180,
}

function NationalParkHotels(hotel) {
    this.name = hotel.name
    this.rooms = hotel.rooms
    this.stars = hotel.stars
    this.costPerNightAdult = hotel.costPerNightAdult
    this.costPerNightChild = hotel.costPerNightChild
    this.summariseHotel = function(numOfAdult, numOfChild) {
        this.price = (this.costPerNightAdult * numOfAdult) + (this.costPerNightChild * numOfChild)
        console.log(`A one night stay at the ${this.name} for two adults and two children costs a total of ${this.price}`)
    }
}

const safariView = new NationalParkHotels(hotel1)
const leopardMansion = new NationalParkHotels(hotel2)

console.log(safariView)
console.log(leopardMansion)

let numOfChild = 2
let numOfAdult = 2

safariView.summariseHotel(numOfAdult, numOfChild)
leopardMansion.summariseHotel(numOfAdult, numOfChild)