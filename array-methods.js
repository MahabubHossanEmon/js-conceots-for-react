const products = [
    {name: 'laptop', price:3200, brand: 'lenevo', color:'silver'},
    {name: 'phone', price:7000, brand: 'iphone', color:'silver'},
    {name: 'watch', price:3000, brand: 'casio', color:'black'},
    {name: 'cemera', price:9000, brand: 'canon', color:'black'},
];
// 1. map use
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
console.log(brands);
console.log(prices);

//2. forEach use
products.forEach(product => console.log(product.color));

//3.filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
const specificName = products.filter(product =>product.name.includes('n'));
console.log(specificName);


//find 
const special = products.find(product => product.name.includes('p'));
console.log(special);