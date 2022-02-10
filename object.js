var computer ={
    price : 29000,
    storage : '1TB',
    color : 'silver',
    processor : 'intel i3'
}
console.log(computer);

console.log(computer.processor);

var computerPrice = computer.price;
console.log(computerPrice);

computer.price = 22000;
console.log(computer);

computer['price'] = 23000;
console.log(computer); 


