function getPicture(){
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyUrl + "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false")
    .then(response => response.json())
    .then(response => document.getElementById("randomcat").src=response)
}
