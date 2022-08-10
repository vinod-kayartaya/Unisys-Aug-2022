const axios = require('axios');
const url = 'https://vinbasket.herokuapp.com/products';

console.log('start of script');

axios
    .get(url)
    .then((resp) => resp.data) // promise is resolved
    .then((products) => products.filter((p) => p.category === 'fruit'))
    .then((fruits) => fruits.filter((p) => p.brand === 'Zespri'))
    .then((zespriFruits) =>
        zespriFruits.map((p) => ({
            product: p.description,
            price: p.unit_price,
        }))
    )
    .then(console.log) // return value from the previous ".then()" is received as callback's arg
    .catch(console.error); // promise is rejected

console.log('end of script');
