// API URL http://www.omdbapi.com

const searchEl = document.getElementById("search-input");
const searchForm = document.getElementById("search-container");
const filmEl = document.getElementById("film-container");
const filmTypeEl = document.getElementById("film-type");
const searchStatusEl = document.getElementById("search-status");
const saveBtn = document.getElementById("add-watchlist")
const movieArr = []

// render search list page
async function renderMovieList(filmData, filmType) {
    searchStatusEl.textContent = await `Search for: ${filmType} (result: ${filmData.length})`

    for (let id of filmData) {
        fetch(`http://www.omdbapi.com/?apikey=2fadc37a&i=` + id)
            .then(resp => resp.json())
            .then(data => {
                movieArr.push({
                    id: id,
                    image: data.Poster, 
                    title: data.Title, 
                    rating: data.imdbRating, 
                    runtime: data.Runtime, 
                    genre: data.Genre, 
                    plot: data.Plot
                })

                filmEl.innerHTML += `
                    <div class="col">
                        <div class="movie-poster">
                            <img src="${data.Poster}" id="poster" />
                        </div>
                        <div class="movie-info">
                            <div class="col-title">
                                <p class="p-title">${data.Title}</p>
                                <p class="p-ranting">⭐ ${data.imdbRating}</p>
                            </div>

                            <div class="col-info">
                                <p class="p-info">${data.Runtime}</p>
                                <p class="p-info">${data.Genre}</p>
                                <button id="${filmData.indexOf(id)}" class="watchlist" onclick="saveToWatchlist(this)">➕ Watchlist</button>
                            </div>

                            <div class="col-plot">
                                <p class="p-plot">${data.Plot} <a href="https://www.imdb.com/title/${id}/" target="_blank"> Read more on imdb ...</a>
                                </p>
                            </div>
                        </div>
                    </div><hr />
                `
            });
    };
};

// store the watchlist in local storage
function saveToWatchlist(event) {
    const id = event.getAttribute('id');
    localStorage.setItem(`movieObjects${id}`, JSON.stringify(movieArr[id]));
};

// retrieve film list by searching
searchForm.addEventListener("submit", async event => {
    event.preventDefault();
    
    // search input and search type
    filmEl.innerHTML = "";
    let imdbIdArray = [];
    const searchString = searchEl.value;
    let filmType = filmTypeEl.options[filmTypeEl.selectedIndex].value;

    // fetch data from the api server
    const response = await fetch(`http://www.omdbapi.com/?apikey=2fadc37a&type=` + filmType + `&s=` + searchString);
    const data = await response.json();

    if (data.Response === "True") {
        // sanitize the initial data by including the imdbID only
        imdbIdArray = data.Search.map(id => id.imdbID);
        // render the contents
        renderMovieList(imdbIdArray, filmType);
    } else {
        searchStatusEl.textContent = `Search for: ${filmType} - no result`
    }
});
