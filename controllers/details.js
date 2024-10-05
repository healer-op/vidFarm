const params = new URLSearchParams(document.location.search);
let x = params.get("code")
console.log(x)

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5YTY3YTQ4NjBiNGE5NGQzNjIzMTIwM2I3NDEwMiIsIm5iZiI6MTcyODEyNzk0Ny41MTY4ODYsInN1YiI6IjYxNTMwOGE2MTU4Yzg1MDA0MjU3YTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBupCH2QAafkcZZChfmPNpJyj6FgAE59J9Kd8Yuk0UY'
    }
};

;
(async () => {

    try {
        if(x.includes("tvv")){
            let x1 = x.split("tvv")[1]
            let data = await (await fetch(`https://api.themoviedb.org/3/tv/${x1}`, options)).json();
            document.getElementById("posterimg").src= `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            document.getElementById("postertitle").innerText= `${data.name}`
            document.getElementById("posterrating").innerText= `${(data.vote_average).toFixed(1)}`
            document.getElementById("details-overview").innerText= `${data.overview}`
    
            let genres = data.genres;
            const gen_html = genres.map((f, i) => {
                return `<div class="genre-boxes"><p>${genres[i].name}</p></div>`;
            }).join('');
            document.querySelector("#postergen").insertAdjacentHTML("afterbegin", gen_html);
    
            
    
            let dc = await (await fetch(`https://api.themoviedb.org/3/tv/${x1}/credits`, options)).json();
            let cast = dc.cast
            const actor_html = cast.map((f, i) => {
                return ` <div class="actors-card">
                <div class="crop-container">
                  <img src="https://image.tmdb.org/t/p/w500/${cast[i].profile_path}" style="cursor: pointer;">
                </div>
                <div class="card-details">
                  <p>${cast[i].name}</p>
                  <p>${cast[i].character}</p>
                </div>
              </div>`;
            }).join('');
            document.querySelector("#actorz").insertAdjacentHTML("afterbegin", actor_html);
        }else{
            let data = await (await fetch(`https://api.themoviedb.org/3/movie/${x}`, options)).json();
            document.getElementById("posterimg").src= `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            document.getElementById("postertitle").innerText= `${data.title}`
            document.getElementById("posterrating").innerText= `${(data.vote_average).toFixed(1)}`
            document.getElementById("details-overview").innerText= `${data.overview}`
    
            let genres = data.genres;
            const gen_html = genres.map((f, i) => {
                return `<div class="genre-boxes"><p>${genres[i].name}</p></div>`;
            }).join('');
            document.querySelector("#postergen").insertAdjacentHTML("afterbegin", gen_html);
    
            
    
            let dc = await (await fetch(`https://api.themoviedb.org/3/movie/${x}/credits`, options)).json();
            let cast = dc.cast
            const actor_html = cast.map((f, i) => {
                return ` <div class="actors-card">
                <div class="crop-container">
                  <img src="https://image.tmdb.org/t/p/w500/${cast[i].profile_path}" style="cursor: pointer;">
                </div>
                <div class="card-details">
                  <p>${cast[i].name}</p>
                  <p>${cast[i].character}</p>
                </div>
              </div>`;
            }).join('');
            document.querySelector("#actorz").insertAdjacentHTML("afterbegin", actor_html);
        }
        
        
    } catch (error) {
        console.log(error)
    }

})();

function render(){
    console.log(x)
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    if(x.includes("tvv")){
        window.location.href = location +`/dist/index.html?name=${encodeURIComponent(document.getElementById("postertitle").innerText)}&type=series&code=${(x).split("tvv")[1]}&username=admin`
    }
    else{
        window.location.href = location +`/dist/index.html?name=${encodeURIComponent(document.getElementById("postertitle").innerText)}&type=movie&code=${x}&username=admin`
    }
    
}

function openSearch(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "/search.html"
}