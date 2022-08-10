const axios = require('axios');
const url =
    'https://vin-contact-service.herokuapp.com/api/contacts/8ddb7fcf-0a7a-4eeb-a78f-13238ed85a77';

// Accept is a HTTP request header that sends the MIME type to the server
// to negotiate the kind of data representation the client wants
const options = {
    headers: {
        // Accept: 'text/plain',
        // Accept: 'application/xml',
        Accept: 'application/json',
    },
};

axios
    .get(url, options)
    .then((resp) => resp.data)
    .then(console.log)
    .catch((err) => console.log(err.response.data));
