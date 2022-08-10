const axios = require('axios');

const searchText = 'spider';
const apikey = 'aa9e49f';

const url = `http://www.omdbapi.com/?s=${searchText}&apikey=${apikey}`;

console.log('start of script');

axios
    .get(url)
    .then((resp) => {
        for (let key in resp) {
            console.log(key);
        }

        console.log('resp.status', resp.status);
        console.log('resp.statusText', resp.statusText);
        console.log('resp.data', resp.data);
    })
    .catch((err) => console.log('There was an error', err.response));

console.log('end of script');
