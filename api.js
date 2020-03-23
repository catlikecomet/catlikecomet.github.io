async function getPicture() {
    let proxyUrl = await fetch("https://cors-anywhere.herokuapp.com/");
    let response = await fetch(proxyUrl + "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false");
    let user = await response.json();

    let image = document.createElement("randomcat");
    image.src = URL.createObjectURL(user);
    document.body.append(image);

    await new Promise((resolve, reject) => setTimeout(3000));

    image.remove();

    return user;
}

getPicture();

