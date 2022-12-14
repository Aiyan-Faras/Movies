//  https://api.tvmaze.com/search/shows?q=girls

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const req = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    makeImages(req.data);
})

function makeImages(shows) {

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}