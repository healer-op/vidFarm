const source = document.getElementById('source');
const source2 = document.getElementById('source2');
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5YTY3YTQ4NjBiNGE5NGQzNjIzMTIwM2I3NDEwMiIsIm5iZiI6MTcyODEyNzk0Ny41MTY4ODYsInN1YiI6IjYxNTMwOGE2MTU4Yzg1MDA0MjU3YTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBupCH2QAafkcZZChfmPNpJyj6FgAE59J9Kd8Yuk0UY'
    }
};


const inputHandler = async function (e) {
    getData()

}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler)
source2.addEventListener('input', inputHandler);
source2.addEventListener('propertychange', inputHandler)


async function getDetails(x) {
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + `details.html?code=${x}`
}

async function getData() {
    let x = document.getElementById("source").value;
    if(!x){
        x = document.getElementById("source2").value;
    }
    document.getElementById("result").innerText = x
    let y = document.getElementById("select-category").value;
    try {
        if (y == 1) {
            let data = await (await fetch(`https://api.themoviedb.org/3/search/movie?&query=${x}`, options)).json();
            trending = data.results
            // console.log(trending)

            document.getElementById("mov").innerHTML = ""
            const trending_html = trending.map((f, i) => {
                return `<div class="list-item"  onclick="getDetails(${trending[i].id})">
            <img
              class="list-item-image"
              src="https://image.tmdb.org/t/p/w500${trending[i].poster_path}"
              alt="img"
            />
            <div class="list-item-details">
              <p class="item-title">${trending[i].title}</p>
              <div class="list-item-details-year-rating">
                <h5>${trending[i].release_date}</h5>
                <img src="/images/tmdb.svg" alt="TMDB" />
                <h5>${(trending[i].vote_average).toFixed(1)}</h5>
              </div>
            </div>
          </div>`;
            }).join('');
            document.querySelector("#mov").insertAdjacentHTML("afterbegin", trending_html);
        } if(y == 2) {
            let data = await (await fetch(`https://api.themoviedb.org/3/search/tv?&query=${x}`, options)).json();
            trending = data.results
            // console.log(trending)

            document.getElementById("mov").innerHTML = ""
            const trending_html = trending.map((f, i) => {
                return `<div class="list-item"  onclick="getDetails('tvv${trending[i].id}')">
            <img
              class="list-item-image"
              src="https://image.tmdb.org/t/p/w500${trending[i].poster_path}"
              alt="img"
            />
            <div class="list-item-details">
              <p class="item-title">${trending[i].name}</p>
              <div class="list-item-details-year-rating">
                <h5>${trending[i].release_date}</h5>
                <img src="/images/tmdb.svg" alt="TMDB" />
                <h5>${(trending[i].vote_average).toFixed(1)}</h5>
              </div>
            </div>
          </div>`;
            }).join('');
            document.querySelector("#mov").insertAdjacentHTML("afterbegin", trending_html);
        } else{
            let data = await (await fetch(`https://api3.janime.workers.dev/search/${encodeURIComponent(x)}`, options)).json();
            trending = data.results

            const trending_html = trending.map((f, i) => {
                return `<div class="list-item"  onclick="getDetails('anime${trending[i].id}')">
            <img
              class="list-item-image"
              src="${trending[i].img}"
              alt="img"
            />
            <div class="list-item-details">
              <p class="item-title">${trending[i].title}</p>
              <div class="list-item-details-year-rating">
                <h5>${trending[i].releaseDate}</h5>
              </div>
            </div>
          </div>`;
            }).join('');
            document.querySelector("#mov").insertAdjacentHTML("afterbegin", trending_html);
        }

    } catch (error) {

    }
}