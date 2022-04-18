fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
            <p>🎯: ${data.market_data.current_price.usd}</p>
            <p>👆: ${data.market_data.high_24h.usd}</p>
            <p>👇: ${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// time
setInterval(() => {
    const currentDate = new Date()
    document.getElementById("time").textContent = currentDate.toLocaleTimeString("en-us", {timeStyle: "short"})
}, 1000)

// weather
navigator.geolocation.getCurrentPosition(position => {
    const longitude = position.coords.longitude
    const latitude = position.coords.latitude
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)
        .then(resp => {
            if (!resp.ok) {
                throw Error("weather data not available")
            }
            return resp.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById("weather").innerHTML = `
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
                <p class="weather-temp">${Math.round(data.main.temp)}</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
})
