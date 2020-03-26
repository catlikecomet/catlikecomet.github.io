// Wait for the DOM to finish loading otherwise getElementById may not find the objects
document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelector('img');
    const url = 'https://cors-anywhere.herokuapp.com/' + 'http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false';

    const getPicture = async (url) => {
        console.log('Fetching url of image...');
        let response = await fetch(url);
        console.log('Image url fetched...');
        return await response.json();
    };

    document.getElementById("btnClickForCats").addEventListener("click", () => {
        getPicture(url)
            .then(result => {
                document.getElementById("btnClickForCats").style.display = "inline-block";
                console.log('Image url is: ' + result);
                img.setAttribute('src', result);
                console.log('Image rendering now...');
            })
            .catch(e => {
                console.error("Error -> ${e}");
            })
    });
});
