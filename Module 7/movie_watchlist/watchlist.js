const watchlistEl = document.getElementById("watchlist-container");

// render watchlist page from localstorage
async function renderWatchlist() {
    watchlistEl.innerHTML = "";

    for (key in localStorage) {
        if (key.substring(0,11) == 'movieObject') {
            const jsonString = localStorage.getItem(key);
            const localData = JSON.parse(jsonString);

            watchlistEl.innerHTML += `
                <div class="col">
                    <div class="movie-poster">
                        <img src="${localData.image}" id="poster" />
                    </div>
                    <div class="movie-info">
                        <div class="col-title">
                            <p class="p-title">${localData.title}</p>
                            <p class="p-ranting">⭐ ${localData.rating}</p>
                        </div>

                        <div class="col-info">
                            <p class="p-info">${localData.runtime}</p>
                            <p class="p-info">${localData.genre}</p>
                            <button id="${key}" class="watchlist" onclick="removeFromWatchlist(this)">➖ Remove</button> 
                        </div>

                        <div class="col-plot">
                            <p class="p-plot">${localData.plot} <a href="https://www.imdb.com/title/${localData.id}/" target="_blank"> Read more on imdb ...</a>
                            </p>
                        </div>
                    </div>
                </div><hr />
            `
        };
    };
};

// remove the key from localstorage
function removeFromWatchlist(event) {
    const key = event.getAttribute('id');
    localStorage.removeItem(key);
    renderWatchlist();
};

watchlistEl.addEventListener("load", renderWatchlist());
