console.log('start of script');
const axios = require('axios');

const searchText = 'spider';
const apikey = 'aa9e49f';
const url = `http://www.omdbapi.com/?s=${searchText}&apikey=${apikey}`;

// Traditional way of dealing with promises
axios
    .get(url)
    .then((resp) => resp.data)
    .then((data) => data.Search)
    .then((movies) => movies.map((m) => `${m.Title} released in ${m.Year}`))
    .then(console.log);

// ES7 way of handling promises
async function getMovieDetails() {
    try {
        const resp = await axios.get(url); // returns the resolved value; throws the rejected error
        const data = resp.data;
        const movies = data.Search;
        const info = movies.map((m) => `${m.Title} released in ${m.Year}`);
        console.log(info);
    } catch (err) {
        console.log('There was an error', err.response.data);
    }
}

getMovieDetails();
console.log('end of script');
