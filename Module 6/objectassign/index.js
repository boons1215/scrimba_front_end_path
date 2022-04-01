const studentDetails = {
    firstName: "jai",
    lastName: "siri",
    age: 28,
    country: "sri lanka",
    email: "sas@mail.com",
    discordUsername: "js1",
}

const studentDetailsCopy = {}
Object.assign(studentDetailsCopy, studentDetails)
console.log(studentDetailsCopy)

function Student(data) {
    // this.firstName = data.firstName
    // this.lastName = data.lastName
    // this.age = data.age
    // this.country = data.country
    // this.email = data.email
    // this.discordUsername = data.discordUsername
    Object.assign(this, data)
    this.summariseStudent = function() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
        and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`)
    }
}

const newSutdent = new Student(studentDetails)
newSutdent.summariseStudent()