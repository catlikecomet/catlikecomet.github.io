async function getPicture() {
    let response = await fetch("https://cors-anywhere.herokuapp.com/" + "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false");
    return await response.json();
}

getPicture().then((object) => {
    const image = document.getElementById("randomcat");
    image.src = object;
})
    .catch((e) =>
    console.log(e)
);
