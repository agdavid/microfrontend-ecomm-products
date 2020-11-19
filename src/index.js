import faker from 'faker';
let products = '';

for ( let i = o; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

console.log(products);