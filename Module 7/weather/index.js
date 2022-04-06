const url = "https://apis.scrimba.com/openweathermap/data/2.5"
const endpoint = "/weather"
const arr = []

fetch(url + endpoint + "?q=singapore&units=metric")
    .then(resp => resp.json())
    .then(data => console.log(data))