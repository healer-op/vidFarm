function openIndex(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "index.html"
}
function opensearch(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "search.html"
}
function openMovies(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "movies.html"
}
function openTv(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "tv.html"
}
function openIptv(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location + "tv/index.html"
}