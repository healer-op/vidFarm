const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGQ5YTY3YTQ4NjBiNGE5NGQzNjIzMTIwM2I3NDEwMiIsIm5iZiI6MTcyODEyNzk0Ny41MTY4ODYsInN1YiI6IjYxNTMwOGE2MTU4Yzg1MDA0MjU3YTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WBupCH2QAafkcZZChfmPNpJyj6FgAE59J9Kd8Yuk0UY'
    }
  };

async function getData(){
    let x = document.getElementById("select-category").value;
    try {
        let data_page1 = await (await fetch(`https://api.themoviedb.org/3/discover/movie?page=1`,options)).json();
        let data_page2 = await (await fetch(`https://api.themoviedb.org/3/discover/movie?page=2`,options)).json();
        let data_page3 = await (await fetch(`https://api.themoviedb.org/3/discover/movie?page=3`,options)).json();
        let data = [data_page1.results,data_page2.results,data_page3.results]
        data = data.flat()

        let Action          =data.filter(o => (o.genre_ids).includes(28));
        let Adventure       =data.filter(o => (o.genre_ids).includes(12));
        let Animation       =data.filter(o => (o.genre_ids).includes(16));
        let Comedy          =data.filter(o => (o.genre_ids).includes(35));
        let Crime           =data.filter(o => (o.genre_ids).includes(80));
        let Documentary     =data.filter(o => (o.genre_ids).includes(99));
        let Drama           =data.filter(o => (o.genre_ids).includes(18));
        let Family          =data.filter(o => (o.genre_ids).includes(10751));
        let Fantasy         =data.filter(o => (o.genre_ids).includes(14));
        let History         =data.filter(o => (o.genre_ids).includes(36));
        let Horror          =data.filter(o => (o.genre_ids).includes(27));
        let Music           =data.filter(o => (o.genre_ids).includes(10402));
        let Mystery         =data.filter(o => (o.genre_ids).includes(9648));
        let Romance         =data.filter(o => (o.genre_ids).includes(10749));
        let Science_Fiction =data.filter(o => (o.genre_ids).includes(878));
        let TV_Movie        =data.filter(o => (o.genre_ids).includes(10770));
        let Thriller        =data.filter(o => (o.genre_ids).includes(53));
        let War             =data.filter(o => (o.genre_ids).includes(10752));
        let Western         =data.filter(o => (o.genre_ids).includes(37));

        let trending = data
        switch (x) {
            case "1":
                break;
            case "2":
                trending = Action
                break;
            case "3":
                trending = Adventure
                break;
            case "4":
                trending = Animation
                break;
            case "5":
                trending = Comedy
                break;
            case "6":
                trending = Crime
                break;
            case "7":
                trending = Documentary
                break;
            case "8":
                trending = Drama
                break;
            case "9":
                trending = Family
                break;
            case "10":
                trending = Fantasy
                break;
            case "11":
                trending = History
                break;
            case "12":
                trending = Horror
                break;
            case "13":
                trending = Music
                break;
            case "14":
                trending = Mystery
                break;
            case "15":
                trending = Romance
                break;
            case "16":
                trending = Science_Fiction
                break;
            case "17":
                trending = TV_Movie
                break;
            case "18":
                trending = Thriller
                break;
            case "19":
                trending = War
                break;
            case "20":
                trending = Western
                break;
        
            default:
                break;
        }
        
        console.log(trending)
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
    } catch (error) {
        console.log(error)
    }
    
}

getData()

async function getDetails(x){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + `details.html?code=${x}`
}