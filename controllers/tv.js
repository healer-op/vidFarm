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
        let data_page1 = await (await fetch(`https://api.themoviedb.org/3/discover/tv?page=1`,options)).json();
        let data_page2 = await (await fetch(`https://api.themoviedb.org/3/discover/tv?page=2`,options)).json();
        let data_page3 = await (await fetch(`https://api.themoviedb.org/3/discover/tv?page=3`,options)).json();
        let data = [data_page1.results,data_page2.results,data_page3.results]
        data = data.flat()

        let Action_Adventure    =data.filter(o => (o.genre_ids).includes(10759));
        let Animation           =data.filter(o => (o.genre_ids).includes(16));
        let Comedy              =data.filter(o => (o.genre_ids).includes(35));
        let Crime               =data.filter(o => (o.genre_ids).includes(80));
        let Documentary         =data.filter(o => (o.genre_ids).includes(99));
        let Drama               =data.filter(o => (o.genre_ids).includes(18));
        let Family              =data.filter(o => (o.genre_ids).includes(10751));
        let Kids                =data.filter(o => (o.genre_ids).includes(10762));
        let Mystery             =data.filter(o => (o.genre_ids).includes(9648));
        let News                =data.filter(o => (o.genre_ids).includes(10763));
        let Reality             =data.filter(o => (o.genre_ids).includes(10764));
        let Sci                 =data.filter(o => (o.genre_ids).includes(10765));
        let Soap                =data.filter(o => (o.genre_ids).includes(10766));
        let Talk                =data.filter(o => (o.genre_ids).includes(10767));
        let War_Politics        =data.filter(o => (o.genre_ids).includes(10768));
        let Western             =data.filter(o => (o.genre_ids).includes(37));

        let trending = data
        switch (x) {
            case "1":
                break;
            case "2":
                trending = Action_Adventure
                break;
            case "3":
                trending = Animation
                break;
            case "4":
                trending = Comedy
                break;
            case "5":
                trending = Crime
                break;
            case "6":
                trending = Documentary
                break;
            case "7":
                trending = Drame
                break;
            case "8":
                trending = Family
                break;
            case "9":
                trending = Kids
                break;
            case "10":
                trending = Mystery
                break;
            case "11":
                trending = News
                break;
            case "12":
                trending = Reality
                break;
            case "13":
                trending = Sci
                break;
            case "14":
                trending = Soap
                break;
            case "15":
                trending = Talk
                break;
            case "16":
                trending = War_Politics
                break;
            case "17":
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
              <p class="item-title">${trending[i].name}</p>
              <div class="list-item-details-year-rating">
                <h5>${trending[i].first_air_date}</h5>
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
    window.location.href = location + `details.html?code=tvv${x}`
}