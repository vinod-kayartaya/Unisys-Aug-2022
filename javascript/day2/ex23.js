'use strict';

class Product {
    constructor(kwargs) {
        this._id = kwargs['id'];
        this._name = kwargs['name'];
        this._category = kwargs['category'] || 'unknown';
        this._price = kwargs['price'] || 0.0;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    set price(value) {
        if (typeof value !== 'number') {
            throw Error('price must be a number');
        }
        if (value < 0) {
            throw Error('price cannot be negative');
        }
        this._price = value;
    }
}

let p1 = new Product({ id: 112, name: 'Chai', price: 12.3 });
let p2 = new Product({ id: 123, name: 'Chang', category: 'Beverages' });
let p3 = new Product({ id: 431, name: 'iPad' });

p1.category = 'Beverages';
p1.price = 23;

console.log('p1.id is', p1.id);
console.log('p1.name is', p1.name);
console.log('p1.category is', p1.category);
console.log('p1.price is', p1.price);
