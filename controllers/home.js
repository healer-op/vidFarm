

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5YTY3YTQ4NjBiNGE5NGQzNjIzMTIwM2I3NDEwMiIsIm5iZiI6MTcyODEyNzk0Ny41MTY4ODYsInN1YiI6IjYxNTMwOGE2MTU4Yzg1MDA0MjU3YTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBupCH2QAafkcZZChfmPNpJyj6FgAE59J9Kd8Yuk0UY'
    }
  };

;(async ()=>{
    try {
        let data = await (await fetch(`https://api.themoviedb.org/3/trending/movie/day`,options)).json();
        let trending = data.results

        const trending_html = trending.map((f, i) => {
            return ` <div class="info-box" onclick="getDetails(${trending[i].id})">
            <img src="https://image.tmdb.org/t/p/w500/${trending[i].poster_path}" />
            <div class="home-scrollbar-title">
              ${trending[i].title}
            </div>
            <div class="home-scrollbar-rating">${(trending[i].vote_average).toFixed(1)}</div>
          </div>`;
        }).join('');
        document.querySelector("#custom-scrollbar-trending").insertAdjacentHTML("afterbegin", trending_html);


        let dp = await (await fetch(`https://api.themoviedb.org/3/movie/popular`,options)).json(); 
        console.log(dp)
        let popular = dp.results

        const popular_html = popular.map((f, i) => {
            return ` <div class="info-box" onclick="getDetails(${popular[i].id})">
            <img src="https://image.tmdb.org/t/p/w500/${popular[i].poster_path}" />
            <div class="home-scrollbar-title">${popular[i].title}</div>
            <div class="home-scrollbar-rating">${(popular[i].vote_average).toFixed(1)}</div>
          </div>`;
        }).join('');
        document.querySelector("#custom-scrollbar-popular").insertAdjacentHTML("afterbegin", popular_html);
    } catch (error) {
        console.log(error)
    }
    
})();


async function getDetails(x){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + `details.html?code=${x}`
}

function openSearch(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "search.html"
}

